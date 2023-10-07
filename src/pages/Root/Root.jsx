import { Outlet } from "react-router-dom"
import AppNavbar from "../../Layout/AppNavbar"
import FooterSection from "../../Components/FooterSection/FooterSection"

const Root = () => {
  return (
    <>
    <AppNavbar/>
        <Outlet/>
    <FooterSection/>
    </>
  )
}

export default Root