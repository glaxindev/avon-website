import { Link, Plus, Vote } from "lucide-react";
import webConfig from "../../webConfig";

const Footer = () => {
  return (
    <footer className="bg-black py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="logo-rounded.png"
                alt="Avon Logo Footer"
                className="w-10 h-10"
              />
              <span className="font-poppins text-xl font-bold text-white">
                Avon Bot
              </span>
            </div>
            <p className="text-gray-400">
              Empower your Discord community with the most intuitive and
              powerful music bot.
            </p>
          </div>

          {/* Sitemap */}
          <div className="grid grid-cols-2 gap-4">
            <div className="hidden md:block">
              <h3 className="text-white font-semibold mb-4"></h3>
              <ul>
                <li></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Sitemap</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#home"
                    className="text-gray-400 hover:text-[#8B5DFF] transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="text-gray-400 hover:text-[#8B5DFF] transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="text-gray-400 hover:text-[#8B5DFF] transition-colors"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href={webConfig.discordServer}
                className="text-gray-400 hover:text-[#8B5DFF] transition-colors"
              >
                <Link className="w-6 h-6" />
              </a>
              <a
                href={webConfig.topgg}
                className="text-gray-400 hover:text-[#8B5DFF] transition-colors"
              >
                <Vote className="w-6 h-6" />
              </a>
              <a
                href={webConfig.botInvite}
                className="text-gray-400 hover:text-[#8B5DFF] transition-colors"
              >
                <Plus className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Glaxin Dev. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
