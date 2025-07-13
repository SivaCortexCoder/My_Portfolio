import React from 'react'
import { ArrowRight, Eye, Mail, Play } from 'lucide-react'
import { personalInfo} from '../assets/data'

const HeroSection = ({ scrollToSection}) => {
  return (
    <div>
            <section id="home" className="pt-20 min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>
        
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <div className="mb-8">
              <div className="relative inline-block ">
                <img
                  src={personalInfo.image}
                  alt={personalInfo.name}
                  className='w-96 mx-auto'
                />

              </div>
              <div>
                
              </div>
              
              <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-4 leading-tight">
                {personalInfo.name}
              </h1>
              <h2 className="text-3xl md:text-4xl font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                {personalInfo.role}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {personalInfo.tagline}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <button
                onClick={() => scrollToSection('contact')}
                className="cursor-pointer group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-3"
              >
                <Mail size={20} />
                Let's Connect
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="group border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-medium hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-3"
              >
                <Eye size={20} />
                View My Work
                <Play size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default HeroSection