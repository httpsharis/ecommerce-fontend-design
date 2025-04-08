import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createRoutesFromElements, createBrowserRouter, RouterProvider, Route } from 'react-router'
import Home from './pages/Home.jsx'
import ProductSearch from './pages/ProductSearch.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import Cart from './pages/Cart.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path="/products" element={<ProductSearch />} />
      <Route path='/products/:id' element={<ProductDetails />} />
      <Route path='/cart' element={<Cart />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
