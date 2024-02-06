import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Home from "./pages/HomePage";
import Hero from "./components/Hero";


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

  ])


  return (
    <RouterProvider router={router}>

    </RouterProvider>
   
  );
}

export default App;
