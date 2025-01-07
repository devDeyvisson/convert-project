// Obtendo os elementos do formulário
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")

// Manipulando o input amount para receber somente números
amount.addEventListener("input", () => {
    const hasCaractersRegex = /\D+/g
    amount.value = amount.value.replace(hasCaractersRegex, "")
})

// Capturando o evento de submit (enviar) do formulário
form.onsubmit = (event) => {
    //Evita o carregamento da página
    event.preventDefault()

    console.log(currency.value)
}