"use client"
import { link } from "fs"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react"

function ContactPage() {
  return (
    <section
      id="contact"
      className="w-full bg-sidebagbg px-4 py-16 sm:py-20"
    >
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-12 px-2 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Contact{" "}
          <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Me
          </span>
        </h2>

        <div className="flex items-center gap-2 mt-4">
          <div className="h-px w-16 bg-linear-to-r from-transparent to-blue-600" />
          <div className="h-1.5 w-1.5 rounded-full bg-blue-600" />
          <div className="h-px w-16 bg-linear-to-l from-transparent to-blue-600" />
        </div>

        <p className="text-gray-400 text-sm mt-3">
          I&apos;d love to hear from you. Send me a message!
        </p>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 px-2 sm:px-6">
        {/* Form */}
        <div className="bg-slate-900/40 p-6 sm:p-8 rounded-2xl border border-slate-700">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/40 transition"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/40 transition"
            />

            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/40 transition resize-none"
            />

            <button
              type="submit"
              className="w-full py-3 rounded-lg font-semibold text-white bg-linear-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-8">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
              Get in Touch
            </h3>

            <div className="space-y-4">
              <a
                href="mailto:nepaliabhishekh3@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 border border-cyan-500/20 hover:border-cyan-400 transition group"
              >
                <Mail className="text-cyan-400 group-hover:text-cyan-300" />
                <div>
                  <p className="text-xs text-gray-400">Email</p>
                  <p className="text-white font-medium">
                    nepaliabhishekh3@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 border border-cyan-500/20">
                <Phone className="text-cyan-400" />
                <div>
                  <p className="text-xs text-gray-400">Phone</p>
                  <p className="text-white font-medium">+977-98XXXXXXXX</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 border border-cyan-500/20">
                <MapPin className="text-cyan-400" />
                <div>
                  <p className="text-xs text-gray-400">Location</p>
                  <p className="text-white font-medium">Kathmandu, Nepal</p>
                </div>
              </div>
            </div>
          </div>

          {/* Socials */}
          <div className="mb-12 md:mb-0">
            <h3 className="text-lg font-bold text-white mb-4">Follow Me</h3>
            <div className="flex gap-4">
              {[
                { name: "GitHub", icon: <Github size={22} /> , link : "https://github.com/Abhishekh669"},
                { name: "LinkedIn", icon: <Linkedin size={22} /> , link : "https://www.linkedin.com/in/abhishekh669"},
                { name: "Twitter", icon: <Twitter size={22} /> , link : "#"},
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  className="w-11 h-11 rounded-full bg-slate-800 border border-cyan-500/30 hover:border-cyan-400 flex items-center justify-center text-cyan-400 hover:text-cyan-300 transition"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactPage
