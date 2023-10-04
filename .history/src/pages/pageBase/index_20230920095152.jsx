import { Banner } from '../../components/Banner';
import Footer from '../../components/Footer';
import Header from '../../components/Header'
import { Outlet } from "react-router-dom";
import { useLocation } from 'react-router-dom';


export default function PageBase() {
  const location = useLocation()
  return (
    <main>
      <Header />
      <Banner />
      <Outlet />
      <Footer />
    </main>
  )
}