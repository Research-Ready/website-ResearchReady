// Course data barrel export.
// Sprint D: populate section content in BookStack, then link pages here.
// Sprint E: fill examBank and mockExam arrays.

import { itil4Course } from './itil4';
import { secPlusCourse } from './sec-plus';
import type { Course } from './types';

export { itil4Course, secPlusCourse };

// URL slug → Course. Used by /course/[cert] pages.
export const coursesBySlug: Record<string, Course> = {
  'itil4': itil4Course,
  'sec-plus': secPlusCourse,
};

export const courseSlugs = Object.keys(coursesBySlug);

export type {
  Course,
  Module,
  Chapter,
  Section,
  Flashcard,
  KnowledgeCheck,
  LabExercise,
  LearningObjective,
  ExamQuestion,
  BloomsLevel,
  Difficulty,
  ExerciseType,
} from './types';
