//  MajorCredits interface
interface MajorCredits {
  credits: number;
  brand: "Major";
}

//  MinorCredits interface
interface MinorCredits {
  credits: number;
  brand: "Minor";
}

// Function to sum major credits
function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "Major",
  };
}

// Function to sum minor credits
function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "Minor",
  };
}
