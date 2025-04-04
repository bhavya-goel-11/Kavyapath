import React from 'react';
import { PoemCard } from '../components/PoemCard';
import { CreatePoemDialog } from '../components/CreatePoemDialog';
import { Flame, TrendingUp } from 'lucide-react';

export const SAMPLE_POEMS = [
  {
    id: '1',
    authorId: 'हरिवंश राय बच्चन',
    content: 'मधुशाला\n\nमदिरालय जाने को घर से\nचलता है पीनेवाला,\nकिस पथ से जाऊँ? असमंजस में\nहै वह भोलाभाला;',
    title: 'मधुशाला',
    genres: ['क्लासिक'],
    likes: 234,
    comments: 45,
    createdAt: '2 घंटे पहले',
    isAnonymous: false,
    audioUrl: 'https://example.com/audio1.mp3'
  },
  {
    id: '2',
    authorId: 'महादेवी वर्मा',
    content: 'मैं नीर भरी दुख की बदली\nविस्तृत नभ का कोई कोना\nमेरा न कभी अपना होना',
    title: 'मैं नीर भरी',
    genres: ['छायावाद'],
    likes: 156,
    comments: 23,
    audioUrl: 'https://example.com/audio2.mp3',
    createdAt: '5 घंटे पहले',
    isAnonymous: false
  },
  {
    id: '3',
    authorId: 'सूर्यकांत त्रिपाठी निराला',
    content: 'जागो फिर एक बार\nजागो मेरे जीवन के गीत!\nजागो मेरे जीवन के स्वर!',
    title: 'जागो फिर एक बार',
    genres: ['राष्ट्रीय'],
    likes: 189,
    comments: 34,
    audioUrl: 'https://example.com/audio3.mp3',
    createdAt: '1 दिन पहले',
    isAnonymous: false
  },
  // Additional poems
  {
    id: '4',
    authorId: 'मैथिलीशरण गुप्त',
    content: 'अहो! धन्य तुम हो माँ,\nतुम्हारी ममता अपार।\nतुम्हारा वात्सल्य अनंत,\nतुम्हारा स्नेह अपार॥',
    title: 'माँ',
    genres: ['वात्सल्य'],
    likes: 145,
    comments: 19,
    createdAt: '2 दिन पहले',
    isAnonymous: false
  },
  {
    id: '5',
    authorId: 'रामधारी सिंह दिनकर',
    content: 'विजयी विश्व तिरंगा प्यारा,\nझंडा ऊँचा रहे हमारा।\nसदा शक्ति बरसाने वाला,\nप्रेम सुधा सरसाने वाला॥',
    title: 'विजयी विश्व तिरंगा',
    genres: ['देशभक्ति'],
    likes: 278,
    comments: 56,
    audioUrl: 'https://example.com/audio4.mp3',
    createdAt: '3 दिन पहले',
    isAnonymous: false
  },
  {
    id: '6',
    authorId: 'जयशंकर प्रसाद',
    content: 'बीती विभावरी जाग री!\nअम्बर पनघट में डुबो रही\nतारा घट ऊषा नागरी॥',
    title: 'बीती विभावरी',
    genres: ['श्रृंगार'],
    likes: 167,
    comments: 28,
    createdAt: '4 दिन पहले',
    isAnonymous: false
  }
];

export const Home = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold dark:text-white">काव्यपथ</h1>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 text-red-500 dark:text-red-400">
            <Flame className="w-5 h-5" />
            <span>ट्रेंडिंग</span>
          </button>
          <button className="flex items-center gap-2 text-purple-500 dark:text-purple-400">
            <TrendingUp className="w-5 h-5" />
            <span>नवीनतम</span>
          </button>
        </div>
      </div>
      
      {SAMPLE_POEMS.map(poem => (
        <PoemCard key={poem.id} poem={poem} />
      ))}
      
      <CreatePoemDialog />
    </div>
  );
};