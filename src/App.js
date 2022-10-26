import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home'
import Main from './layout/Main';
import { router } from './routes/routes';
import { RouterProvider } from "react-router-dom";
function App() {
  return (
    <div className="">
        <RouterProvider router={router}> </RouterProvider>
    </div>
  );
}

export default App;
