import React from 'react'
import { certifications } from '../assets/data'

const Certification = () => {
  return (
    <div>
        <section id="certifications" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-center text-gray-900 mb-16">Certifications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{cert.icon}</span>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">{cert.title}</h4>
                      <p className="text-gray-500 text-sm">{cert.issuer}</p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">{cert.year}</span>
                </div>
                <a
                  href={cert.credential}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm"
                >
                  View Credential
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Certification