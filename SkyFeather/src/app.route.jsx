import { lazy, Suspense, useEffect } from "react";
import { createBrowserRouter, useLocation, Outlet } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Mapping = lazy(() => import("./pages/Mapping"));
const Spraying = lazy(() => import("./pages/Spraying"));
const Spreading = lazy(() => import("./pages/Spreading"));
const Contact = lazy(() => import("./pages/Contact"));

const Lazy = ({ children }) => (
    <Suspense fallback={<div className="min-h-screen" />}>{children}</Suspense>
);

const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return <Outlet />;
};

export const router = createBrowserRouter([
    {
        element: <ScrollToTop />,
        children: [
            {
                path: "/",
                element: <Lazy><Home /></Lazy>
            },
            {
                path: "/about",
                element: <Lazy><About /></Lazy>
            },
            {
                path: "/services",
                element: <Lazy><Services /></Lazy>
            },
            {
                path: "/services/multispectral-mapping",
                element: <Lazy><Mapping /></Lazy>
            },
            {
                path: "/services/drone-spraying",
                element: <Lazy><Spraying /></Lazy>
            },
            {
                path: "/services/drone-spreading",
                element: <Lazy><Spreading /></Lazy>
            },
            {
                path: "/contact",
                element: <Lazy><Contact /></Lazy>
            }
        ]
    }
])