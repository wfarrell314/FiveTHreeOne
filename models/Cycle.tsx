import { LiftList } from "../constants/Lifts";
/*
   Cycyle -- CratedDate
      16 lifts -- Lift Date -- Week -- AMRAP -- Type -- ORM
  */

export const NewCycle = {
  cycleDate: new Date(),
  weeks: AddWeeks(),
};

function AddWeeks() {
  let weeks: any = [];

  for (let i = 0; i < 4; i++) {
    weeks = [...weeks, Week(i + 1)];
  }

  return weeks;
}

function Week(weekNumber: any) {
  return LiftList.map((x, i) => {
    return Lift(x.value, weekNumber);
  });
}

function Lift(type: any, week: any) {
  return {
    liftDate: new Date(),
    type: type,
    week: week,
    amrap: 0,
    orm: 0,
  };
}
