
export interface EventItem {
  id: string;
  name: string;
  description: string;
  category: 'technical' | 'non-technical' | 'workshop';
  time: string;
}

export interface Bearer {
  name: string;
  role: string;
  image: string;
}

export interface Achievement {
  year: string;
  title: string;
  detail: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  text: string;
}

// Added ComponentBit interface to fix error in Showcase.tsx
export interface ComponentBit {
  id: string;
  name: string;
  description: string;
  category: 'interaction' | 'display' | 'data' | 'ai';
  complexity: 'Simple' | 'Medium' | 'Advanced';
}
