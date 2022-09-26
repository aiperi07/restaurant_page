
const categoriesGlobal = () =>{
    const data = {
        burgers: [
            {
                name: 'Super burger',
                img: 'https://www.lifepng.com/wp-content/uploads/2020/11/Burger-King-Black-Bunned-Halloween-Whopper-png-hd.png',
                price: 1000 +'$',
            },
            {
                name: 'Pro burger',
                img: 'https://down.imgspng.com/download/0720/burger_sandwich_PNG4135.png',
                price: 1200 +'$',
            },
            {
                name: 'Extra burger',
                img: 'https://images.squarespace-cdn.com/content/v1/60db7028d5b03028798598b0/51cb52a0-2c5c-4fbe-83c7-fb7f1c2949b2/dougwithdot-20.png',
                price: 1300 +'$',
            },
        ],
        pizzas: [
            {
                name: 'Italian pizza',
                img: 'https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Pizza-from-Scratch_EXPS_FT20_8621_F_0505_1_home.jpg',
                price: 1000 +'$',
            },
            {
                name: 'Meat pizza',
                img: 'https://assets.grab.com/wp-content/uploads/sites/4/2018/09/14185847/pizza-delivery-singapore.jpg',
                price: 1400 +'$',
            },
            {
                name: 'Cheese pizza',
                img: 'https://www.halfbakedharvest.com/wp-content/uploads/2022/08/Caramelized-Shallot-and-Bacon-Goat-Cheese-Pizza-1.jpg',
                price: 1400 +'$',
            },
            {
                name: 'Vegetable pizza',
                img: 'https://www.twopeasandtheirpod.com/wp-content/uploads/2021/03/Veggie-Pizza-8.jpg',
                price: 1400 +'$',
            },
    
        ],
        drinks: [
            {
                name: 'Beer',
                img: 'http://cdn.shopify.com/s/files/1/2397/3329/products/ICB_ice_eaf76975-6c4e-42b9-a5d6-50be3fd415cc_1024x1024.jpg?v=1617298988',
                price: 100 +'$',
            },
            {
                name: 'Wine',
                img: 'https://as2.ftcdn.net/v2/jpg/01/25/42/37/1000_F_125423757_hBttPteTTB3CKCZ2J3Knsfi2NQSF891g.jpg',
                price: 200 +'$',
            },
            {
                name: 'Vodka',
                img: 'https://cdn.shopify.com/s/files/1/0556/1086/7765/products/Vodka_Craft_1800x1800.jpg?v=1639655886',
                price: 50 +'$',
            },
            {
                name: 'Tequila',
                img: 'http://cdn.shopify.com/s/files/1/0013/2477/7569/products/group1_1200x1200.jpg?v=1571076945',
                price: 300 +'$',
            },
        ],

        desserts: [
            {
                name:'Oreo',
                img: 'https://thefirstyearblog.com/wp-content/uploads/2021/02/Oreo-Mousse-7C.jpg',
                price: 300 +'$',
            },

            {
                name: 'Summer dessert',
                img: 'https://i.pinimg.com/736x/a4/bf/75/a4bf7530d2149e4542ced9ea050d550d--blueberry-cheese-cakes-blueberry-recipes.jpg',
                price: 400 +'$',
            }
        ]
    }

    const burgers = data.burgers
    const pizza = data.pizzas
    const drinks = data.drinks
    const desserts = data.desserts
    const all = [...burgers,...pizza,...drinks,...desserts]

    const categories = (data) =>{
        const output = document.querySelector('.output')
        output.innerHTML=''
        data.forEach(el=>{
            const col = document.createElement('div')
            const box = document.createElement('div')
            const img = document.createElement('img')
            const name = document.createElement('h1')
            const price = document.createElement('h4')

            col.className='col-4'
            box.className='categories__box'

            img.src=el.img
            name.textContent=el.name
            price.textContent=el.price

            box.append(img,name,price)
            col.append(box)
            output.append(col)
        })
    }
   categories(all)

   const buttonsClickRender = ()=>{

    const buttons = document.querySelectorAll('.btn')

    buttons.forEach(el=>{
        el.addEventListener('click',()=>{
            if(el.classList.contains('burger')){
                categories(burgers)
            }else if(el.classList.contains('pizza')){
                categories(pizza)
            }else if(el.classList.contains('drinks')){
                categories(drinks)
            }else if(el.classList.contains('desserts')){
                categories(desserts)
            }
            else{
                categories(all)
            }

        })
    })
  for(let i = 0; i<buttons.length; i++){
    buttons[i].addEventListener('click',()=>{
        buttons.forEach((el,index)=>{
            if(i===index){
                el.classList.add('categories__choice__active')
            }else{
                el.classList.remove('categories__choice__active')
            }
        })
    })
  }

   }
   buttonsClickRender()


}
categoriesGlobal()






