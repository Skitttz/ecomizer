<div id="user-content-toc" align="center">
  <ul align="center" style="list-style: none;">
    <img width="12%" src="./public/favicon.ico">
    <summary><h1>Ecomizer</h1></summary>
  </ul>
</div>

<div align="center"><b>Ecomizer</b> is a simple financial tracking application</div>

## 💻 Description

Ecomizer is a personal finance management tool that allows users to log and track their financial transactions, including both income and expenses. Users can easily filter their transactions using the search field to find entries by item name, making it simple to manage and review their financial data.

## 🛠️ Technologies

The following technologies were used to build this project:

- **⚛️ [ReactJS](https://reactjs.org)**: JavaScript library for building declarative and modular user interfaces.
- **🔷 [TypeScript](https://www.typescriptlang.org/)**: A JavaScript superset that adds static typing for improved safety and productivity.
- **⚡ [Vite](https://vitejs.dev/)**: A fast and lightweight build tool for front-end development with ESModules support.
- **📝 [React Hook Form](https://react-hook-form.com/)**: Library for managing forms in React with a focus on performance and simplicity.
- 📊 **[Recharts](https://recharts.org/en-US/)**: A library for building flexible and customizable charts and data visualizations in React.
- **🎨 [Styled Components](https://styled-components.com/)**: Library for styling React components using CSS-in-JS.
- **🛡️ [Zod](https://zod.dev/)**: TypeScript-first data validation library, ensuring type safety and data integrity.
- **📡 [JSON Server](https://github.com/typicode/json-server)**: Provides a full fake REST API with zero coding for rapid prototyping and testing.
- **🧩 [Radix UI](https://radix-ui.com/)**: Unstyled, accessible UI components for building high-quality design systems and interfaces.

</br>

## 🚀 How to Use

Clone this repository to your local machine.

```bash
$ git clone git@github.com:Skitttz/ecomizer.git
```

### 📂 Project Setup

1. **Navigate to the Project Directory**:

   ```bash
   $ cd ecomizer
   ```

2. **Install Dependencies**:
   ```bash
   $ npm install
   ```

</br>

### 🌐 Running the Frontend

To start the frontend server:

```bash
$ npm run dev
```

- Once the server starts, you’ll see a local address in the terminal.
- Open your browser and go to `http://localhost:5173/` to view the application.

</br>

### 🛠️ Running the Backend Locally

The backend is powered by JSON Server for easy API prototyping. Follow these steps to run it locally:

1. **Start the JSON Server**:
   ```bash
   $ npm run dev:server
   ```

This will start the backend server at `http://localhost:3000/transactions`, allowing your frontend to interact with it locally.

## 🎯 Demo

Visit the project [here](https://ecomizer.vercel.app/) - Deployed on Vercel
