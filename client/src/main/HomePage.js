import { Login } from "../account/Login"
import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"

export const HomePage = () => {
    return (
        <>
        <Navbar />
        <Login />
        <Footer />
        </>
    )
}