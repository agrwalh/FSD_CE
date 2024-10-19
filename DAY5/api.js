let url = 'https://api.github.com/users/agrwalh';
let b = fetch(url);
b.then((data) => {
    console.log(data)
    return data.json();
}).then((data) => {
    console.log(data);
}).catch(() => {
    console.log("Error");
}).finally(() => {
    console.log("First");
})

async function fetchData() {
    let url = 'https://api.github.com/users';
    let b = await fetch(url);
    let data = await b.json();
    console.log(data);
}
fetchData(); 
