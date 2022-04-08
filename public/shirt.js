const inputMain = document.querySelectorAll('input[name=color]')
const shirtMain = document.querySelector('.shirtmain')

const inputCollar = document.querySelectorAll('input[name=collar')
const shirtCollar1 = document.querySelector('.shirtcollar1');
const shirtCollar2 = document.querySelector('.shirtcollar2');
const shirtCollar3 = document.querySelector('.shirtcollar3');



inputMain.forEach(element => {
  element.addEventListener('click', () => {
    shirtMain.setAttribute('fill', element.value)   
  })
})

inputCollar.forEach(element => {
  element.addEventListener('click', () => {
    shirtCollar1.setAttribute('fill', element.value)
    shirtCollar2.setAttribute('fill', element.value)
    shirtCollar3.setAttribute('fill', element.value)
  })
})

