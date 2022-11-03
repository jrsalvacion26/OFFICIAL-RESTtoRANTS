const foods = [
    {
        id:0,
        product:"Chicken",
        price: 50,
        image:"chicken wings.png",
    },

    {
        id:1,
        product:"Carbonara",
        price: 70,
        image:"carbonara.jpg",
    },

    {
        id:2,
        product:"Donut",
        price: 30,
        image:"donut.png",
    },
    
    {
        id:3,
        product:"Regular Fries",
        price: 20,
        image:"regular fries.png",
    },
    
    {
        id:4,
        product:"Chocolate Cake",
        price: 40,
        image:"chocolate cake.png",
    },
    

    {
        id:5,
        product:"Takoyaki",
        price:20,
        image:"takoyaki.png",
    },
   

    {
        id:6,
        product:"Spanish Bread",
        price: 23,
        image: "spanish bread.png",
    },
    

    {
        id:7,
        product: "Bacon Sandwich",
        price: 27,
        image: "bacon sandwich.png",
    },
    
    
    
]

function createFoods(data){
    const d = document.getElementById('f')

   for(var i=0; i<data.length;i++){
        var bxes =  `
        <div class="cardFood cartRow">
                <img src="${data[i].image}" alt="" srcset="" class="images">
                <div class="cardPrice">
                    <h1 id="p" class="item_title">${data[i].product}</h1>
                    <li id="pr" class="item_price">${data[i].price} Pesos</li>
                </div>
               
               <div class="btn">
                   <button class="order">Order</button>
                   <button class="add_cart" >Add to cart</button>  
               </div>          
       </div>      
        `

        d.innerHTML += bxes
   }

   
}
createFoods(foods)

const Drinks = [
    {
        ids:0,
        product:"Black Coffee",
        price: 30,
        image:"black coffee.png",
    },

    {
        ids:1,
        product:"Cappuccino Coffee",
        price: 50,
        image:"cappuccino coffee.jpg",
    },

    {
        ids:2,
        product:"Halo-halo",
        price: 30,
        image:"halo-halo.png",
    },
    
    {
        ids:3,
        product:"Iced Coffee",
        price: 25,
        image:"Iced-Coffee-Milkshake.png",
    },
    
    {
        ids:4,
        product:"Mango juice",
        price: 40,
        image:"Mango juice.png",
    },
    

    {
        ids:5,
        product:"Mango Milkshake",
        price:60,
        image:"mango milkshake.png",
    },
   

    {
        ids:6,
        product:"Taho",
        price: 20,
        image: "Taho.png",
    },
    
    
]






function createCards(){
    const d = document.getElementById('d')

    const b = Drinks.map(i => {
        var box =  `
        <div class="cardDrink cartRow">
               <img src="${i.image}" alt="" srcset="" class="images">
                <div class="cardPrice">
                    <h1 id="p" class="item_title">${i.product}</h1>
                    <li id="pr" class="item_price" >${i.price} Pesos</li>
                </div>
              
               <div class="btn" id="btnCart">
                   <button class="order">Order</button>
                   <button class="add_cart">Add to cart</button>    
               </div>          
       </div>      
        `

        d.innerHTML += box
    })

   
}
 createCards(Drinks)

 const btnF = document.getElementById('slideF')
 const btnD = document.getElementById('slideD')
 console.log(btnF)
 const d = document.querySelector('.drinks')
 const f = document.querySelector('.foods')

 btnF.addEventListener('click', () => {
   
     if(d.style.display ="none"){
        d.style.display =="none"
        f.style.display ="grid"
        btnF.classList.add('active')
        btnD.classList.remove('active')

       
    }else{
        d.style.display =="none"
        f.style.display ="grid"
        btnF.classList.add('active')
        btnD.classList.add('active')
    }
    

 })

 btnD.addEventListener('click', () => {
   

    if(f.style.display ="none"){
        f.style.display =="none"
        d.style.display ="grid"

        btnD.classList.add('active')
        btnF.classList.remove('active')
        
    }else{
        d.style.display =="none"
        f.style.display =="none"
        btnD.classList.remove('active')
        btnF.classList.add('active')
        
    }
    
 })

const btnCart = document.querySelector("#card_add")
const cartShow = document.querySelector(".cartItem")

btnCart.addEventListener("click", () => {
    console.log('click')
    cartShow.classList.toggle("closeCart")
})


const formr = document.querySelector('.forms')

const btnOrder = [...document.getElementsByClassName("order")]
var overlay = document.querySelector('.overlay')
const cls = document.querySelector('#cls')

cls.addEventListener('click', () => {
    if(cls){
        formr.style.transform = "scale(0)"
        overlay.classList.remove('activeOverlay')
    }
})


btnOrder.forEach((item, i) => {
    btnOrder[i].addEventListener('click', () => {
        overlay.classList.add('activeOverlay')
        formr.style.transform = "scale(1)"
        console.log("click", btnOrder[i])
    })
    
})


const cartItemsD = document.querySelector('.cartItemsD')

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
    
} else {
    ready()
}
let cart = JSON.parse(localStorage.getItem("CART")) || [];
function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = [...document.getElementsByClassName('add_cart')]
    

    
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)

   
}


    

function purchaseClicked() {
    alert('Thank you for your Order')
    var cartItems = document.getElementsByClassName('cartItems')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

let carts = JSON.parse(localStorage.getItem("CART")) || [];
updateCartTotal()

function addToCartClicked(event){
    var button = event.target, 
    shopItem = button.parentElement.parentElement, 
    title = shopItem.getElementsByClassName('item_title')[0].textContent,
    price = shopItem.getElementsByClassName('item_price')[0].textContent
    
    
    addItemToCart(title, price)
    updateCartTotal()
    
}


function addItemToCart( title, price){
    var cartRow = document.createElement('div')
    cartRow.classList.add('name')

    var cartItems = document.getElementsByClassName('cartItems')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    
   
    
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].textContent == title) {

            alert('This item is already added to the cart')
            return
        }
        cart.push({
            cartItemNames,
           
          });
    
    }

   
        var cartRowContents = `
        <div class="cart-item cart-column">
            <span class="cart-item-title">${title}</span>
        </div>

        <div class="carter">
            <span class="cart-price cart-column"> ${price}</span>
        </div>
        <div class="cart-quantity cart-column quantity">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger  material-symbols-outlined" type="button">delete</button>
        </div>
        
        
        `
        cartRow.innerHTML = cartRowContents
        cartItems.append(cartRow)
        cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
        cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
        
}


function updateCartTotal() {
    let cartItemContainer = document.getElementsByClassName('cartItems')[0]
    var cartRows = cartItemContainer.getElementsByClassName('name')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]

        
        var price =parseFloat(priceElement.textContent.replace(' ₱', ''))
        
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-prices')[0].innerText = ' ₱' + total

    localStorage.setItem("CART", JSON.stringify(cart));
}

