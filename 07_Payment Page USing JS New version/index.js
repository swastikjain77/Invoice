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


let itemOne = `             <div><h3>Wash Car</h3></div>
                            <div><h5 id="r1"><button onclick="r1Fun()">Remove</button></h5></div>
                            <div><h3><span>$</span>10</h3></div>
                        `
    // console.log(itemOne)
let itemTwo = `             <div><h3>Mow Lawn</h3></div>
                            <div><h5 id="single-delete" >Remove</h5></div>
                            <div><h3><span>$</span>20</h3></div>
                        `
    // console.log(itemTwo)
let itemThree = `             <div><h3>Pull Weeds</h3></div>
                            <div><h5 id="single-delete" >Remove</h5></div>
                            <div><h3><span>$</span>30</h3></div>
                        `
    // console.log(itemThree)


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



undoBtn.addEventListener("click", function() {



    if (itemOne === allItems[0] || itemOne === allItems[1] || itemOne === allItems[2]) {

        totalAmount = totalAmount - 10
        displaytotalAmount.innerHTML = "$" + totalAmount
        allItems.shift()
        displayOutput.innerHTML = allItems


    } else if (itemTwo === allItems[0] || itemTwo === allItems[1] || itemTwo === allItems[2]) {

        totalAmount = totalAmount - 20
        displaytotalAmount.innerHTML = "$" + totalAmount
        allItems.shift()
        displayOutput.innerHTML = allItems

    } else if (itemThree === allItems[0] || itemThree === allItems[1] || itemThree === allItems[2]) {

        totalAmount = totalAmount - 30
        displaytotalAmount.innerHTML = "$" + totalAmount
        allItems.shift()
        displayOutput.innerHTML = allItems

    } else if (allItems === []) {

        totalAmount = 0
        displayOutput.innerHTML = allItems
        displaytotalAmount.innerHTML = "$" + totalAmount


    } else {
        console.log("f")

    }



})



function display() {
    for (let i = 0; i < allItems.length; i++) {

        displayOutput.innerHTML += allItems[i]

    }
}


function adding() {
    displaytotalAmount.innerHTML = "$" + totalAmount
}




deleteBtn.addEventListener("click", function() {
    allItems = []
    numAmount = 0
    totalAmount = 0
    displaytotalAmount.innerHTML = "$0"
    displayOutput.innerHTML = ""
    console.log(allItems)
})




function r1Fun() {


    if (itemOne === allItems[0]) {

        console.log("remove 0")





    } else if (itemOne === allItems[1]) {

        console.log("remove 1")

    } else if (itemOne === allItems[2]) {

        console.log("remove 2")

    } else {

    }


}