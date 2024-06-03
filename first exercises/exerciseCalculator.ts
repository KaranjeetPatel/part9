export interface Result {
    periodLength: number;
    trainingDays: number;
    success: boolean;
    rating: number;
    ratingDescription: string;
    target: number;
    average: number;
  }
  
  export const calculateExercises = (exercises: number[], target: number) : Result => {
    let succe: boolean = true;
    let aver: number = 0;
    for (let i = 0; i< exercises.length; i++) {
      if (exercises[i] < target) {
        succe = false;
      }
      aver += exercises[i];
    }
    aver = aver / exercises.length;
    let rate: number = 0;
    let descr: string = "";
    
    if (aver === target) {
      rate = 2;
      descr = "You reached your target! Good!";
    }
    if (aver > target) {
      rate = 3;
      descr = "You went over your target! Excellent!";
    }
    if (aver < target) {
      rate = 1;
      descr = "You failed your target.. Try harder next time.";
    }
    
    return {
      periodLength: exercises.length,
      trainingDays: exercises.length,
      success: succe,
      rating: rate,
      ratingDescription: descr,
      target: target,
      average: aver
    };
  };
