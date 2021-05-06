{
    const welcome = () => {
        console.log("Witaj w moim kalkulatorze walut")
    }

    welcome()








    const calculateUserScore = (userCurrancy, userValue) => {

        const rate = 0;
        const rateEUR = 4.55;
        const rateUSD = 3.78;
        const rateGBP = 5.25;

        switch (userCurrancy) {
            case "EUR":
                return userValue / rateEUR;
                break;
            case "USD":
                return userValue / rateUSD;
                break;
            case "GBP":
                return userValue / rateGBP;
                break;
            case "wybierz walutę":
                return userValue / rate;
        };

    }
    const userScoreUpdate = (finalScore, scoreUser, userCurrancy) => { finalScore.value = `${scoreUser.toFixed(2)} ${userCurrancy}`; }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const finalScore = document.querySelector(".js-finalScore")
        const currentCurrancy = document.querySelector(".js-Currency")
        const currentValue = document.querySelector(".js-CurrentValue")

        const userValue = +currentValue.value;
        const userCurrancy = currentCurrancy.value;

        const scoreUser = calculateUserScore(userCurrancy, userValue);

        userScoreUpdate(finalScore, scoreUser, userCurrancy);

    }

    const init = () => {
        const formElement = document.querySelector(".js-form")

        formElement.addEventListener("submit", onFormSubmit);

    }

    init();


}