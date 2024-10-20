function changeColor(){
    let r = Math.round(Math.random() * 255)
    let g = Math.round(Math.random() * 255)
    let b = Math.round(Math.random() * 255)
    return `rgb(${r}, ${g}, ${b})`
}
const flexCountries = document.getElementsByClassName('flex-countries')
const startWith = document.getElementById('start-with')
const searchWord = document.getElementById('search-word')
const input = document.getElementsByTagName('input')
const span = document.getElementsByTagName('span')
const sort =document.getElementById('a-z')
let isSorted = false
let letters = ''
let e = ''
let countryStartFiltred = []

for (country of countries){
    const countryBlock = document.createElement('div')
    countryBlock.textContent = country
    countryBlock.className = 'country-block'
    flexCountries[0].appendChild(countryBlock)
}

function handleInputStartWith() {
    flexCountries[0].innerHTML = ''
    letters = input[0].value
    if (letters === ''){
        span[0].style.display = 'none'
        for (country of countries){
            const countryBlock = document.createElement('div')
            countryBlock.textContent = country
            countryBlock.className = 'country-block'
            flexCountries[0].appendChild(countryBlock)
        }
        
    }
    else{
        span[0].style.display = 'inline'
        console.log(letters)
        countryStartFiltred = countries.filter((country) => country.toUpperCase().startsWith(letters.toUpperCase()))
        span[0].textContent = 'Countries start with '
        const letter = document.createElement('span')
        letter.textContent = letters
        letter.style.color = changeColor()
        span[0].appendChild(letter)
        const are = document.createElement('span')
        are.textContent = ' are '
        span[0].appendChild(are)
        const numberOf = document.createElement('span')
        numberOf.textContent = `${countryStartFiltred.length}`
        numberOf.style.color = changeColor()
        span[0].appendChild(numberOf)
        for (country of countryStartFiltred){
            const countryBlock = document.createElement('div')
            countryBlock.textContent = country
            countryBlock.className = 'country-block'
            flexCountries[0].appendChild(countryBlock)
        }
    }
}

function handleInputSearchWord() {
    flexCountries[0].innerHTML = ''
    letters = input[0].value
    if (letters === ''){
        span[0].style.display = 'none'
        for (country of countries){
            const countryBlock = document.createElement('div')
            countryBlock.textContent = country
            countryBlock.className = 'country-block'
            flexCountries[0].appendChild(countryBlock)
        }
    }
    else{ 
        span[0].style.display = 'inline'
        console.log(letters)
        countryStartFiltred = countries.filter((country) => country.toUpperCase().includes(letters.toUpperCase()))
        span[0].textContent = 'Countries contain '
        const letter = document.createElement('span')
        letter.textContent = letters
        letter.style.color = changeColor()
        span[0].appendChild(letter)
        const are = document.createElement('span')
        are.textContent = ' are '
        span[0].appendChild(are)
        const numberOf = document.createElement('span')
        numberOf.textContent = `${countryStartFiltred.length}`
        numberOf.style.color = changeColor()
        span[0].appendChild(numberOf)
        for (country of countryStartFiltred){
            const countryBlock = document.createElement('div')
            countryBlock.textContent = country
            countryBlock.className = 'country-block'
            flexCountries[0].appendChild(countryBlock)
        }
    }
}

startWith.addEventListener('click', r =>{ 
    startWith.style.backgroundColor = 'rgb(59, 1, 59)'
    searchWord.style.backgroundColor = 'purple'
    input[0].removeEventListener('input', handleInputSearchWord)
    input[0].addEventListener('input', handleInputStartWith)
    letters = input[0].value
    handleInputSearchWord()
})

searchWord.addEventListener('click', r =>{
    searchWord.style.backgroundColor = 'rgb(59, 1, 59)'
    startWith.style.backgroundColor = 'purple'
    input[0].removeEventListener('input', handleInputStartWith)
    input[0].addEventListener('input', handleInputSearchWord)
    letters = input[0].value
    handleInputSearchWord()
})

sort.addEventListener('click', e => {
    if(isSorted === false){
        const needToSortCountry =document.getElementsByClassName('country-block')
        let countryBeSort = []
        for(country of needToSortCountry){
            countryBeSort.push(country.textContent)
        }
        const sortedCountries = countryBeSort.sort((a, b) => b.localeCompare(a))
        flexCountries[0].innerHTML = ''
        for (country of sortedCountries){
            const countryBlock = document.createElement('div')
            countryBlock.textContent = country
            countryBlock.className = 'country-block'
            flexCountries[0].appendChild(countryBlock)
        }
        sort.textContent = String.fromCodePoint(0x1F447);
        isSorted = true
    }
    else{
        const needToSortCountry =document.getElementsByClassName('country-block')
        let countryBeSort = []
        for(country of needToSortCountry){
            countryBeSort.push(country.textContent)
        }
        const sortedCountries = countryBeSort.sort((a, b) => a.localeCompare(b))
        flexCountries[0].innerHTML = ''
        for (country of sortedCountries){
            const countryBlock = document.createElement('div')
            countryBlock.textContent = country
            countryBlock.className = 'country-block'
            flexCountries[0].appendChild(countryBlock)
        }
        isSorted = false
        sort.textContent = String.fromCodePoint(0x1F446);
    }
})
