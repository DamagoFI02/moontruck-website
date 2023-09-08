import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./sites/Home";
import Team from "./sites/Team";
import Imprint from "./sites/Imprint";
import Privacy from "./sites/Privacy";
import RootsLayout from "./sites/RootsLayout";
import Updates from "./sites/Updates";




const router = createBrowserRouter([
  {
    path: '/',
    element: <RootsLayout />,
    children: [
      { path: '/', element: <Home/>},
      { path: '/updates', element: <Updates/>},
      { path: '/impressum', element: <Imprint/>},
      { path: '/dsgvo', element: <Privacy/>},
      { path: '/team', element: <Team/>},
    ],
  },

]);


function App() {
  return <RouterProvider router={router}/>;
}

export default App;
