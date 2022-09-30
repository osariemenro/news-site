let hasCollectionListShown = false
let hasOverlayToClickOffShown = true

const clickBodyRemovePopupHandler = (display, closeElement, popup) => {
    overlayClicksOffPops.style.display = display

    if(overlayClicksOffPops.style.display === "block") {
        overlayClicksOffPops.addEventListener("click", () => {
            overlayClicksOffPops.style.display = "none"
            closeElement.style.display = "none"
            
            if(popup === "collectionList") {
                hasCollectionListShown = false
            }
        })
    }
}

const showCollectionList = () => {
    if(hasCollectionListShown === false) {
        collectionListDisplay.style.display = "block"
        hasCollectionListShown = true

        clickBodyRemovePopupHandler("block", collectionListDisplay, "collectionList")
    }
    else {
        collectionListDisplay.style.display = "none"
        hasCollectionListShown = false

        clickBodyRemovePopupHandler("none", null, null)
    }
}

const collectionArr = []

const renderSelectedCollection = () => {   
    const listing = (listContainer) => {
        listContainer.forEach(list => {
            list.addEventListener("click", () => {
                const listIndex = collectionArr.indexOf(list.textContent)
    
                collectionArr.splice(listIndex, 1)
                loopAndRenderCollection()
            })
        })
    }
     
    const loopAndRenderCollection = () => {
        selectedCollectionContainer.innerHTML = ""

        collectionArr.forEach(collection => {
            let li = document.createElement("li")
            li.textContent = collection
    
            selectedCollectionContainer.appendChild(li)
        })
        const selectedCollectionList = selectedCollectionContainer.querySelectorAll("li")
        listing(selectedCollectionList)
    }
    loopAndRenderCollection()
    renderData()

}

collectionList.forEach(list => {
    list.addEventListener("click", () => {
        
        if(collectionArr.includes(list.textContent)) {
            return
        }

         if(collectionArr.length > 2) {
            return
        }

        collectionArr.push(list.textContent)
        renderSelectedCollection()
    })
})

addCollectionBtn.addEventListener("click", showCollectionList)