const foodBtns = document.querySelectorAll(".food-btn")
const itemWrapper = document.getElementById("item-wrapper")





const items = [
    {
        name: "Waffle with Berries",
        type: "Waffle",
        price: "$6.50",
        imgDesktop: "/product-list-with-cart-main/assets/images/image-waffle-desktop.jpg",
        imgMobile: "/product-list-with-cart-main/assets/images/image-waffle-mobile.jpg",
        imgTablet: "/product-list-with-cart-main/assets/images/image-waffle-tablet.jpg",
        imgThumbnail: "/product-list-with-cart-main/assets/images/image-waffle-thumbnail.jpg",
    },
    {
        name: "Vanilla Bean Crème Brûléee",
        type: "Crème Brûlée",
        price: "$7.00",
        imgDesktop: "/product-list-with-cart-main/assets/images/image-creme-brulee-desktop.jpg",
        imgMobile: "/product-list-with-cart-main/assets/images/image-creme-brulee-mobile.jpg",
        imgTablet: "/product-list-with-cart-main/assets/images/image-creme-brulee-tablet.jpg",
        imgThumbnail: "/product-list-with-cart-main/assets/images/image-creme-brulee-thumbnail.jpg",
    },
    {
        name: "Macaron Mix of Five",
        type: "Macaron",
        price: "$8.00",
        imgDesktop: "/product-list-with-cart-main/assets/images/image-macaron-desktop.jpg",
        imgMobile: "/product-list-with-cart-main/assets/images/image-macaron-mobile.jpg",
        imgTablet: "/product-list-with-cart-main/assets/images/image-macaron-tablet.jpg",
        imgThumbnail: "/product-list-with-cart-main/assets/images/image-macaron-thumbnail.jpg",
    },
    {
        name: "Classic Tiramisu",
        type: "Tiramisu",
        price: "$5.50",
        imgDesktop: "/product-list-with-cart-main/assets/images/image-tiramisu-desktop.jpg",
        imgMobile: "/product-list-with-cart-main/assets/images/image-tiramisu-mobile.jpg",
        imgTablet: "/product-list-with-cart-main/assets/images/image-tiramisu-tablet.jpg",
        imgThumbnail: "/product-list-with-cart-main/assets/images/image-tiramisu-thumbnail.jpg",
    },
    {
        name: "Pistacio Baklava",
        type: "Baklava",
        price: "$4.00",
        imgDesktop: "/product-list-with-cart-main/assets/images/image-baklava-desktop.jpg",
        imgMobile: "/product-list-with-cart-main/assets/images/image-baklava-mobile.jpg",
        imgTablet: "/product-list-with-cart-main/assets/images/image-baklava-tablet.jpg",
        imgThumbnail: "/product-list-with-cart-main/assets/images/image-baklava-thumbnail.jpg",
    },
    {
        name: "Lemon Meringue Pie",
        type: "Pie",
        price: "$5.00",
        imgDesktop: "/product-list-with-cart-main/assets/images/image-meringue-desktop.jpg",
        imgMobile: "/product-list-with-cart-main/assets/images/image-meringue-mobile.jpg",
        imgTablet: "/product-list-with-cart-main/assets/images/image-meringue-tablet.jpg",
        imgThumbnail: "/product-list-with-cart-main/assets/images/image-meringue-thumbnail.jpg",
    },
    {
        name: "Red Velvet Cake",
        type: "Cake",
        price: "$4.50",
        imgDesktop: "/product-list-with-cart-main/assets/images/image-cake-desktop.jpg",
        imgMobile: "/product-list-with-cart-main/assets/images/image-cake-mobile.jpg",
        imgTablet: "/product-list-with-cart-main/assets/images/image-cake-tablet.jpg",
        imgThumbnail: "/product-list-with-cart-main/assets/images/image-cake-thumbnail.jpg",
    },
    {
        name: "Salted Caramel Brownie",
        type: "Brownie",
        price: "$4.50",
        imgDesktop: "/product-list-with-cart-main/assets/images/image-brownie-desktop.jpg",
        imgMobile: "/product-list-with-cart-main/assets/images/image-brownie-mobile.jpg",
        imgTablet: "/product-list-with-cart-main/assets/images/image-brownie-tablet.jpg",
        imgThumbnail: "/product-list-with-cart-main/assets/images/image-brownie-thumbnail.jpg",
    },
    {
        name: "Vanilla Panna Cotta",
        type: "Panna Cotta",
        price: "$6.50",
        imgDesktop: "/product-list-with-cart-main/assets/images/image-panna-cotta-desktop.jpg",
        imgMobile: "/product-list-with-cart-main/assets/images/image-panna-cotta-mobile.jpg",
        imgTablet: "/product-list-with-cart-main/assets/images/image-panna-cotta-tablet.jpg",
        imgThumbnail: "/product-list-with-cart-main/assets/images/image-panna-cotta-thumbnail.jpg",
    },

]


items.forEach((item) => {
    itemWrapper.innerHTML += `
        <div class = "item-card">
            <img class = "image" src = "${item.imgDesktop}">  
            <button class = "btn food-btn flex">
                <img src = "/product-list-with-cart-main/assets/images/icon-add-to-cart.svg" alt = "Add to cart icon">Add to Cart</button>
            <h3 class = "type">${item.type}</h3>
            <h4 class = "name">${item.name}</h4>
            <p class = "price">${item.price}</p>
        <div>
    `
})


const btnHTML = (btn, numberToAdd) => {
         btn.innerHTML = `
        <button class = "decrement-btn text-white flex">-</button>    
        <p class = "text-white">${numberToAdd}</p>
        <button class = "increment-btn text-white flex">+</button>`

        btn.addEventListener(("click"), (e) => {
            if (e.target.classList.contains("increment-btn")) {
                numberToAdd += 1
            } else if (e.target.classList.contains("decrement-btn")) {
                if (numberToAdd > 0) {
                    numberToAdd -= 1
                }               
            }

            btnHTML(btn, numberToAdd)
        
    })
}


foodBtns.forEach((btn) => {
    btn.addEventListener(("click"), () => {
        let numberToAdd = 0;
        btn.style.backgroundColor = "hsl(var(--clr-red))"
        btn.style.border = "2px solid hsl(var(--clr-red))"
        btn.style.justifyContent = "space-between"
        btn.parentElement.firstElementChild.style.border = "2px solid hsl(var(--clr-red))"

        btnHTML(btn, numberToAdd)
    })
})

