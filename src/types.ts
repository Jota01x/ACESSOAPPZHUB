export interface Document {
  id: string;
  title: string;
  description: string;
  content: string;
  image?: string;
  type: 'pdf' | 'doc' | 'video';
  url: string;
}

export const ACCESS_KEY = '4080';
