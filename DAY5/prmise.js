// let promise = new Promise((resolve, reject) => {
//     resolve({ user: 'HA', pass: '12344' });
// });

// promise
//     .then((data) => {
//         console.log(data);
//         return data;
//     })
//     .then((res) => {
//         console.log(res.user);
//     })
//     .catch(() => {
//         console.log("error");
//     })
//     .finally(() => {
//         console.log("finally");
//     });

// function roll(num, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => { 
//             console.log("Roll No. is " + num);
//             resolve();
//         }, delay);  
//     });
// }

// roll(1231, 1000)
//     .then(() => roll(12123, 2000))  
//     .then(() => roll(12321, 3000))
//     .then(() => {
//         console.log("All done");
//     });

// function roll(num, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (num < 0) { 
//                 reject("Invalid Roll Number: " + num);  
//             } else {
//                 console.log("Roll No. is " + num);
//                 resolve();
//             }
//         }, delay);
//     });
// }

// roll(1231, 1000)
//     .then(() => roll(12123, 2000))  
//     .then(() => roll(12321, 3000))
//     .then(() => {
//         console.log("All done");
//     })
//     .catch((error) => {  
//         console.error("Error:", error);
//     });

    function getRoll(num, delay) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("Roll No is", num);
                resolve("Successfully done");
            }, delay);
        });
    }
    
    getRoll(1, 1000)
        .then(() => getRoll(2, 2000))  
        .then(() => getRoll(3, 3000))
        .then(() => {
            console.log("All done");
        })
        .catch((error) => {
            console.error("Error:", error);
        });
    


