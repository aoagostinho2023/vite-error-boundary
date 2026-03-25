import ErrorBoundary from "./ErrorBoundary";
import Divider from "./Divider";

function App() {
  return (
    <div>
      <h1>Projeto Error Boundary</h1>

      <ErrorBoundary>
        <Divider />
      </ErrorBoundary>
    </div>
  );
}

export default App;
