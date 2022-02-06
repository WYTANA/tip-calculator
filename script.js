// variables

let bill = document.getElementById("bill-input")
let people = document.getElementById("people-input")
let percent = document.querySelectorAll(".buttons")
let custom = document.getElementById("custom")

let theme = document.getElementById("theme-btn")
let darkMode = false
let body = document.body.style
let container = document.querySelector(".container").style
let tipPerPerson = document.getElementById("tip-per-person").style
let totalPerPerson = document.getElementById("total-per-person").style



// functions

const tipSplit = (billAmount, amtPeople, percentage) => {
    billAmount = parseInt(bill.value)
    amtPeople = parseInt(people.value)

    if (custom.value) {
        percentage = parseInt(custom.value) / 100
        console.log(percentage)

        if (billAmount && amtPeople) {
            let tipPerPerson = (billAmount * percentage) / amtPeople
            let totalPerPerson = (billAmount / amtPeople) + tipPerPerson

            document.getElementById("tip-per-person").innerText = `$${tipPerPerson.toFixed(2)}`
            document.getElementById("total-per-person").innerText = `$${totalPerPerson.toFixed(2)}`
        }
    }

    else if (billAmount && amtPeople && percentage) {
        console.log("We have all of the inputs!")
        console.log(billAmount, amtPeople, percentage)

        let tipPerPerson = (billAmount * percentage) / amtPeople
        let totalPerPerson = (billAmount / amtPeople) + tipPerPerson

        document.getElementById("tip-per-person").innerText = `$${tipPerPerson.toFixed(2)}`
        document.getElementById("total-per-person").innerText = `$${totalPerPerson.toFixed(2)}`
    }
}

// console.log(tipSplit(60, 3, .25))



// event listeners

bill.addEventListener("change", tipSplit)
custom.addEventListener("change", tipSplit)
people.addEventListener("change", tipSplit)
percent.forEach((btn) => {
    btn.addEventListener("click", () => {
        let btns = parseFloat(btn.innerText) / 100
        tipSplit(bill, people, btns)
    })
})


const reset = () => {
    document.getElementById("tip-per-person").innerText = "$0.00"
    document.getElementById("total-per-person").innerText = "$0.00"
    bill.value = ""
    people.value = ""
    custom.value = ""
}

theme.addEventListener("click", () => {
    if (darkMode === false) {
        darkModeProps()
        darkMode = true
    } else {
        lightModeProps()
        darkMode = false
    }
})

const lightModeProps = () => {
    body.background = "#c4e0e9"
    // theme.src = "./images/icon-moon.svg"
    theme.innerText = "🌛"
    container.backgroundColor = "white"
    tipPerPerson.color = "rgb(0, 153, 115)"
    totalPerPerson.color = "rgb(0, 153, 115)"
}
const darkModeProps = () => {
    body.background = "rgb(20, 29, 47)"
    // theme.src = "./images/icon-sun.svg"
    theme.innerText = "🌞"
    container.backgroundColor = "#1E2A47"
    tipPerPerson.color = "#ff66ff"
    totalPerPerson.color = "#ff66ff"
    console.log("Dark mode")
}


