import { Outlet } from "react-router-dom"
import AppNavbar from "../../Layout/AppNavbar"
import FooterSection from "../../Components/FooterSection/FooterSection"

const Root = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
    <AppNavbar/>
        <Outlet/>
    <FooterSection/>
    </div>
  )
}

export default Root