const burgerFunc = () =>{
    
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.header_nav')
    const navItems = document.querySelectorAll('.nav_links')

    for(let key of navItems){
        key.addEventListener('click',()=>{
           nav.classList.remove('show-nav_links')
           burger.classList.remove('show-burger')
        })
    }

    burger.addEventListener('click',()=>{
        burger.classList.toggle('show-buger')
        nav.classList.toggle('show-nav_links')
    })
}

burgerFunc()

