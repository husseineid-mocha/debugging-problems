/*

Fix the `cutestCat` function. Should return the cat with the highest `cuteness`
rating.

*/


function cutestCat(cats) {

    let cat1;
    let cutest = 0;
    let i = 0;
    while (i < cats.length) {
        const cat = cats[i];
        if (cat.cuteness > cutest) {
            cat1 = cat
            cutest = cat.cuteness;
        }
        i++;
    }
    debugger
    return cat1;
}


const cats = [
    { name: 'Fluffy', cuteness: 9 },
    { name: 'Princess', cuteness: 6 },
    { name: 'Tiger', cuteness: 7 },
    { name: 'Indie', cuteness: 5 },
]

console.log(cutestCat(cats)); // { name: 'Fluffy', cuteness: 9 }