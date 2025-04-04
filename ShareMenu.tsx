import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { Share2, Link2, Instagram, MessageCircle } from 'lucide-react';

interface ShareMenuProps {
  poemId: string;
}

export const ShareMenu: React.FC<ShareMenuProps> = ({ poemId }) => {
  const handleCopyLink = () => {
    navigator.clipboard.writeText(`${window.location.origin}/poem/${poemId}`);
  };

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(`${window.location.origin}/poem/${poemId}`);
    const text = encodeURIComponent('Check out this beautiful poem on Kavyapath!');
    
    switch (platform) {
      case 'whatsapp':
        window.open(`https://wa.me/?text=${text}%20${url}`);
        break;
      case 'instagram':
        // Instagram doesn't support direct sharing via URL
        alert('Instagram sharing coming soon!');
        break;
    }
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="flex items-center gap-1 hover:text-green-500 dark:hover:text-green-400 transition-colors">
          <Share2 className="w-5 h-5" />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-2 min-w-[200px]">
          <DropdownMenu.Item
            className="flex items-center gap-2 px-3 py-2 text-sm cursor-pointer hover:bg-purple-50 dark:hover:bg-gray-700 rounded-md outline-none"
            onSelect={handleCopyLink}
          >
            <Link2 className="w-4 h-4" />
            लिंक कॉपी करें
          </DropdownMenu.Item>
          <DropdownMenu.Item
            className="flex items-center gap-2 px-3 py-2 text-sm cursor-pointer hover:bg-purple-50 dark:hover:bg-gray-700 rounded-md outline-none"
            onSelect={() => handleShare('whatsapp')}
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp पर शेयर करें
          </DropdownMenu.Item>
          <DropdownMenu.Item
            className="flex items-center gap-2 px-3 py-2 text-sm cursor-pointer hover:bg-purple-50 dark:hover:bg-gray-700 rounded-md outline-none"
            onSelect={() => handleShare('instagram')}
          >
            <Instagram className="w-4 h-4" />
            Instagram पर शेयर करें
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};