import AboutPage from '@/components/landing-page/about'
import ContactPage from '@/components/landing-page/contact'
import HeroSection from '@/components/landing-page/hero-section'
import ProjectPage from '@/components/landing-page/project'
import SkillPage from '@/components/landing-page/skills'

function page() {
  return (
    <div className=''>
      <HeroSection />
      <AboutPage />
      <SkillPage />
      <ProjectPage />
      <ContactPage />
    </div>
  )
}

export default page
