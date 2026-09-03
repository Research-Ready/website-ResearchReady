// Rich course schema — replaces flat cert types.
// Content (lesson prose) lives in BookStack; this schema holds structure + metadata.

export type BloomsLevel = 'remember' | 'understand' | 'apply' | 'analyze';
export type ExerciseType = 'scenario' | 'lab' | 'matching' | 'ordering' | 'fill-in';
export type Difficulty = 'easy' | 'medium' | 'hard';

export interface LearningObjective {
  level: BloomsLevel;
  text: string; // "Student can explain..."
}

export interface Flashcard {
  id: string;
  term: string;
  definition: string;
  tags?: string[]; // for filtering/grouping
}

export interface KnowledgeCheck {
  id: string;
  question: string;
  options: [string, string, string, string];
  correct: 0 | 1 | 2 | 3;
  explanation: string;
  bloomsLevel: BloomsLevel;
}

export interface LabExercise {
  id: string;
  title: string;
  objective: string;
  tool: string;           // "CyberChef" | "DVWA" | "Greenbone" | "TheHive"
  toolUrl?: string;       // loaded from env/config at build time, not hardcoded
  steps: string[];
  expectedOutput: string;
  difficulty: Difficulty;
}

export interface Section {
  id: string;
  title: string;
  // Prose content lives in BookStack. This links to it.
  bookstackPageId?: number;
  bookstackPageSlug?: string;
  // Fallback inline content for when BookStack isn't populated yet
  contentPlaceholder: string; // "// TODO: ..."
  keyTakeaway?: string;
}

export interface Chapter {
  id: string;
  title: string;
  learningObjectives: LearningObjective[];
  sections: Section[];
  flashcards: Flashcard[];
  knowledgeChecks: KnowledgeCheck[];
  labExercise?: LabExercise;
  summary: string[];  // 3-5 bullet points
  examTip?: string;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  examWeight?: number;  // % of exam score
  chapters: Chapter[];
}

export interface ExamQuestion {
  id: string;
  question: string;
  options: [string, string, string, string];
  correct: 0 | 1 | 2 | 3;
  explanation: string;
  domain: string;        // links to module.id
  chapterId?: string;    // links to chapter.id
  difficulty: Difficulty;
  bloomsLevel: BloomsLevel;
  isPerformanceBased?: boolean; // Security+ only
}

export interface Course {
  id: string;
  title: string;
  subtitle: string;
  vendor: string;
  level: string;
  examCode: string;
  totalExamQuestions: number;
  examDuration: number;   // minutes
  passScore: number;      // percentage
  cost: string;
  modules: Module[];
  examBank: ExamQuestion[];   // full question pool
  mockExam: ExamQuestion[];   // fixed subset for timed mock
}
