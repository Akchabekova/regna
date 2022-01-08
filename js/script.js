const myBurger =document.querySelector('.burger')
const myMenu =document.querySelector('.menu')

myBurger.addEventListener('click', () => {
    myMenu.classList.add('show')
})
