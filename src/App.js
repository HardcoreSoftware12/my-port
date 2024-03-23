import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Home from "./pages/HomePage";
import Hero from "./components/Hero";
import Education from "./components/Education";
import { useLocation } from "react-router-dom";
import Projects from "./components/Projects";


function App() {
  // const location = useLocation();
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    
    
    {
      path:"/projects",
      element:<Projects/>
    },

  ])


  return (
    <RouterProvider router={router}>

    </RouterProvider>
   
  );
}

export default App;
