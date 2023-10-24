import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { store } from "./store/store";
import { Provider } from "react-redux";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/main",
      element: <MainPage />,
    },
  ]);

  return (
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  )
}

export default App;
