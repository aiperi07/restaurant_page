// let swiper = new Swiper(".mySwiper", {
//     // navigation: {
//     //   nextEl: ".swiper-button-next",
//     //   prevEl: ".swiper-button-prev",
//     // },
//     autoplay:true
//   });
const slider = new Swiper(".newSlider", {
    slidesPerView: 3,
    grid: {
      rows: 2,
    },
    spaceBetween: 30,
    autoplay:true
  });
  
  const eat=[
    {
        name:'',
        img:'https://cached.imagescaler.hbpl.co.uk/resize/scaleHeight/815/cached.offlinehbpl.hbpl.co.uk/news/OMC/Italian_food-20151028123558935.jpg'
    },
    {
        name:'',
        img:'https://restaurantclicks.com/wp-content/uploads/2022/06/italian-restaurants-orlando-fl.jpg'
    },
    {
        name:'',
        img:'http://cdn.cnn.com/cnnnext/dam/assets/210211142532-18-classic-italian-dishes-super-tease.jpg'
    },
    {
        name:'',
        img:'https://bigseventravel.com/wp-content/uploads/2020/11/zeppoli-e1605529703109-1024x807.jpg'
    },
    {
        name:'',
        img:'https://media.istockphoto.com/photos/shrimp-and-beef-skewers-picture-id182409111?b=1&k=20&m=182409111&s=170667a&w=0&h=1YDYXzbktY1i0exs3qwAfvG-AEI19HWU4_Ded_tiNjA='
    },
    {
        name:'',
        img:'https://resizer.otstatic.com/v2/photos/wide-huge/3/26406382.jpg'
    },{
      name:' ',
      img:'https://cdn.vox-cdn.com/thumbor/3FKRzsYqT-NwRREk4AZmpmSeFqA=/0x146:2048x1218/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23230105/79126689_100783091418832_2562874145926807552_n.jpeg'
  },
  {
      name:'',
      img:'https://hoodline.imgix.net/uploads/story/image/787346/o.jpg?auto=format'
  },
  {
      name:'',
      img:'https://b.zmtcdn.com/data/pictures/chains/2/9101342/62c47b8d5ec6f5b1e4c0047daf23db4f_featured_v2.jpg'
  },{
    name:'',
    img:'https://media.istockphoto.com/photos/pho-bo-vietnamese-soup-with-beef-in-bowl-picture-id1028123408?b=1&k=20&m=1028123408&s=612x612&w=0&h=L44-Elix_n92GCS529d9e1VyQFNbmsmzX2jIvaIxCRg='
  }
    
  ]
  const sliderFunc=(eat)=>{
    const sliderWrap=document.querySelector('.slider')
    eat.forEach(el => {
        const slide=document.createElement('div')
        const text=document.createElement('p')
        slide.className='swiper-slide'
        // text.textContent=el.name
        slide.style.backgroundImage=`url(${el.img})`
  
        sliderWrap.append(slide)
        // slide.append(text)
  
        slide.addEventListener('mouseover',()=>{
        slide.classList.toggle('show-swiper-slide')
        })
    });
    
  }
  sliderFunc(eat)