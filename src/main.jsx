import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createRoutesFromElements, createBrowserRouter, RouterProvider, Route } from 'react-router'
import Home from './pages/Home.jsx'
import ProductSearch from './pages/ProductSearch.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import Cart from './pages/Cart.jsx'
import { GlobalProvider } from "./context/GlobalContext";

// Create router with routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/search" element={<ProductSearch />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path='/cart' element={<Cart />} />
      <Route path="*" element={<Home />} />
    </Route>
  ),
  { basename: "/ecommerce-fontend-design" }
)

// Render the application
createRoot(document.getElementById('root')).render(
  <GlobalProvider>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </GlobalProvider>
)
