export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'active' | 'completed';
  icon: string;
  details: string;
  actions?: {
    text: string;
    href?: string;
    onClick?: () => void;
  }[];
}

export interface PromptTemplate {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  preview: string;
  prompt: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export interface ModificationGuide {
  id: string;
  question: string;
  category: string;
  answer: string;
  code?: string;
  tags: string[];
  images?: string[];  // 示意图URL数组
  videos?: string[];  // 视频URL数组
}

export interface UserProgress {
  currentStep: string;
  completedSteps: string[];
  savedTemplates: string[];
  lastActivity: Date;
}

export type PageType = 'process' | 'templates' | 'modifications';