'use client' // This is crucial for using navigation hooks

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Briefcase, Trophy } from 'lucide-react'; // Using icons for a clean look

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { href: '/dashboard', label: 'Dashboard', icon: Home },
    { href: '/dashboard/portfolio', label: 'Portfolio', icon: Briefcase },
    { href: '/dashboard/achievements', label: 'Achievements', icon: Trophy },
  ];

  return (
    <nav className="w-20 lg:w-64 bg-gray-900 border-r border-gray-800 flex-col hidden sm:flex">
      <div className="flex items-center justify-center lg:justify-start h-20 px-6 border-b border-gray-800">
        <h1 className="text-2xl font-bold text-emerald-400 hidden lg:block">Tally</h1>
        <Trophy className="w-8 h-8 text-emerald-400 block lg:hidden" />
      </div>
      <ul className="flex-grow pt-8 space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li key={item.href}>
              <Link href={item.href} className={`flex items-center py-3 px-6 border-l-4 transition-colors ${
                  isActive
                    ? 'bg-gray-700/50 text-white border-emerald-400'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700/30 border-transparent'
                }`}>
                <item.icon className="w-6 h-6" />
                <span className="ml-4 hidden lg:block">{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="p-6 border-t border-gray-800">
        <div className="flex items-center">
          <img className="h-10 w-10 rounded-full object-cover" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="User avatar" />
          <div className="ml-4 hidden lg:block">
            <p className="font-semibold text-white">Alex Morgan</p>
            <p className="text-sm text-gray-400">Investor Level: 12</p>
          </div>
        </div>
      </div>
    </nav>
  );
}