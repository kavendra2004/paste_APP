import { createBrowserRouter,RouterProvider } from "react-router";
import './App.css'
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Paste from "./components/Paste";
import Viewpaste from "./components/Viewpaste";


let router = createBrowserRouter([
  {
    path: "/",
    element: 
    <div>
      <Navbar />
      <Home />
    </div>
  },
  {
    path: "/pastes",
    element: 
    <div>
      <Navbar />
      <Paste />
    </div>
  },
  {
    path: "/pastes/:id",
    element: 
    <div>
      <Navbar />
      <Viewpaste />
    </div>
  },
]);

function App() {
  
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
