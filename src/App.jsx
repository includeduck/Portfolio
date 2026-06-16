import './App.css'
import AchievementsSection from './components/AchievementsSection'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import InterestsSection from './components/InterestsSection'
import ProjectsSection from './components/ProjectsSection'
import SkillsSection from './components/SkillsSection'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProjectsSection />
        <SkillsSection />
        <AchievementsSection />
        <InterestsSection />
      </main>
      <Footer />
    </>
  )
}

export default App
