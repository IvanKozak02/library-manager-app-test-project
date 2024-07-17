import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import RootPage from "./pages/root-page/root-page.jsx";
import BooksPage from "./pages/books-page/books-page.jsx";
import AuthorsPage from "./pages/authors-page/authors-page.jsx";
import BookDetailsPage from "./pages/book-details-page/book-details-page.jsx";

function App() {

  const router = createBrowserRouter([
    {
      element: <RootPage/>,
      children: [
        {
          index: true,
          element: <BooksPage/>
        },
        {
          path: '/authors',
          element: <AuthorsPage/>
        },
        {
          path: '/book/:bookId',
          element: <BookDetailsPage/>
        }
      ]
    },
    {
      path: '*',
      element: <Navigate to={'/'} replace={true}/>
    }
  ])

  return <RouterProvider router={router}/>;

}

export default App
