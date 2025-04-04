import React from 'react';
import { Flame, TrendingUp, Search } from 'lucide-react';
import { PoemCard } from '../components/PoemCard';
import { SAMPLE_POEMS } from './Home';

const GENRES = [
  'श्रृंगार', 'वीर रस', 'करुण', 'हास्य', 'भक्ति',
  'नीति', 'शांत', 'वात्सल्य', 'प्रेम', 'देशभक्ति'
];

export const Explore = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <div className="flex items-center gap-4 mb-6">
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="कविता या कवि खोजें..."
            className="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 dark:text-white"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        </div>
        <button className="flex items-center gap-2 text-red-500 dark:text-red-400">
          <Flame className="w-5 h-5" />
          <span>ट्रेंडिंग</span>
        </button>
        <button className="flex items-center gap-2 text-purple-500 dark:text-purple-400">
          <TrendingUp className="w-5 h-5" />
          <span>नवीनतम</span>
        </button>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {GENRES.map((genre) => (
          <button
            key={genre}
            className="px-4 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors"
          >
            {genre}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {SAMPLE_POEMS.map((poem) => (
          <PoemCard key={poem.id} poem={poem} />
        ))}
      </div>
    </div>
  );
};