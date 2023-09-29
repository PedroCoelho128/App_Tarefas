import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Sobre from "../pages/sobre";
import NotFound from "../pages/notFound";
import Contato from "../pages/contato";
import Tarefas from "../pages/tarefas";

const router = createBrowserRouter([
    { path: '/', element: <Home />, errorElement: <NotFound /> },
    { path: '/', element:<Home /> },
    { path: '/sobre', element:<Sobre /> },
    { path: '/contato', element:<Contato /> },
    { path: '/tarefas', element:<Tarefas /> },
  ])

export default router