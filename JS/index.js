

const drinkFood = [
    {
        product:"Chicken",
        prices: 50,
        image:"../img/chicken wings.png",
    },
    {
        product:"Carbonara",
        prices: 70,
        image:"../img/carbonara.jpg",
    },
    {
        product:"Donut",
        prices: 30,
        image:"../img/donut.png",
    },
    {
        product:"Regular Fries",
        prices: 20,
        image:"../img/regular fries.png",
    },
    {
        product:"Chocolate Cake",
        prices: 40,
        image:"../img/chocolate cake.png",
    },
    {
        product:"Black Coffee",
        prices: 25,
        image:"../img/black coffee.png",
    },
    {
        product:"Halo-Halo",
        prices: 30,
        image:"../img/halo-halo.png",
    },
    {
        product:"Iced Coffee",
        prices: 45,
        image:"../img/Iced-Coffee-Milkshake.png",
    },
]

const swiper = document.querySelector('.cards')

const cards = drinkFood.map(item => {
    return `

    
        <div class="card swiper-slide">
            <img src="${item.image}" alt="" srcset="" class="images">
            <h1>${item.product}</h1>
            <li style="font-family:'Courier New', Courier, monospace; padding-top:1rem;">${item.prices} Pesos</li>
            <button class="order_btn"  >Order</button>
        </div>
    
    
    `
})

swiper.innerHTML += cards;

//console.log(cards)





const sliders = [...document.querySelectorAll('.cards')]
const slideNext = [...document.querySelectorAll('#nextButton')]
const prev = [...document.querySelectorAll('#prevButton')]

sliders.forEach((item, i) => {
    let dimension = item.getBoundingClientRect();
    let width = dimension.width

    slideNext[i ].addEventListener('click', () => {
       console.log("click")
        item.scrollLeft += width 
    })

    prev[i].addEventListener('click', () => {
        item.scrollLeft -= width
    })
})


const form = document.querySelector('.form')

const msg = document.querySelector('.msg')
const cls = document.querySelector('#cls')

const btnOrder = [...document.getElementsByClassName("order_btn")]
var overlay = document.querySelector('.overlay')


msg.addEventListener("click", () => {
    const clk = true

    if(clk){
        form.classList.add('activeForm')
        overlay.classList.add('activeOverlay')
    }
    
})

cls.addEventListener('click', () => {
    if(cls){
        form.classList.remove('activeForm')
        overlay.classList.remove('activeOverlay')
    }
})


const forms = document.querySelector('.form')

btnOrder.forEach((item, i) => {
    btnOrder[i].addEventListener('click', () => {
        forms.classList.add('activeForm')
        overlay.classList.add('activeOverlay')
        console.log("click")
    })
    
})

