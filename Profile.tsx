import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { useAuthStore } from '../store/auth';
import { PoemCard } from '../components/PoemCard';
import { SAMPLE_POEMS } from './Home';

export const Profile = () => {
  const user = useAuthStore((state) => state.user);

  if (!user) {
    return null;
  }

  const userPoems = SAMPLE_POEMS.slice(0, 3);
  const savedPoems = SAMPLE_POEMS.slice(3);

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <div className="flex items-start gap-8 mb-8">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-32 h-32 rounded-full"
        />
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2 dark:text-white">{user.name}</h1>
          <div className="flex gap-6 mb-4">
            <div className="text-center">
              <div className="text-xl font-semibold dark:text-white">156</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">कविताएँ</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-semibold dark:text-white">2.3K</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">फॉलोअर्स</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-semibold dark:text-white">450</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">फॉलोइंग</div>
            </div>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            हिंदी कविता और साहित्य का शौक़ीन। यहाँ अपनी कविताएँ साझा करता हूँ।
          </p>
          <div className="flex gap-3">
            <button className="px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors">
              फॉलो करें
            </button>
            <button className="px-6 py-2 border border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors dark:text-white">
              संदेश
            </button>
          </div>
        </div>
      </div>

      <Tabs.Root defaultValue="poems" className="mt-8">
        <Tabs.List className="flex gap-8 border-b border-gray-200 dark:border-gray-700 mb-6">
          <Tabs.Trigger
            value="poems"
            className="pb-4 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white data-[state=active]:text-purple-600 dark:data-[state=active]:text-purple-400 data-[state=active]:border-b-2 data-[state=active]:border-purple-600 dark:data-[state=active]:border-purple-400 transition-colors"
          >
            मेरी कविताएँ
          </Tabs.Trigger>
          <Tabs.Trigger
            value="saved"
            className="pb-4 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white data-[state=active]:text-purple-600 dark:data-[state=active]:text-purple-400 data-[state=active]:border-b-2 data-[state=active]:border-purple-600 dark:data-[state=active]:border-purple-400 transition-colors"
          >
            सेव की गई कविताएँ
          </Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value="poems" className="space-y-4">
          {userPoems.map((poem) => (
            <PoemCard key={poem.id} poem={poem} />
          ))}
        </Tabs.Content>

        <Tabs.Content value="saved" className="space-y-4">
          {savedPoems.map((poem) => (
            <PoemCard key={poem.id} poem={poem} />
          ))}
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
};