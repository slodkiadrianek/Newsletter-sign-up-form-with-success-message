'use strict'

const button = document.querySelector('.button')
const email = document.querySelector('.email')
const textValidation = document.querySelector('.text__validation')
const mainCon = document.querySelector('.main__con')
const thankCon = document.querySelector('.thank__con') 
const emailPlace = document.querySelector('.email__place')
const thankButton = document.querySelector('.thank__button')

button.addEventListener('click', function(){
    const mandatoryCharacters = ['@', '.com']
    const checkEmail = mandatoryCharacters.some(el => email.value.includes(el))
    console.log(checkEmail);
    if(checkEmail){
        const dividedEmail = `${email.value}`.split('@')
        const firstPart = dividedEmail[0]
        const secondPart = `${dividedEmail[1]}`.split('com')
        if(firstPart.length > 0 && secondPart[0].length > 0 ){
            mainCon.classList.add('hidden')
            thankCon.classList.remove('hidden')
            emailPlace.textContent = email.value
        }else{
            email.classList.add('wrong_email')
            textValidation.textContent = 'Valid email required'
        }
    }else{
        email.classList.add('wrong_email')
            textValidation.textContent = 'Valid email required'
    }
})

thankButton.addEventListener('click', function(){
    window.location.reload()
})

