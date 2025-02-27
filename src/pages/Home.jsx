import ContactUs from "../components/ContactUs"
import Gallery from "../components/Gallery"
import Hero from "../components/Hero"
import Menu from "../components/Menu"
import Testimonials from "../components/Testimonials"

const Home = () => {
  return (
    <div>
      <Hero />
      <Menu />
      <Gallery />
      <Testimonials />
      <ContactUs />
    </div>
  )
}

export default Home