export type SkillKey =
  | "visualUI"
  | "uxThinking"
  | "research"
  | "figma"
  | "designSystem"
  | "accessibility"
  | "productThinking"
  | "handoff"
  | "portfolio";

export type IllustrationType =
  | "typography"
  | "spacing"
  | "userflow"
  | "wireframe"
  | "figma"
  | "mobile"
  | "dashboard"
  | "designsystem"
  | "accessibility"
  | "funnel"
  | "handoff"
  | "ai"
  | "portfolio";

export interface QuizQuestion {
  q: string;
  options: string[];
  answer: number;
  explain: string;
}

export interface LessonSection {
  heading: string;
  body: string;
  list?: string[];
}

export interface MiniDemo {
  type:
    | "typography"
    | "spacing"
    | "contrast"
    | "buttonstate"
    | "userflow"
    | "wireframe"
    | "none";
  title: string;
  description: string;
}

export interface Lesson {
  id: string;
  title: string;
  objective: string;
  estimatedMinutes: number;
  sections: LessonSection[];
  goodExample: string;
  badExample: string;
  commonMistakes: string[];
  designerMahal: string;
  miniDemo: MiniDemo;
  practice: string[];
  checklist: string[];
  quiz: QuizQuestion[];
}

export interface Module {
  id: string;
  slug: string;
  title: string;
  month: number;
  level: "Pemula" | "Intermediate" | "Mahir";
  tagline: string;
  description: string;
  goal: string;
  learningGoals: string[];
  illustrationType: IllustrationType;
  estimatedHours: number;
  skills: SkillKey[];
  lessons: Lesson[];
  checklist: string[];
  project: {
    title: string;
    brief: string;
    deliverables: string[];
  };
}

export interface GlossaryTerm {
  term: string;
  short: string;
  full: string;
  example: string;
}
