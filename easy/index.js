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