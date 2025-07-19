import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Menu from "./Components/Menu/Menu";
import Wishlist from "./Components/Wishlist/Wishlist";
import Checkout from "./Components/Checkout/Checkout";
import CartSideBar from "./Components/CartSideBar/CartSideBar";
import Cart from "./Components/Cart/Cart";
import { ShopProvider } from "./Context/ShopContext";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";

import Layout from "./Components/Layout/Layout";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import ProtectedAuth from "./Components/ProtectedAuth/ProtectedAuth";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import NotFound from "./Components/NotFound/NotFound";





function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <ProtectedRoute> <Home /> </ProtectedRoute> },
        { path: "Menu", element: <ProtectedRoute><Menu /></ProtectedRoute> },
        { path: "CartSideBar", element: <ProtectedRoute><CartSideBar /></ProtectedRoute> },
        { path: "Cart", element: <ProtectedRoute><Cart /></ProtectedRoute> },
        { path: "Wishlist", element: <ProtectedRoute><Wishlist /></ProtectedRoute> },
        { path: "Checkout", element: <ProtectedRoute><Checkout /></ProtectedRoute> },
        { path: "productDetails/:pId/:cId", element: <ProtectedRoute><ProductDetails /></ProtectedRoute> },
        { path: "*", element: <NotFound /> },
        { path: "register", element: <ProtectedAuth><Register /></ProtectedAuth> },
        { path: "login", element: <ProtectedAuth><Login /> </ProtectedAuth> },
      ]
    }
  ]);

  return (
    <ShopProvider>
      <RouterProvider router={router} />
    </ShopProvider>
  );
}

export default App;
