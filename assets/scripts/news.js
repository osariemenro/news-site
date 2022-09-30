let newsCollectionType = 'Apple'
let period = "2022-09-29"
let sortBy = "popularity"
let apiKey = "ebd3d03ab91248858a11b08b43483f22"

const fetchData = (newsType, period, dataGotten) => {
    const url = `https://newsapi.org/v2/everything?q=${newsType}&from=${period}&sortBy=popularity&apiKey=${apiKey}`
    const req = new Request(url)
    
    fetch(req)
    .then(res => {
        res.json()
    })
    .then(data => {
        dataGotten = data
    })
}

let col1Data 
let col2Data 
let col3Data 
const renderData = (autoSetPeriod) => {
    collectionArr.forEach(collection => {
        if(collection.includes("Apple")) {
            fetchData("apple", autoSetPeriod, col1Data)
        }
    })
}