import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { SlideShow } from "./components/pages/SlideShow";
import { ChakraProvider } from "@chakra-ui/react";
import ErrorPage from "./components/pages/ErrorPage";
import theme from "./theme/theme";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/slideshow",
        element: <SlideShow />,
        errorElement: <ErrorPage />,
    },
]);

function App() {
    return (
        <ChakraProvider theme={theme}>
            <RouterProvider router={router} />
        </ChakraProvider>
    );
}

export default App;
