"use client";

import config from "@/data/config.json";
import { Github, Heart, Linkedin, Twitter } from "lucide-react";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black dark:bg-gray-950 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="relative w-32 h-10 mb-4">
              <Image
                src="/Ark8 Logo-White.svg"
                alt={config.siteName}
                fill
                className="object-contain"
              />
            </div>
            <p className="text-gray-400 mb-4">{config.description}</p>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-bold mb-4 uppercase tracking-wider">Company</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Career
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4 uppercase tracking-wider">Services</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  UX/UI Design
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Branding
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Digital Strategy
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-bold mb-4 uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Resources
                </a>
              </li>
              <li>
                <a
                  href="#newsletter"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Newsletter
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* WHO & MAIL Section */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h4 className="text-lg font-bold mb-2 uppercase tracking-wider">WHO & MAIL</h4>
              <p className="text-gray-400">Stay updated with our latest news</p>
            </div>
            <div className="flex space-x-4">
              <a
                href={config.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-900 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={config.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-900 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={config.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-900 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center space-x-1">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>by {config.siteName}</span>
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
