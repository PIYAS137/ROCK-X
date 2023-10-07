import BannerSection from "../../Components/BannerSection/BannerSection"
import ClientSection from "../../Components/ClientSection/ClientSection"
import ServicesSection from "../../Components/ServicesSection/ServicesSection"
import SponserSection from "../../Components/SponserSection/SponserSection"

const Home = () => {
  return (
    <div>
        <BannerSection/>
        <ServicesSection/>
        <ClientSection/>
        <SponserSection/>
    </div>
  )
}

export default Home