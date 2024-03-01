import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./CSS/bootstrap.min.css";
import "./CSS/style.css";
import ErrorPage from "./components/Pages/ErrorPage";
import HomePage from "./components/Pages/HomePage";
import NetworkPage from "./components/Pages/Networks/NetworkPage";
import NetworksPage from "./components/Pages/Networks/NetworksPage";
import RootLayout from "./components/Pages/RootLayout";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import LoadingSlice from "./components/Store/LoadingSlice";
import ErrorSlice from "./components/Store/ErrorSlice";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "networks", element: <NetworksPage /> },
      { path: "networks/:id", element: <NetworkPage /> },
    ],
  },
]);

const store = configureStore({
  reducer: {
    loading: LoadingSlice,
    error: ErrorSlice,
  },
});

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
