const telegramApply=()=>{
    const form=document.querySelector('#form')
     form.addEventListener('submit',(e)=>{
        e.preventDefault()

        let message=document.querySelector('#inputMessage')
        let number=document.querySelector('#inputNumber')

        let bot={
            TOKEN:'5778578430:AAHQTWIpre447nxlyLsx5ySvdta-Ybgzicw',
            chatID:'-613118712'
        }

        const telegramFetch=()=>{
            const sendTelegram=`Name : ${message.value} and Number : ${number.value}`
        fetch(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${sendTelegram}`,
        {
            method:'GET'
        }
        ).then(response=>{
            // alert('MESSAGE success')
            modalFunc()
        },error=>{
            alert('ERROR')
            // modalFunc()
        }
        )
        }
        // const sendTelegram={

        //     message:message.value,
        //     number:number.value
        // }

        // const result=JSON.stringify(sendTelegram)
        if(message.value.length>1 && number.value.length<8 && message.value.length<15 && number.value.length<15){
            telegramFetch()
        }else{
            alert('Validation error(name->min:2 max:14 symbol,message->min:9 max:14)')
        }
     })
}
telegramApply()
const items = {
    first:['BURGER',20],
    second:['PIZZA',50],
    third:['DRINKS',10]
}
const modalFunc=()=>{
    const button = document.querySelector('.telegram__button')
    const modalCloseButton = document.querySelector('.modalCloseButton')
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

    modalCloseButton.addEventListener('click', removeClasses)

    backdrop.addEventListener('click',removeClasses)

    modal.addEventListener('click',(e)=>{
        e.stopPropagation()
    })  
        // setTimeout(removeClasses,3000)
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

// const telegramApply2=()=>{
//     const newForm=document.querySelector('#newForm')
//     newForm.addEventListener('submit',(e)=>{
//         e.preventDefault()
        
//     let message=document.querySelector('#inputCompany')
//     let email=document.querySelector('#inputEmail')
//     let number=document.querySelector('#inputNumber')


//     let bot={
//         TOKEN:'5748291348:AAGOLU1Qik2sAq05oi7oor1rRUJRKpcfE6E',
//         chatID:'-763024198'
//     }


//     const telegramFetch2=()=>{
//         const sendTelegram=`Name : ${message.value}  and Number : ${number.value} and Email : ${email.value}`
//     fetch(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${sendTelegram}`,
//     {
//         method:'GET'
//     }
//     ).then(response=>{
//         // alert('MESSAGE success')
//         modalFunc()
//     },error=>{
//         alert('ERROR')
//     }
//     )
//     }
//     telegramFetch2()
//     })

//     const modalFunc=()=>{
//         const button = document.querySelector('.telegram__button')
//         const modalCloseButton = document.querySelector('.modalCloseButton')
//         const modal = document.querySelector('.modal')
//         const backdrop = document.querySelector('.backdrop')
//         const content = document.querySelector('.modalContent')
    
    
//         button.addEventListener('click',()=>{
//             modal.classList.add('modalActive')
//             backdrop.classList.add('backdropActive')

//         })
    
//         const removeClasses = () =>{
//             content.innerHTML=''
//             modal.classList.remove('modalActive')
//             backdrop.classList.remove('backdropActive')
//         }
    
//         modalCloseButton.addEventListener('click', removeClasses)
    
//         backdrop.addEventListener('click',removeClasses)
    
//         modal.addEventListener('click',(e)=>{
//             e.stopPropagation()
//         })  
//             setTimeout(removeClasses,3000)
//     }
// }
// telegramApply2()






