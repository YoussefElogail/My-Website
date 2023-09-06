
import { useContext } from "react";
import Home from "./pages/Home/Home";
// @ts-ignore
import Skills from "./pages/Skills/Skills"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ThemeContext from "./ThemeContext";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";
import NotFond from "./pages/not_found/NotFond";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/skills",
    element: <Skills />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/contact_me",
    element: <Contact />,
  },
  {
    path: "*",
    element: <NotFond />,
  },
]);

function App() {
  const {theme} = useContext(ThemeContext);
  

  return (
  <div className={`App ${theme}`}>
      <RouterProvider router={router} />
  </div>
  )
}

export default App
