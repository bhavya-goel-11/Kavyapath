import React from 'react';
import { BookOpen, Bookmark, Clock, Star } from 'lucide-react';
import { PoemCard } from '../components/PoemCard';
import { SAMPLE_POEMS } from './Home';

export const Library = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6 dark:text-white">मेरी लाइब्रेरी</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-purple-100 dark:bg-purple-900 p-4 rounded-lg">
          <BookOpen className="w-6 h-6 text-purple-600 dark:text-purple-400 mb-2" />
          <div className="text-lg font-semibold text-purple-600 dark:text-purple-400">45</div>
          <div className="text-sm text-purple-600 dark:text-purple-400">सेव की गई</div>
        </div>
        <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-lg">
          <Bookmark className="w-6 h-6 text-blue-600 dark:text-blue-400 mb-2" />
          <div className="text-lg font-semibold text-blue-600 dark:text-blue-400">12</div>
          <div className="text-sm text-blue-600 dark:text-blue-400">प्लेलिस्ट</div>
        </div>
        <div className="bg-green-100 dark:bg-green-900 p-4 rounded-lg">
          <Clock className="w-6 h-6 text-green-600 dark:text-green-400 mb-2" />
          <div className="text-lg font-semibold text-green-600 dark:text-green-400">89</div>
          <div className="text-sm text-green-600 dark:text-green-400">इतिहास</div>
        </div>
        <div className="bg-yellow-100 dark:bg-yellow-900 p-4 rounded-lg">
          <Star className="w-6 h-6 text-yellow-600 dark:text-yellow-400 mb-2" />
          <div className="text-lg font-semibold text-yellow-600 dark:text-yellow-400">23</div>
          <div className="text-sm text-yellow-600 dark:text-yellow-400">पसंदीदा</div>
        </div>
      </div>

      <h2 className="text-xl font-semibold mb-4 dark:text-white">हाल ही में पढ़ी गई</h2>
      <div className="space-y-4">
        {SAMPLE_POEMS.slice(0, 5).map((poem) => (
          <PoemCard key={poem.id} poem={poem} />
        ))}
      </div>
    </div>
  );
};