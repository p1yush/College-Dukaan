import AboutUs from "../components/AboutUs"
import { Login } from "../account/Login"
import { Footer } from "../components/Footer"
import HeroSection from "../components/HeroSection"
import { Navbar } from "../components/Navbar"

export const HomePage = () => {
    return (
        <>
        <Navbar />
        <HeroSection/>
        <AboutUs/>
        <Login />
        <Footer />
        </>
    )
}