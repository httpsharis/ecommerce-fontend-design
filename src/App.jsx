import Footer from "./components/Home/Footer"
import Header from "./components/Home/Header"
import { Outlet } from "react-router"

function App() {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
