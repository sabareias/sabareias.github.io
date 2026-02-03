//import 'bootstrap/dist/css/bootstrap.min.css'
//import "bootswatch/dist/pulse/bootstrap.min.css";
import "/scss/custom.scss";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"; 

import Index from "./pages/Index";
import ProjectsPage from "./pages/Projects/ProjectsPage";
import ProjectPage from "./pages/Project/ProjectPage";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
  path: "/",
  element: <Index />,
  errorElement: <NotFound />,
  },
  {
    path: "/projects",
    element: <ProjectsPage />,
  },
  {
    path: "/projects/:projectId",
    element: <ProjectPage />,
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
