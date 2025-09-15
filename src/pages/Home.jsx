import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { BgSandbox } from "../components/BgSandbox";
import { Footer } from "../components/Footer";

// npm run dev (to run it)

export const Home = () => {

    return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

        {/* Theme Toggle */}
            <ThemeToggle />

        {/* Background Effects */}
            <BgSandbox/>
            <StarBackground />

        {/* Navbar */}
            <Navbar />
            

        {/* Main Content */}
            <main>
                <HeroSection />
                <AboutSection />
                <ProjectsSection />
                <SkillsSection />
                <ContactSection />
                
            </main>

        {/* Footer */}
        <Footer/>

    </div>
    );
    // Do the forget the () after return
}