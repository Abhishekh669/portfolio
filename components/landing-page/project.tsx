import React from 'react'
import ProjectCard from './cards/project-card';

export interface ProjectListType{
  name : string;
  tech : string;
  description : string,
  link : string;
  githubLink : string;
  imageLink : string;
}

function ProjectPage() {
  const projectList = [
    {
      name: "Public Chat System",
      tech: "Next.js, Gin(Golang), MongoDB, WebSocket",
      description: "A real-time chat application that allows users to join public rooms and communicate instantly with others.",
      link: "https://fun-is-need-frontend.vercel.app",
      githubLink: "https://github.com/yourusername/chat-system",
      imageLink: "/projects/chat-app.png",
    },
    {
      name: "Room Management System",
      tech: "Next.js, MongoDB, Prisma, NextAuth",
      description: "A comprehensive platform for managing rental properties with advanced search and booking capabilities.",
      link: "https://room-etaaa.vercel.app",
      githubLink: "https://github.com/yourusername/room-management",
      imageLink: "/projects/room-etaaa.png",
    },
    {
      name: "Quiz Library",
      tech: "Next.js, Gin(Golang), MongoDB, Redis",
      description: "A feature-rich quiz platform with both practice modes and scheduled real-time competitive quizzes.",
      link: "https://quiz-library.vercel.app",
      githubLink: "https://github.com/yourusername/quiz-library",
      imageLink: "/projects/quiz.png",
    },
    {
      name: "File Server",
      tech: "Next.js, Fiber(Golang), MongoDB",
      description: "A scalable file storage solution with image optimization, similar to Uploadthing for developer integration.",
      link: "#",
      githubLink: "https://github.com/yourusername/file-server",
      imageLink: "/projects/file-server.png",
    }
  ]

  return (
    <section id="projects" className=" w-full min-h-screen bg-sidebarbg px-6 sm:px-8 lg:px-10 py-20 md:py-28 ">
      
      <div className="relative w-full max-w-7xl mx-auto md:py-10 md:px-4">
        <div className=" mb-16">
          <h2 className="text-4xl  font-bold text-white mb-6">
            My <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
            <div className="flex items-center justify-start gap-2 mt-4 ">
            <div className="h-px w-20 bg-linear-to-r from-transparent to-blue-600" />
            <div className="h-1.5 w-1.5 rounded-full bg-blue-600" />
            <div className="h-px w-20 bg-linear-to-l from-transparent to-blue-600" />
          </div>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl  leading-relaxed">
            Explore my latest full-stack development projects showcasing modern web technologies and innovative solutions
          </p>
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projectList.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectPage