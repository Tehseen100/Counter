let passNum = document.querySelector("#passNum");
let addBtn = document.querySelector("#addBtn");
let subBtn = document.querySelector("#subBtn");
let rsetBtn = document.querySelector("#rsetBtn");

let count = 0;

addBtn.addEventListener("click", () => {
    count++;
    passNum.textContent = count;
    // console.log(count);
})

subBtn.addEventListener("click", () => {
    if (count >= 1) {
        count--;
        passNum.textContent = count;
        // console.log(count);
    } else {
        alert("Your number is less than 0");
    }
})
rsetBtn.addEventListener("click", () => {
    count = 0;
    passNum.textContent = count;
    // console.log(count);
})