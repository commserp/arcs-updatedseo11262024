import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Brain,
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  Stethoscope,
  Scale,
  TrendingUp,
  Building2,
  Shield,
  Factory,
  Building,
  LandmarkIcon,
  Globe,
  Lock,
  Users,
  BookOpen,
  Beaker,
  AlertTriangle,
  Heart,
  Dna,
  Eye,
  FileText,
  Leaf,
  Radio,
} from 'lucide-react';

const applications = [
  {
    name: 'Healthcare & MedTech',
    icon: Stethoscope,
    href: '/healthcare',
    description: 'Compliance solutions for healthcare institutions',
  },
  {
    name: 'Legal & Litigation',
    icon: Scale,
    href: '/legal',
    description: 'AI-powered legal compliance systems',
  },
  {
    name: 'Hedge Funds & VCs',
    icon: TrendingUp,
    href: '/hedge-funds-vc',
    description: 'Investment operations compliance',
  },
  {
    name: 'Insurance',
    icon: Shield,
    href: '/insurance',
    description: 'Risk management and compliance automation',
  },
  {
    name: 'Investment Banks',
    icon: Building2,
    href: '/banking',
    description: 'Banking regulation compliance solutions',
  },
  {
    name: 'Manufacturing',
    icon: Factory,
    href: '/manufacturing',
    description: 'Industrial compliance management',
  },
  {
    name: 'Government',
    icon: LandmarkIcon,
    href: '/government',
    description: 'Public sector compliance systems',
  },
  {
    name: 'Enterprise',
    icon: Building,
    href: '/enterprise',
    description: 'Corporate compliance solutions',
  },
  {
    name: 'Geopolitical Analysis',
    icon: Globe,
    href: '/geopolitical-analysts',
    description: 'Strategic compliance for global stability',
  },
  {
    name: 'Critical Infrastructure',
    icon: Lock,
    href: '/critical-infrastructure',
    description: 'Infrastructure protection compliance',
  },
  {
    name: 'Investors',
    icon: TrendingUp,
    href: '/investors',
    description: 'Investment compliance intelligence',
  },
  {
    name: 'Advanced Labs',
    icon: Beaker,
    href: '/advanced-labs',
    description: 'Research compliance solutions',
  },
  {
    name: 'Legislature',
    icon: LandmarkIcon,
    href: '/legislature',
    description: 'Legislative compliance support',
  },
  {
    name: 'Intelligence Agencies',
    icon: Eye,
    href: '/intelligence-agencies',
    description: 'Intelligence compliance systems',
  },
  {
    name: 'Opioid Crisis',
    icon: AlertTriangle,
    href: '/opioid-crisis',
    description: 'Opioid crisis management compliance',
  },
  {
    name: 'Myocarditis',
    icon: Heart,
    href: '/myocarditis',
    description: 'Myocarditis treatment compliance',
  },
  {
    name: 'Synthetic Biology',
    icon: Dna,
    href: '/synthetic-biology',
    description: 'Bioengineering compliance solutions',
  },
  {
    name: 'Disinformation',
    icon: Eye,
    href: '/disinformation',
    description: 'Countering disinformation compliance',
  },
  {
    name: 'FDA Programs',
    icon: Shield,
    href: '/fda-programs',
    description: 'FDA regulatory compliance',
  },
  {
    name: 'Carbon Capture',
    icon: Leaf,
    href: '/carbon-capture',
    description: 'Environmental compliance solutions',
  },
  {
    name: 'Conflict Zones',
    icon: Radio,
    href: '/conflict-zones',
    description: 'Crisis zone compliance management',
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
    setMobileSubmenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleMouseEnter = (dropdownName: string) => {
    setActiveDropdown(dropdownName);
  };

  const toggleMobileSubmenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileSubmenuOpen(!mobileSubmenuOpen);
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const Logo = () => (
    <Link to="/" className="flex items-center space-x-3">
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-emerald-400 rounded-full opacity-75 group-hover:opacity-100 blur transition-all duration-300" />
        <Brain className="relative h-8 w-8 text-blue-600" />
      </div>
      <span className="font-bold text-xl tracking-tight gradient-text">
        ARCS Scientific
      </span>
    </Link>
  );

  const MenuItems = ({ isMobile = false }: { isMobile?: boolean }) => (
    <>
      <div
        ref={dropdownRef}
        className={`${isMobile ? '' : 'dropdown-container'}`}
      >
        <button
          className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors duration-200 w-full"
          onClick={isMobile ? toggleMobileSubmenu : undefined}
        >
          <span>Applications</span>
          {isMobile ? (
            mobileSubmenuOpen ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </button>

        {((isMobile && mobileSubmenuOpen) || !isMobile) && (
          <div
            className={`${
              isMobile ? 'mt-2' : 'dropdown-menu'
            } bg-white rounded-xl shadow-xl border border-gray-100`}
          >
            <div className="p-4 grid gap-4 max-h-[calc(100vh-200px)] overflow-y-auto custom-scrollbar">
              {applications.map((app) => (
                <Link
                  key={app.name}
                  to={app.href}
                  className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => {
                    if (isMobile) {
                      setIsOpen(false);
                      setMobileSubmenuOpen(false);
                    }
                  }}
                >
                  <div className="flex-shrink-0">
                    <app.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{app.name}</div>
                    <p className="text-sm text-gray-500">{app.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <Link
        to="/technologies"
        className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
        onClick={() => isMobile && setIsOpen(false)}
      >
        Technologies
      </Link>

      <Link
        to="/founder"
        className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
        onClick={() => isMobile && setIsOpen(false)}
      >
        Our Founder
      </Link>

      <a
        href="/#contact"
        className="text-gray-600 hover:text-blue-600 transition-colors duration-200 cursor-pointer"
        onClick={handleContactClick}
      >
        Contact
      </a>
    </>
  );

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <MenuItems />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col space-y-4">
              <MenuItems isMobile={true} />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
