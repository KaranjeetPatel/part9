const bmiCalculator = (height: number, weight: number) : string => {
    const metric = height * 0.01;
    const result = weight / ( metric*metric);
    if (result < 18.5) {
      return 'Underweight';
    }
    if (result < 30) {
      return 'Normal (healthy weight)';
    }
    else {
      return 'Overweight';
    }
    
  };

export default bmiCalculator;