import BannerSection from "../../Components/BannerSection/BannerSection"
import ClientSection from "../../Components/ClientSection/ClientSection"
import GallerySection from "../../Components/GallerySection/GallerySection"
import ServicesSection from "../../Components/ServicesSection/ServicesSection"
import SponserSection from "../../Components/SponserSection/SponserSection"

const Home = () => {
  return (
    <div>
        <BannerSection/>
        <ServicesSection/>
        <ClientSection/>
        <GallerySection/>
        <SponserSection/>
    </div>
  )
}

export default Home