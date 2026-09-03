export interface Flashcard {
  term: string;
  definition: string;
}

export interface Question {
  id: string;
  question: string;
  options: [string, string, string, string];
  correct: 0 | 1 | 2 | 3;
  explanation: string;
  domain: string;
}

export interface Lesson {
  overview: string;
  keyPoints: string[];
  studyTip: string;
}

export interface Domain {
  id: string;
  title: string;
  weight: number;
  lesson: Lesson;
  questions: Question[];
  flashcards: Flashcard[];
}

export interface CertModule {
  id: string;
  title: string;
  subtitle: string;
  vendor: string;
  level: string;
  examCode: string;
  totalQuestions: number;
  duration: number;
  passScore: number;
  cost: string;
  domains: Domain[];
  mockExam: Question[];
}
