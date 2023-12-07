// const cont =  document.querySelector(".container")
const image = document.querySelector("img")
function fetchData(){
    fetch("https://dog.ceo/api/breeds/image/random")
        .then((res) =>{
            return res.json()
        }).then((data) =>{
            image.src = data.message
        //     console.log(data)
        //     createCard(data)
        // })
})
}
fetchData()
 function addTofav(){
    localStorage.setItem("imagevalue",image.src)
 }
 function seeTofav(){
    image.src = localStorage.getItem("imagevalue")
 }

// fetchData()


// function createCard(data) {
//         const image= document.createElement("img")
//         div.classList.add(`card`)
//         div.innerHTML = `
    
//         `


//         cont.appendChild(div)

//     })
// }

    