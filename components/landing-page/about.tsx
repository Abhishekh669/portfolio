
import { Code, Map, Zap, } from "lucide-react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="  w-full min-h-screen bg-sidebarbg  px-10 py-10 space-y-10 flex justify-center items-center"
    >
      <div className=" bg-sidebarbg ">
        <h2 className="text-4xl font-bold my-8 text-white  ">
          About <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
           <div className="flex items-center justify-start gap-2 mt-4 ">
            <div className="h-px w-20 bg-linear-to-r from-transparent to-blue-600" />
            <div className="h-1.5 w-1.5 rounded-full bg-blue-600" />
            <div className="h-px w-20 bg-linear-to-l from-transparent to-blue-600" />
            </div>
        </h2>
      <div className="max-w-6xl my-20 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:justify-center">
        <div className="relative flex justify-center md:justify-start">
            <div className="absolute -inset-6 rounded-2xl bg-linear-to-br from-cyan-500/20 to-blue-500/20 blur-3xl"></div>
            <div className="relative w-64 h-80 rounded-3xl overflow-hidden border-2 border-cyan-500/30 bg-linear-to-br from-cyan-400/10 to-blue-500/10">
              <Image src="/my_image.png" alt="Profile" fill className="object-cover" />
            </div>
          </div>

       <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-2xl font-bold  mb-2 flex items-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                <Code className="text-cyan-400" size={24} />
                Full Stack Developer
              </h3>
              <p className="text-gray-300 leading-relaxed">
                I&apos;m a passionate Full Stack Developer currently pursuing BSc.CSIT. I enjoy building modern,
                scalable, and user-friendly web applications using cutting-edge technologies.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Zap className="text-cyan-400" size={20} />
                Key Info
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-cyan-400 font-bold">📚</span>
                  <div>
                    <p className="text-sm text-gray-400">Education</p>
                    <p className="text-white font-medium">BSc. CSIT, PNC</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <span className="text-cyan-400 font-bold">📍</span>
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="text-white font-medium">Bagar, Nepal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

      </div>

      </div>
    </section>
  );
}
