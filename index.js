
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

console.log(saveEl)

function increment(){
    //count = count + 1
    count += 1
    countEl.textContent = count
}

function save(){

    let countstr = count + " - "

    saveEl.textContent += countstr 

    

    console.log(count)

    // countEl.textContent = 0

    // count = 0

}
//console.log("Lets count people on the subway!")
