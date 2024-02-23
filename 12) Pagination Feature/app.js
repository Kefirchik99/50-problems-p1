const items = Array.from({ length: 30 }, (_, index) => `Item ${index + 1}`)

function displayItems(pageNumber) {
    const itemsPerPage = 5
    const startIndex = (pageNumber - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const list = document.getElementById('items')
    const itemsToShow = items.slice(startIndex, endIndex).join('<br>')
    list.innerHTML = itemsToShow
}

function updateNavigation(currentPage) {
    const pages = Math.ceil(items.length / 5)
    const prevBtn = document.getElementById('prevBtn')
    const nextBtn = document.getElementById('nextBtn')
    if (currentPage === 1) {
        prevBtn.disabled = true
    } else {
        prevBtn.disabled = false
    }

    if (currentPage === pages) {
        nextBtn.disabled = true
    } else {
        nextBtn.disabled = false
    }
    for (let i = 1; i <= pages; i++) {
        let pageBtn = document.getElementById(`pages${i}`)
        if (i === currentPage) {
            pageBtn.classList.add('active')
        } else {
            pageBtn.classList.remove('active')
        }
    }
}

function createPageButtons() {
    const navigationContainer = document.querySelector('main section')
    const totalPages = Math.ceil(items.length / 5)


    navigationContainer.innerHTML = '<div id="items"></div><br /><button type="button" id="prevBtn">Previous</button><br /><button type="button" id="nextBtn">Next</button>';

    const prevBtn = document.getElementById('prevBtn')
    const nextBtn = document.getElementById('nextBtn')


    prevBtn.addEventListener('click', function () {
        if (currentPage > 1) {
            currentPage--;
            displayItems(currentPage)
            updateNavigation(currentPage)
        }
    })

    nextBtn.addEventListener('click', function () {
        if (currentPage < totalPages) {
            currentPage++;
            displayItems(currentPage)
            updateNavigation(currentPage)
        }
    })


    for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.textContent = i
        pageBtn.id = `page${i}`
        pageBtn.addEventListener('click', function () {
            currentPage = i
            displayItems(currentPage)
            updateNavigation(currentPage)
        })
        navigationContainer.appendChild(pageBtn)
    }
}

let currentPage = 1

document.addEventListener('DOMContentLoaded', function () {
    createPageButtons()
    displayItems(currentPage)
    updateNavigation(currentPage)
})
