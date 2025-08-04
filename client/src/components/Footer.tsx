import { Github, Linkedin, Palette, Twitter } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Logo & Description */}
          <div className="md:col-span-1 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                <Palette className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-extrabold tracking-tight">DrawFlow</span>
            </div>
            <p className="text-gray-200 mb-6 text-sm">
              The ultimate digital whiteboard for creative minds and collaborative teams.
            </p>
            <div className="flex gap-3 mt-auto">
              <a href="#" aria-label="Twitter" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-blue-500 transition-all duration-200 shadow-md">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Github" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-gray-800 transition-all duration-200 shadow-md">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Linkedin" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-blue-700 transition-all duration-200 shadow-md">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Links</h3>
            <ul className="space-y-2 text-gray-200">
              <li>
                <a href="#" className="hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Contact</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">API Docs</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          {/* Removed Resource and Company sections as requested */}
        </div>

        <div className="mt-12 border-t border-white/20 pt-6 text-center text-sm text-gray-300">
          &copy; {new Date().getFullYear()} DrawFlow. All rights reserved.
          <br />
          Built with <span className="text-red-400">♥</span> by Prem Patel.
        </div>
      </div>
    </footer>
  )
}

export default Footer
