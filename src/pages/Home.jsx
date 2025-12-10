import { ThemeToggle } from "@/Components/ThemeToggle"
import { BackgroundAnimations } from "@/Components/Background"
import { Navbar } from "../components/Navbar"
import { MainSection } from "../components/MainSection"
import { AboutSection } from "../components/About"
import { Skills } from "../components/Skills"
import { Project } from "../components/Project"
import { Contact } from "../components/Contact"
import { Footer } from "../components/footer"


export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-forground overflow-x-hidden">

            <ThemeToggle />

            <BackgroundAnimations />

            <Navbar />



            <main>
                <MainSection />
                <AboutSection />
                <Skills />
                <Project />
                <Contact />
            </main>
            <Footer/>
        </div>
    )
}
