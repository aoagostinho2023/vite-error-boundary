# Projeto Vite + React com Error Boundary

## Descrição

Este é um projeto simples criado com Vite e React para demonstrar o uso de Error Boundaries.

A aplicação possui um campo onde o usuário digita um número e o sistema divide 100 por esse número.
Se o usuário digitar 0, ocorre um erro proposital e o Error Boundary captura esse erro e mostra uma tela de erro.
A tela de erro contem um botão "Tentar novamente", que reseta o app para que o usuário digite um novo número.

## Tecnologias usadas

- Vite
- React
- JavaScript
- Node.js

## Como executar o projeto

No terminal, dentro da pasta do projeto:

npm install
npm run dev

Depois abrir o navegador em:
http://localhost:5173

## Estrutura do projeto

src/
App.jsx
ErrorBoundary.jsx
Divider.jsx
main.jsx

## Objetivo

Aprender a criar um projeto com Vite + React e utilizar Error Boundaries para tratar erros na aplicação.
