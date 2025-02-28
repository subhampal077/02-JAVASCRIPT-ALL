const resultPara = document.querySelector(".result-para");
const add = document.querySelector(".add");
const subtraction = document.querySelector(".sub");
const input = document.querySelector("#increment-decrement");
const reset = document.querySelector("#reset");

let count = 0;
add.addEventListener("click", (e) => {
    count += parseInt(input.value);
    resultPara.innerText = count;
});

subtraction.addEventListener("click", (e) => {
    count -= parseInt(input.value);
    resultPara.innerText = count;
});

reset.addEventListener("click", (e) => {
    count = 0;
    resultPara.innerText = count;
});


