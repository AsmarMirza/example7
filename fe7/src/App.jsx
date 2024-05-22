import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Basket from "./pages/Basket";
import Admin from "./pages/Admin";
import Add from "./pages/Add";
import Wishlist from "./pages/Wishlist";
import BasketProvider from "./context/BasketProvider";
import Detail from "./pages/Detail";
import WishlistProvider from "./context/WishlistProvider";
function App() {
  return (
    <>
      <BasketProvider>
        <WishlistProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="/basket" element={<Basket />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/add" element={<Add />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/detail/:id" element={<Detail />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </WishlistProvider>
      </BasketProvider>
    </>
  );
}

export default App;
