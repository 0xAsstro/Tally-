'use client';

// Imports for Next.js components are removed to fix compilation errors.
// import Link from 'next/link';
// import Image from 'next/image';
// import { usePathname } from 'next/navigation';
import { Home, Briefcase, Trophy } from 'lucide-react';

export default function Sidebar() {
  // usePathname hook is removed.
  // const pathname = usePathname();

  const navItems = [
    { href: '/dashboard', label: 'Dashboard', icon: Home },
    { href: '/dashboard/portfolio', label: 'Portfolio', icon: Briefcase },
    { href: '/dashboard/achievements', label: 'Achievements', icon: Trophy },
  ];

  return (
    <nav className="w-20 lg:w-64 bg-gray-900 border-r border-gray-800 flex-col hidden sm:flex">
      {/* Header Section */}
      <div className="flex items-center justify-center h-20 px-6 border-b border-gray-800">
        <h1 className="text-2xl font-bold text-white hidden lg:block">Tally</h1>
        <Trophy className="h-8 w-8 text-white block lg:hidden" />
      </div>

      {/* Navigation Links Section */}
      <div className="flex-grow p-4">
        <ul className="space-y-2">
          {navItems.map((item) => {
            // isActive logic is removed as usePathname is no longer available.
            // const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                {/* Replaced Next.js Link with a standard anchor tag */}
                <a
                  href={item.href}
                  className="flex items-center py-3 px-6 border-l-4 transition-colors text-gray-400 hover:text-white hover:bg-gray-700/30 border-transparent"
                >
                  <item.icon className="w-6 h-6" />
                  <span className="ml-4 hidden lg:block">{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      {/* User Profile Section */}
      <div className="p-6 border-t border-gray-800">
        <div className="flex items-center">
          {/* Replaced Next.js Image with a standard img tag */}
          <img
            className="w-10 h-10 rounded-full object-cover"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            alt="User avatar"
          />
          <div className="ml-4 hidden lg:block">
            <p className="text-sm font-semibold text-white">Alex Morgan</p>
            <p className="text-sm text-gray-400">Investor Level: 12</p>
          </div>
        </div>
      </div>
    </nav>
  );
}

