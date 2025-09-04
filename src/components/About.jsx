import React from 'react'
import { personalInfo } from '../assets/data'
import { Code, Heart, Mail, MapPin, Phone, Zap } from 'lucide-react'
import useScrollAnimation from '../hooks/useScrollAnimation';

const About = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div>
        <section id="about" ref={ref} className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 "></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${isVisible ? "animate-up" : "opacity-0"}`}>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate about building real-world web solutions with clean code.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`space-y-8 ${isVisible ? "animate-left" : "opacity-0"}`}>
              <p className="text-lg text-gray-700 leading-relaxed">
                {personalInfo.about}
              </p>
              
              <div className="grid grid-cols-2  place-items-center">
                <div className=" p-6 rounded-2xl">
                  <div className="flex flex-col md:flex-row items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <Code className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Clean Code</h3>
                      <p className="text-sm text-gray-600">Quality First</p>
                    </div>
                  </div>
                </div>
                
                <div className=" p-6 rounded-2xl">
                  <div className="flex flex-col md:flex-row items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                      <Zap className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Fast Learning</h3>
                      <p className="text-sm text-gray-600">Always Growing</p>
                    </div>
                  </div>
                </div>
              </div>
              

            </div>
            
            <div className={`p-2 ${isVisible ? "animate-right" : "opacity-0"} `}>
              {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl transform rotate-3"></div> */}
              <div>
                <img
                  src={personalInfo.image}
                  alt={personalInfo.name}
                  className="w-full md:w-[60%] h-96 mx-auto rounded-2xl object-cover"
                />

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About