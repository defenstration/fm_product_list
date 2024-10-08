const foodBtns = document.querySelectorAll(".food-btn")


const btnHTML = (btn, numberToAdd) => {
         btn.innerHTML = `
        <button class = "decrement-btn"></button>    
        <p class = "text-white">${numberToAdd}</p>
        <button class = "increment-btn"></button>`

        btn.addEventListener(("click"), (e) => {
            if (e.target.classList.contains("increment-btn")) {
                numberToAdd += 1
            } else if (e.target.classList.contains("decrement-btn")) {
                numberToAdd -= 1
            }

            btnHTML(btn, numberToAdd)
        
    })
}


foodBtns.forEach((btn) => {
    btn.addEventListener(("click"), () => {
        let numberToAdd = 0;
        btn.style.backgroundColor = "hsl(var(--clr-red))"
        btn.style.border = "2px solid hsl(var(--clr-red))"

        btnHTML(btn, numberToAdd)
    })
})

