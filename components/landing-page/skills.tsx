import React from 'react'
import SkillCard, { SkillCardType } from './cards/skill-card'

function SkillPage() {
  const skills = {
    frontend: [
      {
        name: "HTML", 
        imagePath: "/skills/html.png", 
        description: "Semantic markup & accessibility",
        proficiency: 95
      },
      {
        name: "CSS", 
        imagePath: "/skills/css.png", 
        description: "Modern layouts & animations",
        proficiency: 90
      },
      {
        name: "JavaScript", 
        imagePath: "/skills/js.png",
        description: "ES6+ & modern frameworks",
        proficiency: 88
      },
      {
        name: "Next.js", 
        imagePath: "/skills/nextjs.png",
        description: "Full-stack React framework",
        proficiency: 90
      },
    
    ],
    backend: [
      {
        name: "Express", 
        imagePath: "/skills/express-js.png",
        description: "Node.js web framework",
        proficiency: 85
      },
      {
        name: "Golang", 
        imagePath: "/skills/golang.webp",
        description: "Concurrent & efficient & lightweight",
        proficiency: 75
      },
    
    ],
    database: [
      {
        name: "MongoDB", 
        imagePath: "/skills/mongodb.png",
        description: "NoSQL database",
        proficiency: 82
      },
      {
        name: "PostgreSQL", 
        imagePath: "/skills/postgress-db.webp",
        description: "Relational database",
        proficiency: 50
      },
      
    ],
    tools: [
      {
        name: "Git", 
        imagePath: "/skills/github.webp",
        description: "Version control",
        proficiency: 75
      },
      {
        name: "Docker", 
        imagePath: "/skills/docker.webp",
        description: "Containerization",
        proficiency: 25
      },
      
    ]
  }
  
  return (
    <section
      id="skills"
      className="w-full min-h-screen px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-sidebarbg"
    >
      <div className="w-full max-w-7xl mx-auto ">
        <div className=" mb-16 px-6 ">
          <h2 className="text-4xl md:text-5xl font-bold  mb-4 lg:pl-10 text-white">
            My <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
            <div className="flex items-center justify-start gap-2 mt-4 ">
            <div className="h-px w-20 bg-linear-to-r from-transparent to-blue-600" />
            <div className="h-1.5 w-1.5 rounded-full bg-blue-600" />
            <div className="h-px w-20 bg-linear-to-l from-transparent to-blue-600" />
            </div>
          </h2>
         
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-4 lg:px-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                Frontend Development
              </h3>
            </div>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              {skills.frontend.map((skill) => (
                <SkillCard key={skill.name} data={skill} />
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-green-900/30 flex items-center justify-center">
                <span className="text-2xl">⚙️</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                Backend Development
              </h3>
            </div>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              {skills.backend.map((skill) => (
                <SkillCard key={skill.name} data={skill} />
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-purple-900/30 flex items-center justify-center">
                <span className="text-2xl">🗄️</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                Database & Storage
              </h3>
            </div>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              {skills.database.map((skill) => (
                <SkillCard key={skill.name} data={skill} />
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                <span className="text-2xl">🛠️</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                Tools & DevOps
              </h3>
            </div>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              {skills.tools.map((skill) => (
                <SkillCard key={skill.name} data={skill} />
              ))}
            </div>
          </div>
        </div>

       
      </div>
    </section>
  )
}

export default SkillPage