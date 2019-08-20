'use strict'

// Gerar data e coloca em um id
let today = new Date()
let formatDate = today.toDateString()
let selectElement = document.getElementById('date')
selectElement.innerHTML = formatDate

console.log('Here\'s a hidden message')