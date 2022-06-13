const firstBtn = document.getElementById("first-btn")
const secondBtn = document.getElementById("second-btn")
const thirdBtn = document.getElementById("third-btn")

let displayOutput = document.getElementById("display-output")
let allItems = []
let allNum = []
let deleteBtn = document.getElementById("delete-btn")
let totalAmount = 0
let displaytotalAmount = document.getElementById("display-total-amount")
let singleDelete = document.getElementById("single-delete")

let itemOne = `             <div><h3>Wash Car</h3></div>
                            <div><h5 id="single-delete" >Remove</h5></div>
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



firstBtn.addEventListener("click", function(){
    displayOutput.innerHTML = ""    
    allItems.push(itemOne)
    numAmount1 = 10
    totalAmount += numAmount1
    allNum.push("10")
    display()    
    adding()
  
})


secondBtn.addEventListener("click", function(){
    displayOutput.innerHTML = ""
     allItems.push(itemTwo)
    let numAmount2 = 20
    totalAmount += numAmount2
    display()    
    adding()
    
     
})


thirdBtn.addEventListener("click", function(){
    displayOutput.innerHTML = ""    
     allItems.push(itemThree)
     let numAmount3 = 30
      totalAmount += numAmount3
    display()        
    adding()
    
    
})





function display(){
    for (let i = 0; i < allItems.length; i++)
    displayOutput.innerHTML += allItems[i]
}






function adding(){
displaytotalAmount.innerHTML = "$" + totalAmount
}




deleteBtn.addEventListener("click", function(){
    allItems = []
    numAmount = 0
    totalAmount = 0
    displaytotalAmount.innerHTML = "$0"
    displayOutput.innerHTML = ""
    console.log(allItems)
})