import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log("Erro capturado:", error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Algo deu errado na aplicação.</h2>
          <button onClick={this.handleReset}>Tentar novamente</button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
