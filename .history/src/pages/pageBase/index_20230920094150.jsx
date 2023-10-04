import { Banner } from '../../components/Banner';
import Footer from '../../components/Footer';
import Header from '../../components/Header'
import { Outlet } from "react-router-dom";


export default function PageBase() {
  return (
    <main>
      <Header buttonProps={buttonProps} />
      <Banner />
      <Outlet />
      <Footer />
    </main>
  )
}