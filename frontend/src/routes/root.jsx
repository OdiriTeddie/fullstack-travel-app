import { Outlet } from "react-router-dom";
import { Footer } from "../component/footer";
import { Header } from "../component/header";


export default function Root() {
  return (
    <>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
    </>
  )
}
