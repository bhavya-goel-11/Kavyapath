import React from 'react';
import { Heart, MessageCircle, Share2, Volume2 } from 'lucide-react';
import { Poem } from '../types';
import { AudioPlayer } from './AudioPlayer';
import { ShareMenu } from './ShareMenu';
import { CommentSection } from './CommentSection';

interface PoemCardProps {
  poem: Poem;
}

export const PoemCard: React.FC<PoemCardProps> = ({ poem }) => {
  const [isLiked, setIsLiked] = React.useState(false);
  const [showAudio, setShowAudio] = React.useState(false);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 mb-4">
      <div className="flex items-center mb-3">
        <img
          src={`https://api.dicebear.com/7.x/initials/svg?seed=${poem.authorId}`}
          alt="Author"
          className="w-10 h-10 rounded-full"
        />
        <div className="ml-3">
          <h3 className="font-medium dark:text-white">
            {poem.isAnonymous ? 'अज्ञात कवि' : poem.authorId}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{poem.createdAt}</p>
        </div>
      </div>
      
      <h2 className="text-xl font-bold mb-2 dark:text-white">{poem.title}</h2>
      <p className="text-lg mb-4 font-['Noto_Sans_Devanagari'] leading-relaxed dark:text-gray-200">
        {poem.content}
      </p>
      
      {showAudio && poem.audioUrl && (
        <div className="mb-4">
          <AudioPlayer url={poem.audioUrl} title={poem.title} />
        </div>
      )}
      
      <div className="flex items-center justify-between text-gray-500 dark:text-gray-400">
        <button
          onClick={() => setIsLiked(!isLiked)}
          className={`flex items-center gap-1 transition-colors ${
            isLiked ? 'text-red-500 dark:text-red-400' : 'hover:text-red-500 dark:hover:text-red-400'
          }`}
        >
          <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
          <span>{poem.likes + (isLiked ? 1 : 0)}</span>
        </button>
        
        <CommentSection count={poem.comments} />
        
        {poem.audioUrl && (
          <button
            onClick={() => setShowAudio(!showAudio)}
            className="flex items-center gap-1 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
          >
            <Volume2 className="w-5 h-5" />
            <span>सुनें</span>
          </button>
        )}
        
        <ShareMenu poemId={poem.id} />
      </div>
    </div>
  );
};