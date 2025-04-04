import React, { useState } from 'react';
import * as Popover from '@radix-ui/react-popover';
import { MessageCircle, X } from 'lucide-react';

interface Comment {
  id: string;
  author: string;
  content: string;
  timestamp: string;
  avatar: string;
}

const DUMMY_COMMENTS: Comment[] = [
  {
    id: '1',
    author: 'रवि शर्मा',
    content: 'बहुत सुंदर कविता! आपने बहुत खूबसूरती से भावनाओं को शब्दों में पिरोया है।',
    timestamp: '2 घंटे पहले',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=रवि शर्मा'
  },
  {
    id: '2',
    author: 'मीरा गुप्ता',
    content: 'वाह! कितनी गहरी बात कही है आपने।',
    timestamp: '5 घंटे पहले',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=मीरा गुप्ता'
  },
  {
    id: '3',
    author: 'अमित पटेल',
    content: 'इस कविता को पढ़कर मन प्रफुल्लित हो गया।',
    timestamp: '1 दिन पहले',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=अमित पटेल'
  }
];

interface CommentSectionProps {
  count: number;
}

export const CommentSection: React.FC<CommentSectionProps> = ({ count }) => {
  const [comments] = useState<Comment[]>(DUMMY_COMMENTS);

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button className="flex items-center gap-1 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
          <MessageCircle className="w-5 h-5" />
          <span>{count}</span>
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 w-[320px] max-h-[400px] overflow-y-auto"
          sideOffset={5}
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold dark:text-white">टिप्पणियाँ</h3>
            <Popover.Close className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
              <X className="w-5 h-5" />
            </Popover.Close>
          </div>
          <div className="space-y-4">
            {comments.map((comment) => (
              <div key={comment.id} className="flex gap-3">
                <img
                  src={comment.avatar}
                  alt={comment.author}
                  className="w-8 h-8 rounded-full"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium dark:text-white">{comment.author}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {comment.timestamp}
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mt-1">{comment.content}</p>
                </div>
              </div>
            ))}
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};