import { Lifts, LiftLabelValue, LiftCategory } from "../types/Core";

export const LIFTS: Lifts = {
  DEADLIFT: "deadlift",
  BENCHPRESS: "benchPress",
  OVERHEADPRESS: "overHeadPress",
  BACKSQUAT: "backSquat"
};

export const LiftList: LiftLabelValue[] = [
  {
    label: "Dead Lift",
    value: LIFTS.DEADLIFT,
  },
  {
    label: "Bench Press",
    value: LIFTS.BENCHPRESS,
  },
  {
    label: "Overhead Press",
    value: LIFTS.OVERHEADPRESS,
  },
  {
    label: "Back Squat",
    value: LIFTS.BACKSQUAT,
  },
];

export const GridTitles: string[] = ['Week', 'Sets', 'Reps', 'Weights'];

export const GridWeeks: string[] = ['1', '2', '3', '4'];

export const GridReps: string[] = ['5', '3', '5/3/1', '5'];

export const GridSets: number = 3;

export const Categories: LiftCategory[] = [
  {
    title: 'Squats',
    subCategories: ['Back Squat', 'Front Squat', 'Box Squat', 'Overhead Squat']
  },
  {
    title: 'Presses',
    subCategories: ['Bench Press', 'Overhead Press', 'Seated Press']
  },
  {
    title: 'Deadlifts',
    subCategories: ['Deadlifts', 'Romanian Deadlifts', 'Sumo Deadlifts']
  },
  {
    title: 'Olympic',
    subCategories: ['Power Cleans', 'Hang Power Cleans', 'Snatches']
  },
  {
    title: 'Bodyweight',
    subCategories: ['Pushups', 'Pullups', 'Dips', 'Chinups', 'Squats']
  },
];

/*
  Cycyle -- CratedDate
    16 lifts -- Lift Date -- Week -- AMRAP -- Type -- ORM
*/