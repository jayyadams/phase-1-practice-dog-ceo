// console.log('%c HI', 'color: firebrick')
fetch("https://dog.ceo/api/breeds/image/random/4")
    .then((resp) => resp.json())
    .then((data) => renderImgs(data.message))

fetch("https://dog.ceo/api/breeds/list/all")
    .then((resp) => resp.json())
    .then((data) => { 
        renderBreeds(Object.keys(data.message))
        filterBreeds(Object.keys(data.message))
       })


function renderImgs(urlArr){
    // console.log(urlArr)

    const divForImgs = document.querySelector('#dog-image-container')
    urlArr.forEach((url) => {

        // console.log(url)

        const img = document.createElement('img')
        img.src = url
        divForImgs.append(img)
    })
}

function renderBreeds(breedArr) {
    // console.log(breedArr)
    const ulForBreeds = document.querySelector('#dog-breeds')
    // console.log(ulForBreeds)
    breedArr.forEach((breed) => {
        // console.log(breed)

        const li = document.createElement('li')
        li.textContent = breed

        //click event
        li.addEventListener('click', (e) => {
            // console.log(e.target)
            e.target.style.color = "pink"
        })

        ulForBreeds.appendChild(li)
    })
}

//get all dog breeds
//filter dog breeds based on dropdown letter (change event?)
//render filtered dog breeds to that UL

function filterBreeds(breedArr) {

    // console.log(breedArr)
    const dropdown = document.querySelector('#breed-dropdown')
    // console.log(dropdown)

    dropdown.addEventListener('change', (e) => {
        // console.log(e.target.value)
        // breedArr.filter((breed) => console.log(breed))
        const filteredBreeds = breedArr.filter((breed) => {
            return breed.startsWith(e.target.value)
        })

        const ul = document.querySelector('#dog-breeds')
        ul.textContent = ""
        // console.log(filteredBreeds)
        renderBreeds(filteredBreeds)
    })
}