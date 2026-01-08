import React from "react";
import { ExternalLink, Github, ImageIcon } from "lucide-react";

export interface ProjectListType {
  name: string;
  tech: string;
  description: string;
  link: string;
  githubLink: string;
  imageLink: string;
}

function ProjectCard({ project }: { project: ProjectListType }) {
  const hasLive = project.link && project.link !== "#";
  const hasGithub = project.githubLink && project.githubLink !== "#";

  return (
    <div className="group relative rounded-xl border border-gray-200/20 dark:border-gray-700 bg-white/5 dark:bg-gray-800/50 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(59,130,246,0.4)]">

      {/* glow overlay */}
      <div className="absolute inset-0 rounded-xl bg-linear-to-r from-blue-400/10 to-purple-500/10 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />

      {/* IMAGE */}
      <div className="relative px-4 pt-4">
        <div className="relative h-36 w-full overflow-hidden rounded-lg bg-white/5 dark:bg-gray-700/40">
          {project.imageLink ? (
            <img
              src={project.imageLink}
              alt={project.name}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-blue-500">
              <ImageIcon size={18} />
            </div>
          )}
        </div>
      </div>

      {/* CONTENT */}
      <div className="relative p-5 pt-4 flex flex-col">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-500 transition">
          {project.name}
        </h3>

        <div className="mt-2 flex flex-wrap gap-2">
          {project.tech.split(",").map((tech, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20"
            >
              {tech.trim()}
            </span>
          ))}
        </div>

        <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* ACTIONS */}
        <div className="mt-4 flex gap-3">
          <a
            href={hasLive ? project.link : undefined}
            target={hasLive ? "_blank" : undefined}
            rel={hasLive ? "noopener noreferrer" : undefined}
            className={`flex-1 inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition
              ${
                hasLive
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-blue-600/30 text-blue-200 cursor-not-allowed"
              }
            `}
          >
            <ExternalLink size={16} />
            Live
          </a>

          <a
            href={hasGithub ? project.githubLink : undefined}
            target={hasGithub ? "_blank" : undefined}
            rel={hasGithub ? "noopener noreferrer" : undefined}
            className={`flex-1 inline-flex items-center justify-center gap-2 rounded-md border px-4 py-2 text-sm font-medium transition
              ${
                hasGithub
                  ? "border-gray-300/30 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-gray-400/60"
                  : "border-gray-300/20 dark:border-gray-600/40 text-gray-400 cursor-not-allowed"
              }
            `}
          >
            <Github size={16} />
            Code
          </a>
        </div>
      </div>

      {/* hover border */}
      <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-400/40 transition-colors duration-300 pointer-events-none" />
    </div>
  );
}

export default ProjectCard;
