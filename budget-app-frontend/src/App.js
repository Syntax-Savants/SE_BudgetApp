import './App.css';
import DefaultPage from './pages/DefaultPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

import * as server from "./intergration/server";
function App() {
  console.log(server.user());

  return (<HomePage />
  );
}

export default App;
