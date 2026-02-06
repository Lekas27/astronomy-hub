import { Link } from "@tanstack/react-router";
import {
  Menu,
  X,
  Telescope,
  Sparkles,
  Rocket,
  MessagesSquare,
  Newspaper,
} from "lucide-react";
import { useState, type FC, type ReactNode } from "react";

import { MobileNavLink } from "./components/mobile-nav-link";
import { NavLink } from "./components/nav-link";

type Props = {
  element: ReactNode;
};

export const Navbar: FC<Props> = ({ element }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-linear-to-r from-slate-950 via-purple-950 to-slate-950 shadow-2xl w-full fixed top-0 left-0 z-50 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-2 group cursor-pointer">
              <div className="relative">
                <Telescope className="h-10 w-10 text-purple-400 group-hover:text-purple-300 transition-all duration-300 group-hover:scale-110" />
                <Sparkles className="h-4 w-4 text-purple-300 absolute -top-1 -right-1 animate-pulse" />
              </div>
              <Link to="/">
                <span className="text-2xl font-bold bg-linear-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  AstronomyPanel
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              <NavLink
                to="/simulator"
                icon={<Rocket className="h-4 w-4 text-purple-300" />}
              >
                Simulator
              </NavLink>
              <NavLink
                to="/discussions"
                icon={<MessagesSquare className="h-4 w-4 text-blue-300" />}
              >
                Discussions
              </NavLink>
              <NavLink
                to="/news"
                icon={<Newspaper className="h-4 w-4 text-purple-300" />}
              >
                News
              </NavLink>
              <NavLink to="/about-us">About</NavLink>
              <NavLink to="/contact-us">Contact</NavLink>
            </div>

            {/* Auth Buttons - Desktop */}
            <div className="hidden md:flex items-center space-x-3">
              <NavLink
                to="/login"
                className="px-5 py-2.5 text-purple-400 font-semibold hover:text-white border-2 border-purple-400 rounded-full hover:bg-purple-400/10 transition-all duration-300 hover:scale-105"
              >
                Sign In
              </NavLink>
              <NavLink
                to="/register"
                className="px-5 py-2.5 bg-linear-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:from-purple-500 hover:to-blue-500 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/50"
              >
                Register
              </NavLink>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-purple-400 hover:text-purple-300 focus:outline-none transition-colors duration-300"
              >
                {isOpen ? (
                  <X className="h-7 w-7" />
                ) : (
                  <Menu className="h-7 w-7" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 pt-2 pb-6 space-y-2 bg-linear-to-b from-slate-950/95 to-purple-950/95 backdrop-blur-lg">
            <MobileNavLink to="/">Home</MobileNavLink>
            <MobileNavLink to="/simulator">
              <div className="flex items-center space-x-2">
                <Rocket className="h-4 w-4" />
                <span>Simulator</span>
              </div>
            </MobileNavLink>
            <MobileNavLink to="/discussions">
              <div className="flex items-center space-x-2">
                <MessagesSquare className="h-4 w-4" />
                <span>Discussions</span>
              </div>
            </MobileNavLink>
            <MobileNavLink to="/about-us">About</MobileNavLink>
            <MobileNavLink to="/contact-us">Contact</MobileNavLink>

            <div className="pt-4 space-y-2">
              <MobileNavLink
                to="/login"
                className="w-full px-5 py-3 text-purple-400 font-semibold border-2 border-purple-400 rounded-full hover:bg-purple-400/10 transition-all duration-300 text-center"
              >
                Sign In
              </MobileNavLink>
              <MobileNavLink
                to="/register"
                className="w-full px-5 py-3 bg-linear-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:from-purple-500 hover:to-blue-500 transition-all duration-300 shadow-lg text-center"
              >
                Register
              </MobileNavLink>
            </div>
          </div>
        </div>
      </nav>
      <div>{element}</div>
    </>
  );
};
