const basket1 = document.querySelector(".basket-1 span");
const basket2 = document.querySelector(".basket-2 span");

const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");


const totalApple = 10;

let secondBasketCount = 0;
let firstBasketCount = totalApple - secondBasketCount;

basket1.innerText = firstBasketCount;
basket2.innerText = secondBasketCount;

leftBtn.addEventListener("click", () => {
    if(secondBasketCount>0) {
        secondBasketCount--;
        firstBasketCount++;
        basket1.innerText = firstBasketCount;
        basket2.innerText = secondBasketCount;
    }
});

rightBtn.addEventListener("click", () => {
    if(firstBasketCount>0) {
        secondBasketCount++;
        firstBasketCount--;
        basket1.innerText = firstBasketCount;
        basket2.innerText = secondBasketCount;
    }
});

