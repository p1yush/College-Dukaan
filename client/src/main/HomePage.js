import AboutUs from "../components/AboutUs"
import { Footer } from "../components/Footer"
import HeroSection from "../components/HeroSection"
import { Navbar } from "../components/Navbar"

export const HomePage = () => {
    return (
        <>
        <Navbar />
        <HeroSection/>
        <AboutUs/>
        <Footer />
        </>
    )
}