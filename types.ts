export interface User {
  id: string;
  name: string;
  username: string;
  isVerified: boolean;
  followers: number;
  averageRating: number;
  genres: string[];
  profileImage: string;
}

export interface Poem {
  id: string;
  authorId: string;
  content: string;
  title: string;
  genres: string[];
  likes: number;
  comments: number;
  audioUrl?: string;
  createdAt: string;
  isAnonymous: boolean;
}