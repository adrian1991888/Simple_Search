//pobranie elementów

const inputElement = document.querySelector('.search')
const drinkList = document.querySelector('.drink-list')
const li = document.querySelectorAll('li')
const ul = document.querySelector('ul')
const btn = document.querySelector('.btn')




//funkcja sprawdzająca czy ciąg znaków wpisany przez usera zawiera się w liście napojów

function search(e){
    e = inputElement.value.toLowerCase()
for (let i = 0; i < li.length; i++) {
    if (li[i].textContent.toLowerCase().includes(e)) {
        li[i].classList.remove('hidden')
    }
    else if(inputElement.value !== null){
        li[i].classList.add('hidden')
    }
}
}


//po puszczeniu klawisza wykonuje funkcję search

inputElement.addEventListener("keyup", search)


