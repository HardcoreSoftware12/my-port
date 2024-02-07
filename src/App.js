import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Home from "./pages/HomePage";
import Hero from "./components/Hero";
import Education from "./components/Education";


function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/hero",
      element:<Hero/>
    },
    {
      path:"/education",
      element:<Education/>
    },

  ])


  return (
    <RouterProvider router={router}>

    </RouterProvider>
   
  );
}

export default App;
