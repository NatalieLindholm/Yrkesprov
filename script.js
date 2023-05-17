let modal = document.querySelector("#myModal")
let basket = document.querySelector("#basket")
let closeBasket = document.querySelector("#close")

// When customer clicks on basket button, the modal pops up
basket.onclick = function () {
    modal.style.display = "block"

    // Gets an array with the "produkts" from local storage and if theres nothing saved in local storage returns an empty array (JSON.parse converts a string into a Javascript object since you can only store strings in localstorage)
    const imgArray = JSON.parse(localStorage.getItem("imgArray")) || []

    const itemsClicked = document.querySelector("#itemsClicked")

    //Displays the produkts in the basket from the array
    itemsClicked.innerHTML = imgArray.map(image => {
        return `<img src="${image}" style="height: 200px; border-radius: 10px; margin: 10px 5px 10px 5px;">`
    }).join("")
}

closeBasket.onclick = function () {
    modal.style.display = "none"
}


function deleteProdukt() {
    const imgArray = JSON.parse(localStorage.getItem("imgArray")) || []

    //Removes the last item in the array
    imgArray.splice(-1, 1)

    // Stores an item in the array in localstorage as a string
    localStorage.setItem("imgArray", JSON.stringify(imgArray))

    const itemsClicked = document.querySelector("#itemsClicked")
    itemsClicked.innerHTML = imgArray.map(image => {
        return `<img src="${image}" style="height: 200px; border-radius: 10px; margin: 10px 5px 10px 5px;">`
    }).join("")
}

function buyClick(image) {
    const imgArray = JSON.parse(localStorage.getItem("imgArray")) || []
    imgArray.push(image)
    localStorage.setItem("imgArray", JSON.stringify(imgArray))
}