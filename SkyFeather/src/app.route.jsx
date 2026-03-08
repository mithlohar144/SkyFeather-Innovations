import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Mapping from "./pages/Mapping";
import Spraying from "./pages/Spraying";
import Spreading from "./pages/Spreading";
import Contact from "./pages/Contact";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/services",
        element: <Services />
    },
    {
        path: "/services/multispectral-mapping",
        element: <Mapping />
    },
    {
        path: "/services/drone-spraying",
        element: <Spraying />
    },
    {
        path: "/services/drone-spreading",
        element: <Spreading />
    },
    {
        path: "/contact",
        element: <Contact />
    }
])