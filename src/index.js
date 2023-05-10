

fetch('http://localhost:3000/pups')
    .then(resp => resp.json())
    .then((data => main(data)))


function main(data){
    
    //create the additional elements 

    const infoloc = document.querySelector("#dog-info")
    const bigImg = document.createElement("img")
    bigImg.id = 'dog-info-img'
    const bigButton = document.createElement("button")
    bigButton.id = 'dog-info-button'
    const bigName = document.createElement("h2")
    bigName.id = 'dog-info-name'
    infoloc.append(bigImg,bigName,bigButton)
    
    //part 4 event listener added to the button element
    bigButton.addEventListener("click", () =>{
        if (bigButton.textContent === 'Good Dog!'){
            bigButton.textContent = 'Bad Dog!'
            console.log('good to bad')
        }
        else{
            bigButton.textContent = 'Good Dog!'
            console.log('bad to good')
        }
    })


    //add info to the dog bar
    for (val in data){
        addDog(data[val])
    }
}

function addDog(obj){
    console.log(obj)
    const dogInfo = {
        "id" : obj.id,
        "image" : obj.image,
        "isGoodDog" : obj.isGoodDog,
        "name" : obj.name
    }
    
    let dogBarLoc = document.createElement("span")    
    dogBarLoc.textContent = dogInfo.name
    dogBarLoc.addEventListener("click", () => addClick(dogInfo))    
    
    
    
    let x =  document.querySelector("#dog-bar")   
    x.appendChild(dogBarLoc)
}

function addClick(Dogobj){ //event listener function
    const infoloc = document.querySelector("#dog-info") // where we will add the info 
   
    bigImg = document.querySelector("#dog-info-img")
    bigImg.src = Dogobj.image
    
    bigName = document.querySelector("#dog-info-name")
    bigName.textContent = Dogobj.name

    bigButton = document.querySelector('#dog-info-button')
    bigButton.textContent = (Dogobj.isGoodDog) ? 'Good Dog!':'Bad Dog!'
    
    //part 4 First click works, 
    //Each time we swap we are adding another event listener. that why the even ones are cancelling out. while the odd ones show the change.
    //this is probably due to us creating the element beforehand
        //if instead we make the elements in the loop, we would then need to delete them to prevent the page form just adding more doggo elements

    //Can we clear an event listener if it exists then?
    //bigButton.removeEventListener("click", change())

    //why not just place the event listener outside of a loop.... 
    //Already have the element

    // bigButton.addEventListener("click", () =>{
    //     if (bigButton.textContent === 'Good Dog!'){
    //         bigButton.textContent = 'Bad Dog!'
    //         console.log('good to bad')
    //     }
    //     else{
    //         bigButton.textContent = 'Good Dog!'
    //         console.log('bad to good')
    //     }
    // })
}