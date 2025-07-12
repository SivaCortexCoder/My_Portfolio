import React from 'react'
import { experience } from '../assets/data'

const Experience = () => {
  return (
    <div>
              <section id="experience" className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                  <h2 className="text-5xl font-bold text-center text-gray-900 mb-16">Experience</h2>
                  <div className="space-y-8">
                    {experience.map((exp, idx) => (
                      <div key={idx} className="p-6 bg-gray-50 rounded-2xl shadow-md">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="text-xl font-bold text-gray-800">{exp.role} @ {exp.company}</h3>
                          <span className="text-sm text-gray-500">{exp.duration}</span>
                        </div>
                        <p className="text-gray-700 mb-4">{exp.description}</p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                          {exp.responsibilities.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
    </div>
  )
}

export default Experience