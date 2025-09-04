import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ExternalLink, Github, Star, Eye } from 'lucide-react'
import { projects } from '../assets/data'
import { ProjectContext } from '../context/ProjectProvider'

const Projects = () => {

  const {projects} = useContext(ProjectContext)
  const navigate = useNavigate()

  const handleViewDetails = (projectId) => {
    navigate(`/project/${projectId}`)
  }

  return (
    <div>
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Some of my most recent work that I'm proud of
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project._id}
                className={`relative overflow-hidden rounded-3xl shadow-xl ${
                  project.featured ? 'md:col-span-2' : ''
                }`}
              >
                <img
                  src={project.imagelink1}
                  alt={project.title}
                  className="w-full h-80 object-cover"
                />

                <div className="absolute inset-0 bg-black/20 p-8 flex flex-col justify-end rounded-3xl">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      {project.featured && <Star className="text-yellow-300" size={20} />}
                      <span className="text-white/80 text-sm font-medium">
                        {project.featured ? 'Featured Project' : 'Project'}
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-3 ">{project.title}</h3>
                    <p className="hidden md:block text-white/90 text-lg mb-6">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0,5).map((tech, i) => (
                        <span key={i} className="bg-white/20 text-white text-sm px-3 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <button
                        onClick={() => handleViewDetails(project._id)}
                        className="cursor-pointer bg-white/20 text-white px-4 py-2 rounded-full flex items-center gap-2 backdrop-blur-sm"
                      >
                        <Eye size={18} /> View Details
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects
