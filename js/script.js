const myBurger = document.querySelector('.burger')
const myMenu = document.querySelector('.menu')
const menuItem = document.querySelectorAll('.menu-item')



myBurger.addEventListener('click', () => {
    myMenu.classList.toggle('show')
    document.body.classList.toogle('o-hidden')
})

menuItem.forEach(onelink => {
    onelink.addEventListener('click', () => {
        myMenu.classList.remove('show')
        document.body.classList.remove('o-hidden')
    })

})