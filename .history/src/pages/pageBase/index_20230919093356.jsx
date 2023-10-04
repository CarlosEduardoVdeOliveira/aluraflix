import HeaderComponent from "components/Header";


export default function index() {
  return (
    <main>
      <HeaderComponent />
      <Outlet />

    </main>
  )
}