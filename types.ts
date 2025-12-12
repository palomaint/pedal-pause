export enum QuestionType {
  SINGLE_CHOICE = 'SINGLE_CHOICE',
  MULTI_CHOICE = 'MULTI_CHOICE',
  INPUT = 'INPUT',
}

export interface Option {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

export interface Question {
  id: string;
  text: string;
  type: QuestionType;
  options?: Option[]; // Optional now because INPUT type doesn't have options
  helperText?: string;
  placeholder?: string; // For input fields
}

export interface Package {
  id: string;
  title: string;
  description: string;
  features: string[];
  imageUrl: string;
  matchTags: string[]; // Logic tags for matching
  recommendedFor: string;
  bookingUrl: string; // Specific URL for this package
  isCustom?: boolean;
}

export interface QuizState {
  currentStep: number;
  answers: Record<string, string | string[]>;
  isCompleted: boolean;
}