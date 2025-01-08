// Obtendo os elementos do formulário
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")

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
    // Evita o carregamento da página
    event.preventDefault()

    switch(currency.value) {
        case "USD": // Dólar
            convertCurrency(amount.value, USD, "US$")
            break
        case "EUR": // Euro
            convertCurrency(amount.value, EUR, "€")   
            break
        case "GBP": // Libra
            convertCurrency(amount.value, GBP, "£")  
            break
    }
}

// Convertendo a moeda
function convertCurrency(amount, price, symbol) {
    try {
        // Aplica a classe que exibe o footer para mostrar o resultado na tela
        footer.classList.add("show-result")
    } catch (error) {
        // Remove a classe footer, ou seja, não exibe o resultado na tela
        footer.classList.remove("show-result")
        
        console.log(error)
        alert("Não foi possível fazer a conversão. Tente novamente mais terde!")
    }
    // console.log(amount, price, symbol)
}
