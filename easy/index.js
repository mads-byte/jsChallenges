function exerciseDay(today, deal) {
    let day = {
        dayName: today,
        dailyDeal: deal,
    }
    return {
        exercise: function (activity) {
            return `Today's exercise: ${activity}. Today's deal: ${day.dailyDeal}`
        }
    };
};

let Monday = exerciseDay("Monday", "Bring a Friend");
let Tuesday = exerciseDay("Tuesday", "50% off Merch");
let Wednesday = exerciseDay("Wednesday", "Free Cycling Class");
let Thursday = exerciseDay("Monday", "$2 Key Chains");


console.log(Monday.exercise("Running"));
console.log(Tuesday.exercise("Swimming"));
console.log(Wednesday.exercise("Dancing"));
console.log(Thursday.exercise("Fencing"));
