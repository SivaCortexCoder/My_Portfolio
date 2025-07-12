import React from 'react';
import { GithubIcon, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { personalInfo } from '../assets/data';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col gap-6 sm:flex-row sm:justify-between sm:items-start text-gray-600 text-sm">
        {/* Left - Copyright */}
        <div className="text-center sm:text-left">
          <div>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</div>
        </div>

        {/* Center - Contact Info */}
        <div className="text-center sm:text-left space-y-2">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <Mail size={16} />
            <a href={`mailto:${personalInfo.email}`} className="hover:text-blue-600 transition">
              {personalInfo.email}
            </a>
          </div>
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <Phone size={16} />
            <a href={`tel:${personalInfo.phone}`} className="hover:text-blue-600 transition">
              {personalInfo.phone}
            </a>
          </div>
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <MapPin size={16} />
            <span>{personalInfo.location}</span>
          </div>
        </div>

        {/* Right - Social Links */}
        <div className="flex justify-center sm:justify-end gap-4">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
            <GithubIcon size={18} />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
