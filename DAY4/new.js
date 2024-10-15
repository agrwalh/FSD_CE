// function aa() {
//     console.log("first");
// }
// setTimeout(aa, 2000);

// (function() {
//     console.log("second");
// })();

// let a = new Function(`console.log("Constructor");`);
// a();

// let b = () => {
//     console.log("Third");
// };
// b();

function rollnumber(num, delay, nextroll) {
    setTimeout(() => {
        console.log("roll number is", num);
        if (nextroll) nextroll();
    }, delay);
}

rollnumber(2020202020202, 1000, () => {
    rollnumber(121212, 2000, () => {
        rollnumber(303030, 3000, () => {
            rollnumber(404040, 4000);
        });
    });
});

