import { useContext } from "react"
import BannerSection from "../../Components/BannerSection/BannerSection"
import ClientSection from "../../Components/ClientSection/ClientSection"
import GallerySection from "../../Components/GallerySection/GallerySection"
import ServicesSection from "../../Components/ServicesSection/ServicesSection"
import SponserSection from "../../Components/SponserSection/SponserSection"
import { AuthContext } from "../../Context/Context"

const Home = () => {
  
  const {logRegSucc,notiSts}=useContext(AuthContext)

  return (
    <div>
      {notiSts && 
      <div className="max-w-xl z-50 top-20 text-white font-bold text-xl absolute bg-green-600 w-full p-5 rounded-xl">
        <p>{logRegSucc}</p>
      </div>}
      
        <BannerSection/>
        <ServicesSection/>
        <ClientSection/>
        <GallerySection/>
        <SponserSection/>
    </div>
  )
}

export default Home