let finalScore = document.querySelector(".js-finalScore")
let currentCurrancy = document.querySelector(".js-Currency")
let currentValue = document.querySelector(".js-CurrentValue")
let scoreButton = document.querySelector(".score__Button")
let formElement = document.querySelector(".js-form")

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let rate = 0;
    let rateEUR = 4.55;
    let rateUSD = 3.78;
    let rateGBP = 5.25;
    let userValue = +currentValue.value;
    let userCurrancy = currentCurrancy.value;
    let scoreUser;

    switch (userCurrancy) {
        case "EUR":
            scoreUser = userValue / rateEUR;
            break;
        case "USD":
            scoreUser = userValue / rateUSD;
            break;
        case "GBP":
            scoreUser = userValue / rateGBP;
            break;
        case "wybierz walutę":
            scoreUser = userValue / rate;
    };
    finalScore.value =  `${scoreUser.toFixed(2)} ${currentCurrancy.value}`;

});




