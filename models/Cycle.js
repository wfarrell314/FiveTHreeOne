import { LiftList } from "../constants/Lifts";
/*
   Cycyle -- CratedDate
      16 lifts -- Lift Date -- Week -- AMRAP -- Type -- ORM
  */

export function CreateCycle() {
  const liftsObject = AddLifts();

  //   return {
  //     cycleDate: new Date(),
  //     lifts: () => {liftsObject}
  //   };
}

function AddLifts() {
  const lifts = LiftList.foreach(lift => {
    let liftORM = lift.value + "ORM";

    return {
      [lift.value]: {
        [liftORM]: undefined,
        lifts: [
          Lift(lift.value, 1, liftORM),
          Lift(lift.value, 2, liftORM),
          Lift(lift.value, 3, liftORM),
          Lift(lift.value, 4, liftORM),
        ],
      },
    };
});
  console.log(JSON.stringify(lifts));
}

function Lift(type, week, orm) {
  return {
    liftDate: undefined,
    type: type,
    week: week,
    Amrap: undefined,
    ORM: orm,
  };
}
