import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavItem {
  id: string;
  label: string;
}

const navItems: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  // Add more navigation items as needed
];

const Navigation: React.FC = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState<string>('about');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        const observer = new IntersectionObserver(observerCallback, observerOptions);
        observer.observe(element);
        observers.push(observer);
      }
    });

    setTimeout(() => setIsLoaded(true), 100);

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(id);
      }
    }
  }, [location]);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>, targetId: string): void => {
    event.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${targetId}`);
      setActiveSection(targetId);
    }
  };

  if (!isLoaded) {
    return null;
  }

  return (
    <nav className="nav hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-16 w-max">
        {navItems.map((item) => (
          <li key={item.id}>
            <Link
            className={`group flex items-center py-3 hover:text-slate-200 ${activeSection === item.id ? 'active text-slate-200' : 'text-slate-500'}`}
            to={`#${item.id}`}
            onClick={(e) => handleClick(e, item.id)}
            >
            <span
                className={`nav-indicator mr-4 h-px transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none ${
                activeSection === item.id ? 'w-16 bg-slate-200' : 'w-8 bg-slate-600'
                }`}
            ></span>
            <span
                className="nav-text text-xs font-bold uppercase tracking-widest transition-colors"
            >
                {item.label}
            </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;