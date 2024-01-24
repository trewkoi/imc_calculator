import { IMC } from './assets/utils/imc.js'

const calculateBtn = document.querySelector('.calculate')

const weight = document.querySelector('#weight')
const height = document.querySelector('#height')

const modalWrapper = document.querySelector('.modal-wrapper')
const titleResult = document.querySelector('h2.title')

const alertError = document.querySelector('.alert-error')

const modalClose = document.querySelector('.close')

calculateBtn.addEventListener('click', (ev) => {
    ev.preventDefault()
    const imc = IMC(weight.value, height.value)

    if(isNaN(imc)) {
        alertError.classList.toggle('open')
    } else {
        alertError.classList.toggle('open')
        titleResult.innerText = `Seu IMC é de ${imc}`
    
        modalWrapper.classList.toggle('open')
    }

})

modalClose.addEventListener('click', (ev) => {
    modalWrapper.classList.toggle('open')
})
