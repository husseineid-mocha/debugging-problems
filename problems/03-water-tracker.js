/*

Fix the function `adequateWaterTracker`. `adequateWaterTracker` should return
true if ALL the the weeks in the calendar array having more days in the week
that you drank water than you didn't.

For example, in this week, [0, 0, 3, 1, 0, 4, 0], each day represents how many
cups of water you drank that day. In this example, there were only 3 days where
you drank at least one cup of water.

A calendar is represented by multiple weeks,
[[0, 0, 3, 1, 0, 4, 0], [1, 2, 1, 2, 1, 3, 1]].

If you drank water for at least 4 days of water for every week in the calendar,
then return true. Otherwise, return false.

*/

function adequateWaterTracker(calendar) {
    let water1 = 0;
    let water2 = 0;

    debugger
    for (let i = 0; i < calendar[0].length; i++) {
        let day = calendar[0][i];
        if (day !== 0) {
            water1++;
        }

    }
    for (let j = 0; j < calendar[1].length; j++) {
        let day = calendar[1][j];
        if (day !== 0) {
            water2++;
        }
    }

    debugger
    return (water1 >= 4 && water2 >= 4)
}

const calendar1 = [
    [0, 0, 3, 1, 0, 4, 0],
    [1, 2, 1, 2, 1, 3, 1],
];

console.log(adequateWaterTracker(calendar1)); // false

const calendar2 = [
    [1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 1, 1],
];

console.log(adequateWaterTracker(calendar2)); // false

const calendar3 = [
    [1, 1, 1, 1, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 0],
];

console.log(adequateWaterTracker(calendar3)); // true