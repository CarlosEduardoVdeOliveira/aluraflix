import HeaderComponent from "components/Header";
import { Outlet } from "react-router-dom";


export default function index() {
  return (
    <main>
      <HeaderComponent />
      <Outlet />

    </main>
  )
}