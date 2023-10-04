import { Banner } from '../../components/Banner';
import Footer from '../../components/Footer';
import { Outlet } from "react-router-dom";


export default function PageBase() {
  return (
    <main>
      <Banner />
      <Outlet />
      <Footer />
    </main>
  )
}