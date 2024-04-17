'use strict'

const resultEle = document.querySelector('#result')
const nameEle = document.createElement('p')
const hexEle = document.createElement('p')

nameEle.setAttribute('id', 'name')
hexEle.setAttribute('id', 'hex')


function fetchData() {
    fetch('https://unpkg.com/color-name-list@10.21.0/dist/colornames.bestof')
        .then(response => { return response.json(); })
        // fetch and parse data
        .then(parsedData => {
            // log parsed data
            const parsedLength = Object.keys(parsedData).length;
            let random = Math.round(Math.random() * parsedLength)
            // caps random to object length

            resultEle.appendChild(nameEle);
            resultEle.appendChild(hexEle);

            nameEle.innerText = parsedData[random].name
            hexEle.innerText = parsedData[random].hex
            document.body.style.background = hexEle.textContent
        })
}