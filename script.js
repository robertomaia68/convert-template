const USD = 5.46
const EUR = 5.99
const GBP = 7.16

const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

amount.addEventListener("input", function(){
    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex, "")
})

form.onsubmit = function(event){
    event.preventDefault()

    switch (currency.value){
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


function convertCurrency(amount, price, symbol){
    try{
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`
        
        let total = String(amount * price).replace(".", ",")
        result.textContent = `${total} Reais`

        footer.classList.add("show-result")
    } catch (error){
        footer.classList.remove("show-result")
        console.log(error)
        
       alert("Nao foi possivel converter. Tente novamente mais tarde.")

    }
}


//Formata a moeda em Real brasileiro

function formatCurrencyBRL(value){
    return Number(value).toLocaleString("pt-BR",{
        style: "currency",
        currency: "BRL"
    })     
}