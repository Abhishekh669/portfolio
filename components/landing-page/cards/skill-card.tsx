import Image from 'next/image'
import React from 'react'

export interface SkillCardType {
  imagePath: string
  name: string
  description?: string
  proficiency?: number
}

function SkillCard({ data }: { data: SkillCardType }) {
  return (
    <div className="group relative w-36 h-36 sm:w-40 sm:h-42 md:w-45 md:h-48 lg:w-50 lg:h-50 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/5 backdrop-blur flex flex-col items-center justify-center gap-2 p-3 transition-all duration-300 hover:-translate-y-2 hover:border-blue-400/60 hover:shadow-[0_10px_40px_-10px_rgba(59,130,246,0.4)] dark:bg-gray-800">
      <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-blue-400/10 to-purple-500/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
      
      <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16">
        <Image
          src={data.imagePath}
          alt={data.name}
          fill
          className="object-contain transition-transform duration-300 group-hover:scale-110"
          sizes="(max-width: 640px) 48px, (max-width: 768px) 56px, 64px"
        />
      </div>

      <div className="relative text-center space-y-1">
        <h3 className="text-sm sm:text-base font-semibold text-gray-400 dark:text-white">
          {data.name}
        </h3>

        {data.description && (
          <p className="text-xs text-gray-400 dark:text-gray-400 line-clamp-2">
            {data.description}
          </p>
        )}
      </div>

      {data.proficiency && (
        <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
            <span>Proficiency</span>
            <span className="font-medium text-blue-600 dark:text-blue-400">{data.proficiency}%</span>
          </div>
          <div className="h-1.5 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-linear-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-700"
              style={{ width: `${data.proficiency}%` }}
            />
          </div>
        </div>
      )}

      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-400/40 transition-colors duration-300 pointer-events-none" />
    </div>
  )
}

export default SkillCard