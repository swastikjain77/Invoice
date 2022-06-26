const firstBtn = document.getElementById("first-btn")
const secondBtn = document.getElementById("second-btn")
const thirdBtn = document.getElementById("third-btn")

let displayOutput = document.getElementById("display-output")
let allItems = []
let hi = "Hi";
let allNum = []
let deleteBtn = document.getElementById("delete-btn")
let totalAmount = 0
let displaytotalAmount = document.getElementById("display-total-amount")
let singleDelete = document.getElementById("single-delete")
let undoBtn = document.getElementById("undo-btn")

let r1El = document.getElementById("r1")



let itemOne = `

<div class="new_div">
<div>
    <h3>Wash Car</h3>
</div>
<div>
    <button class="remove_btn" onclick="r1Fun()" >Remove</button>
</div>
<div>
    <h3> <span>$</span>10</h3>
</div>
</div>

`

let itemTwo = `

<div class="new_div">
<div>
    <h3>Mow Lawn</h3>
</div>
<div>
    <button class="remove_btn"onclick="r2Fun()" >Remove</button>
</div>
<div>
    <h3> <span>$</span>20</h3>
</div>
</div>

`


let itemThree = `

<div class="new_div">
<div>
    <h3>Pull Weed</h3>
</div>
<div>
    <button class="remove_btn"onclick="r3Fun()" >Remove</button>
</div>
<div>
    <h3> <span>$</span>30</h3>
</div>
</div>

`


// let allItems2 = {

//     i1: ["Wash Car", "10"],
//     i2: ["Mow Lawn", "20"],
//     i3: ["Pull Weeds", "30"]

// }

// console.log(allItems2.i1[0], allItems2.i1[1])
// console.log(allItems2.i2[0], allItems2.i2[1])
// console.log(allItems2.i3[0], allItems2.i3[1])











firstBtn.addEventListener("click", function() {

    displayOutput.innerHTML = ""
    if (itemOne === allItems[0] || itemOne === allItems[1] || itemOne === allItems[2]) {

        console.log("already added")
        display()

    } else {
        console.log("added")
        allItems.push(itemOne)
        numAmount1 = 10
        totalAmount += numAmount1
        allNum.push("10")
        display()
        adding()
    }


})


secondBtn.addEventListener("click", function() {
    displayOutput.innerHTML = ""

    if (itemTwo === allItems[0] || itemTwo === allItems[1] || itemTwo === allItems[2]) {
        console.log("already added")
        display()

    } else {
        console.log("added")
        allItems.push(itemTwo)
        let numAmount2 = 20
        totalAmount += numAmount2
        display()
        adding()
    }




})


thirdBtn.addEventListener("click", function() {

    displayOutput.innerHTML = ""

    if (itemThree === allItems[0] || itemThree === allItems[1] || itemThree === allItems[2]) {
        console.log("already added")
        display()

    } else {
        console.log("added")
        allItems.push(itemThree)
        let numAmount3 = 30
        totalAmount += numAmount3
        display()
        adding()

    }


})



// undoBtn.addEventListener("click", function() {



//     if (itemOne === allItems[0] || itemOne === allItems[1] || itemOne === allItems[2]) {

//         totalAmount = totalAmount - 10
//         displaytotalAmount.innerHTML = "$" + totalAmount
//         allItems.shift()
//         displayOutput.innerHTML = allItems


//     } else if (itemTwo === allItems[0] || itemTwo === allItems[1] || itemTwo === allItems[2]) {

//         totalAmount = totalAmount - 20
//         displaytotalAmount.innerHTML = "$" + totalAmount
//         allItems.shift()
//         displayOutput.innerHTML = allItems

//     } else if (itemThree === allItems[0] || itemThree === allItems[1] || itemThree === allItems[2]) {

//         totalAmount = totalAmount - 30
//         displaytotalAmount.innerHTML = "$" + totalAmount
//         allItems.shift()
//         displayOutput.innerHTML = allItems

//     } else if (allItems === []) {

//         totalAmount = 0
//         displayOutput.innerHTML = allItems
//         displaytotalAmount.innerHTML = "$" + totalAmount


//     } else {
//         console.log("f")

//     }



// })



function display() {
    for (let i = 0; i < allItems.length; i++) {

        displayOutput.innerHTML += allItems[i]

    }
}



function adding() {
    displaytotalAmount.innerHTML = "$" + totalAmount
}




deleteBtn.addEventListener("click", function() {

    if (totalAmount) {
        allItems = []
        numAmount = 0
        totalAmount = 0
        displaytotalAmount.innerHTML = "$0"
        displayOutput.innerHTML = ""
        console.log(allItems)

        document.getElementById('message').innerHTML = "Successfully Send"


        setTimeout(() => {

            document.getElementById('message').innerHTML = "Invoice creator"

        }, 4000);
    } else {

    }










})




function r1Fun() {


    if (itemOne === allItems[0]) {

        console.log("YES")
        console.log(allItems.splice(0, 1))
        displayOutput.innerHTML = allItems
        totalAmount -= 10
        displaytotalAmount.innerHTML = totalAmount
    } else if ((itemOne === allItems[1])) {
        console.log("YES")
        console.log(allItems.splice(1, 1))
        displayOutput.innerHTML = allItems
        totalAmount -= 10
        displaytotalAmount.innerHTML = totalAmount
    } else if ((itemOne === allItems[2])) {
        console.log("YES")
        console.log(allItems.splice(2, 1))
        displayOutput.innerHTML = allItems
        totalAmount -= 10
        displaytotalAmount.innerHTML = totalAmount
    } else {
        console.log("NO")

    }

}



function r2Fun() {


    if (itemTwo === allItems[0]) {

        console.log("YES")
        console.log(allItems.splice(0, 1))
        displayOutput.innerHTML = allItems
        totalAmount -= 20
        displaytotalAmount.innerHTML = totalAmount
    } else if ((itemTwo === allItems[1])) {
        console.log("YES")
        console.log(allItems.splice(1, 1))
        displayOutput.innerHTML = allItems
        totalAmount -= 20
        displaytotalAmount.innerHTML = totalAmount
    } else if ((itemTwo === allItems[2])) {
        console.log("YES")
        console.log(allItems.splice(2, 1))
        displayOutput.innerHTML = allItems
        totalAmount -= 20
        displaytotalAmount.innerHTML = totalAmount
    } else {
        console.log("NO")

    }

}

function r3Fun() {


    if (itemThree === allItems[0]) {

        console.log("YES")
        console.log(allItems.splice(0, 1))
        displayOutput.innerHTML = allItems
        totalAmount -= 30
        displaytotalAmount.innerHTML = totalAmount
    } else if ((itemThree === allItems[1])) {
        console.log("YES")
        console.log(allItems.splice(1, 1))
        displayOutput.innerHTML = allItems
        totalAmount -= 30
        displaytotalAmount.innerHTML = totalAmount
    } else if ((itemThree === allItems[2])) {
        console.log("YES")
        console.log(allItems.splice(2, 1))
        displayOutput.innerHTML = allItems
        totalAmount -= 30
        displaytotalAmount.innerHTML = totalAmount
    } else {
        console.log("NO")

    }

}