import Menu from "./components/task1/Menu/Menu";
import Main from "./components/task1/Main/Main";
import Header from "./components/task2/Header/Header";
import Main2 from "./components/task2/Main2/Main2";
import Page from "./pages/task3/Page";

import { BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <h1>Hooks & Context API</h1>
      <div className="task task1">
        <h3>Задача 1. Навигационное меню</h3>
        <BrowserRouter>
          <Menu />
          <Main />
        </BrowserRouter>
      </div>
      <div className="task task2">
        <h3>Задача 2. CRUD</h3>
        <BrowserRouter>
          <Header/>
          <Main2 />
        </BrowserRouter>
      </div>
      <div className="task task3">
        <h3>Задача 3. Authentication</h3>
        <BrowserRouter>
          <Page />          
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
