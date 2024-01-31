import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "../pages/RootLayout";
import Store from "../pages/store";
import About from "../pages/about";

// You can do this:
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Store />} />
      <Route path="about" element={<About />} />
    </Route>
  )
);
