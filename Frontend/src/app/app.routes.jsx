import { createBrowserRouter } from "react-router";
import Layout from "../components/Layout";
import HomePage from "../pages/HomePage";
import FleetPage from "../pages/FleetPage";
import ServicesPage from "../pages/ServicesPage";
import StatsPage from "../pages/StatsPage";
import TestimonialsPage from "../pages/TestimonialsPage";
import WhyChooseUsPage from "../pages/WhyChooseUsPage";
import ContactPage from "../pages/ContactPage";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "fleet",
                element: <FleetPage />
            },
            {
                path: "services",
                element: <ServicesPage />
            },
            {
                path: "stats",
                element: <StatsPage />
            },
            {
                path: "testimonials",
                element: <TestimonialsPage />
            },
            {
                path: "whyChooseUs",
                element: <WhyChooseUsPage />
            },
            {
                path: "contact",
                element: <ContactPage />
            }
        ]
    }
])