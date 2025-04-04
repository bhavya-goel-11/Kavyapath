import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Compass, BookOpen, User, Moon, Sun } from 'lucide-react';
import { useThemeStore } from '../store/theme';
import { useAuthStore } from '../store/auth';
import { LoginDialog } from './LoginDialog';

export const Navbar = () => {
  const { isDark, toggleTheme } = useThemeStore();
  const user = useAuthStore((state) => state.user);

  const profileTrigger = user ? (
    <Link to="/profile" className="hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors">
      <img
        src={user.avatar}
        alt={user.name}
        className="w-6 h-6 rounded-full"
      />
    </Link>
  ) : (
    <button className="hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors">
      <User className="w-6 h-6" />
    </button>
  );

  return (
    <nav className="fixed bottom-0 w-full bg-white dark:bg-gray-800 border-t dark:border-gray-700 md:top-0 md:border-t-0 md:border-r h-16 md:h-screen md:w-16 flex md:flex-col items-center justify-around md:justify-start md:py-8 z-50">
      <Link to="/" className="text-2xl font-bold hidden md:block mb-8 dark:text-white">
        का
      </Link>
      <Link to="/" className="hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors">
        <Home className="w-6 h-6" />
      </Link>
      <Link to="/explore" className="hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors">
        <Compass className="w-6 h-6" />
      </Link>
      <Link to="/library" className="hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors">
        <BookOpen className="w-6 h-6" />
      </Link>
      {user ? (
        profileTrigger
      ) : (
        <LoginDialog trigger={profileTrigger} />
      )}
      <button
        onClick={toggleTheme}
        className="hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors mt-auto"
      >
        {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
      </button>
    </nav>
  );
};