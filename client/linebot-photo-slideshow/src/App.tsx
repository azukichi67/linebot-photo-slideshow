import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home } from './components/pages/Home';
import ErrorPage from './components/pages/ErrorPage';
import { SlideShow } from './components/pages/SlideShow';

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
])

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
