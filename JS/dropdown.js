const dropdown=()=>{
    const dropdown = document.querySelectorAll('.dropdown__wrap')
    const content=document.querySelectorAll('.dropdown__content')
    
    for(let i=0;i<dropdown.length;i++){
        dropdown[i].addEventListener('click',()=>{
            dropdown.forEach((el,index)=>{
                if(i===index){
                    el.classList.toggle('dropdown__active')
                }else{
                    el.classList.remove ('dropdown__active')
                }
            })
        })
    }


    content.forEach(el=>{
        el.addEventListener('click',(e)=>{
            e.stopPropagation()
        })
    })
}
dropdown()