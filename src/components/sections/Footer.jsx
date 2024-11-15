import Section from "../Section";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <Section has="footer" color="bg-gray-900">
      <footer className="py-10  text-gray-400">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/home" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="/features" className="hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-6">
              <a
                href="https://www.facebook.com/profile.php?id=100069485470306"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <FaFacebook size="2em" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <FaTwitter size="2em" />
              </a>
              <a
                href="https://www.linkedin.com/in/farhad-zafari-285551279/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <FaLinkedin size="2em" />
              </a>
              <a
                href="https://github.com/Farhadzafar"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <FaGithub size="2em" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Contact Us
            </h3>
            <p className="hover:text-white transition duration-300 ease-in-out">
              Email: farhadzafari10@gmail.com
            </p>
            <p className="hover:text-white transition duration-300 ease-in-out">
              Phone: +0093728008834
            </p>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Farhad Ahmad Zafari. All rights
          reserved.
        </div>
      </footer>
    </Section>
  );
}
