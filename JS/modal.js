const items = {
    first:['BURGER',20],
    second:['PIZZA',50],
    third:['DRINKS',10]
}

const modalFunc = (items) =>{
const button = document.querySelector('#btn')
const modalclosebutton = document.querySelector('.modalclosebutton')
const modal = document.querySelector('.modal')
const backdrop = document.querySelector('.backdrop')
const content = document.querySelector('.modalContent')

button.addEventListener('click',()=>{
    modal.classList.add('modalActive')
    backdrop.classList.add('backdropActive')
    showContent()
})

const removeClasses = () =>{
    content.innerHTML=''
    modal.classList.remove('modalActive')
    backdrop.classList.remove('backdropActive')
}

modalclosebutton.addEventListener('click', removeClasses)

backdrop.addEventListener('click',removeClasses)

modal.addEventListener('click',(e)=>{
    e.stopPropagation()
})


const showContent = () =>{
const contentButton = document.createElement('button')
contentButton.className='modalOrder'
contentButton.textContent='Order Food'
// content.append(contentButton)
const values = Object.values(items)
console.log(values);
values.forEach(el=>{
    const text = document.createElement('p')
    text.className='contentText'
    text.textContent=`${el[0]}: ${el[1]}$`
    content.append(contentButton,text)
})

contentButton.addEventListener('click',()=>{
    setTimeout(removeClasses,3000)
    content.innerHTML = `
        <h3>THANK YOU</h3>
        <p>Come back for another orders</p>
    `
}) }
}
modalFunc(items)




