// Obtendo os elementos do formulário
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")

// Cotação de moedas do dia
const USD = 4.87
const EUR = 5.32
const GBP = 6.08


// Manipulando o input amount para receber somente números
amount.addEventListener("input", () => {
    const hasCaractersRegex = /\D+/g
    amount.value = amount.value.replace(hasCaractersRegex, "")
})

// Capturando o evento de submit (enviar) do formulário
form.onsubmit = (event) => {
    //Evita o carregamento da página
    event.preventDefault()

    switch(currency.value) {
        case "USD": 
            convertCurrency(amount.value, USD, "US$")
            break
        case "EUR": 
            convertCurrency(amount.value, EUR, "€")   
            break
        case "GBP":
            convertCurrency(amount.value, GBP, "£")  
            break
    }
}

// Convertendo a moeda
function convertCurrency(amount, price, symbol) {
    console.log(amount, price, symbol)
}
