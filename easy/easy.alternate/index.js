
/** This is an alternate version of the easy challenge that I originally opted
 *  not to submit because I felt it didn't meet the requirements, hovever,
 * I wanted to include something that I tried that wasn't working so that 
 * you could see my thought process better and offer feedback on both versions.

(NOT THE FINAL VERSION)

function takeExercise(exercise) {
    let curExercise = exercise;

    function reportExercise() {
        let todayExercise = `Today's exercise: ${curExercise}`;
        return todayExercise;
    };

    return reportExercise();
};

const exercise = takeExercise;

console.log(exercise("Running"));
console.log(exercise("Swimming"));
console.log(exercise("Dancing"));
console.log(exercise("Fencing"));

 */