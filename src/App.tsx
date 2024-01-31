import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import ShoppingCartProvider from "./context/ShoppingCartContext";

function App() {
  return (
    <ShoppingCartProvider>
      <RouterProvider router={router} />
    </ShoppingCartProvider>
  );
}

export default App;
