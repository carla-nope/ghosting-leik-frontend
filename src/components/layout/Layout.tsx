import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import {
  Menu, X, Ghost, ChevronDown, Moon, Sun,
  BookOpen, Users, Zap, Star, ChevronRight, Search
} from 'lucide-react';

const Layout: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/stories', label: 'Stories' },
    { path: '/yokai', label: 'Yōkai' },
    { path: '/quiz', label: 'Free Quiz' },
    { path: '/story-oracle', label: 'Story Oracle' },
    { path: '/about', label: 'About' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/25 group-hover:shadow-purple-500/40 transition-all">
                <Ghost className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg lg:text-xl tracking-tight">GhostingLeik</span>
                <span className="text-[10px] lg:text-xs text-purple-400 hidden sm:block">Japanese Supernatural</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive(item.path)
                      ? 'bg-purple-500/20 text-purple-400'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              <Link
                to="/pricing"
                className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold text-sm text-white hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg shadow-purple-500/25"
              >
                <Star className="w-4 h-4" />
                Join Membership
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-all"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden py-4 border-t border-white/10">
              <nav className="space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                      isActive(item.path)
                        ? 'bg-purple-500/20 text-purple-400'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-4 border-t border-white/10">
                  <Link
                    to="/pricing"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold text-sm text-white"
                  >
                    <Star className="w-4 h-4" />
                    Join Membership
                  </Link>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="min-h-screen">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-black/40 border-t border-white/10 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <Link to="/" className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Ghost className="w-6 h-6 text-white" />
                </div>
                <span className="font-bold text-lg">GhostingLeik</span>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed">
                Your destination for authentic Japanese ghost stories (kaidan) and supernatural folklore (yōkai). Discover the mysterious world of Japanese supernatural traditions.
              </p>
            </div>

            {/* Explore Links */}
            <div>
              <h4 className="font-semibold mb-4 text-purple-400">Explore</h4>
              <ul className="space-y-2">
                {[
                  { label: 'Ghost Stories', path: '/stories' },
                  { label: 'Yōkai Encyclopedia', path: '/yokai' },
                  { label: 'Take the Quiz', path: '/quiz' },
                  { label: 'Story Oracle', path: '/story-oracle' },
                ].map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-gray-400 hover:text-white text-sm transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-semibold mb-4 text-purple-400">Company</h4>
              <ul className="space-y-2">
                {[
                  { label: 'About Us', path: '/about' },
                  { label: 'Membership', path: '/pricing' },
                  { label: 'Contact', path: '/contact' },
                  { label: 'Privacy Policy', path: '/privacy' },
                ].map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-gray-400 hover:text-white text-sm transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-semibold mb-4 text-purple-400">Weekly Stories</h4>
              <p className="text-gray-400 text-sm mb-4">
                Get a curated Japanese ghost story delivered to your inbox every week.
              </p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm focus:outline-none focus:border-purple-500/50"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-purple-500 rounded-lg text-sm font-medium hover:bg-purple-600 transition-all"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} GhostingLeik.com. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
              <span>Made with ♥ for supernatural enthusiasts</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;