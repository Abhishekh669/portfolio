"use client"

import { useEffect, useState } from "react"
import { ChevronUp } from "lucide-react"

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed   right-8 bottom-30 z-40 group p-3 rounded-full bg-linear-to-br from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white shadow-lg hover:shadow-[0_20px_50px_-10px_rgba(34,211,238,0.4)] transition-all duration-300 transform hover:scale-110 animate-fade-in-up border border-cyan-400/30 hover:border-cyan-300"
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} className="transition-transform duration-300 group-hover:-translate-y-1" />
        </button>
      )}
    </>
  )
}
