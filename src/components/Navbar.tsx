import { useState } from "react";
import { Menu, X } from "lucide-react";
import config from "../../webConfig";
import "../styles/hover-effects.css";

const navbarItems = [
  { name: "Home", href: "#home" },
  { name: "Features", href: "#features" },
  { name: "FAQ", href: "#faq" },
  { name: "Discord", href: config.discordServer },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-[#0A0A0A]/95 backdrop-blur-sm py-4 px-6 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img
            src="/logo-rounded.png"
            alt="Avon Logo"
            className="w-10 h-10 text-[#8B5DFF]"
          />
          <span className="font-poppins text-xl font-bold text-white">
            Avon Bot
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="space-x-6">
            {navbarItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="nav-link text-white"
              >
                {item.name}
              </a>
            ))}
          </div>
          <a
            href={config.botInvite}
            className="px-6 py-2 rounded-lg bg-gradient-to-r from-[#8B5DFF] to-[#6A42C2] hover:opacity-90 transition-opacity text-white font-medium"
          >
            Invite Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0A0A0A] border-t border-gray-800">
          <div className="flex flex-col space-y-4 p-6">
            {navbarItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="nav-link text-white"
              >
                {item.name}
              </a>
            ))}
            <a
              href={config.botInvite}
              className="px-6 py-2 rounded-lg bg-gradient-to-r from-[#8B5DFF] to-[#6A42C2] hover:opacity-90 transition-opacity text-white font-medium"
            >
              Invite Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
