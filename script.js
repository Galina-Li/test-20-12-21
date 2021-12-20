const product = [
    { name: 'Apple AirPods', price: 169.00, ammont: 57 },
    { name: 'Sony WH1000XM3', price: 278.00, ammont: 24 },
    { name: 'Sony WF-1000XM3', price: 228.00, ammont: 11 },
    { name: 'Samsung Galaxy Buds', price: 140, ammont: 22 },
    { name: 'Sennheiser HD 450BT', price: 199.95, ammont: 30 },
    { name: 'JBL Reflect Flow', price: 149.95, ammont: 8 },
    { name: 'Sony WF-1000XM3', price: 224.00, ammont: 11 },
    { name: 'Sony WH-XB900N', price: 189.95, ammont: 30 },
    { name: 'Apple AirPods Pro', price: 249, ammont: 15 },
    { name: 'Beats Solo Pro', price: 269.95, ammont: 15 }
];
const table = document.querySelector('table')
product.forEach((obj) => {
    let tr = document.createElement('tr');
    table.append(tr);
    let name = document.createElement('td');
    tr.append(name);
    name.innerText = obj.name
    let price = document.createElement('td');
    tr.append(price);
    price.innerText = obj.price
    let ammont = document.createElement('td');
    tr.append(ammont);
    ammont.innerText = obj.ammont
})
let name = table.querySelector('th');
let prise = table.querySelector('.prise');
let ammont = table.querySelector('.ammount')

let order = null

name.addEventListener('click', (event) => {
    let sorted = product.sort((a, b) => a.name > b.name ? -1 : 1)
    if (order === "ASK") {
        order = "DESK"
        let sorted = product.sort((a, b) =>  a.name < b.name ? -1 : 1)
        let tr = document.querySelectorAll('table > :not(:first-child)')
        tr.forEach((row) => row.remove())
        sorted.forEach((el) => renderTable(el))
    }
    else {
        order = "ASK"
        let sorted = product.sort((a, b) => a.name > b.name ? -1 : 1)
        //let sorted = product.sort((a, b) =>  a.name < b.name ? -1 : 1)
        let tr = document.querySelectorAll('table > :not(:first-child)')
        tr.forEach(row => row.remove())
        sorted.forEach(el => renderTable(el))
    }
})
prise.addEventListener('click', (event) => {
    let sorted = product.sort((a, b) => a.price > b.price ? -1 : 1)
    if (order === "ASK") {
        order = "DESK"
        let sorted = product.sort((a, b) =>  a.price < b.price ? -1 : 1)
        let tr = document.querySelectorAll('table > :not(:first-child)')
        tr.forEach((row) => row.remove())
        sorted.forEach((el) => renderTable(el))
    }
    else {
        order = "ASK"
        let sorted = product.sort((a, b) => a.price > b.price ? -1 : 1)
        let tr = document.querySelectorAll('table > :not(:first-child)')
        tr.forEach(row => row.remove())
        sorted.forEach(el => renderTable(el))
    }
})
ammont.addEventListener('click', (event) => {
    //let sorted = product.sort((a, b) => a.ammont > b.ammont ? -1 : 1)

    if (order === "ASK") {
        order = "DESK"
        let sorted = product.sort((a, b) =>  a.ammont < b.ammont ? -1 : 1)
        console.log(sorted)
        let tr = document.querySelectorAll('table > :not(:first-child)')
        tr.forEach((row) => row.remove())
        sorted.forEach((el) => renderTable(el))
    }
    else {
        order = "ASK"
        let sorted = product.sort((a, b) => a.ammont > b.ammont ? -1 : 1)
        let tr = document.querySelectorAll('table > :not(:first-child)')
        tr.forEach(row => row.remove())
        sorted.forEach(el => renderTable(el))
    }
})
function renderTable(obj) {
    let tr = document.createElement('tr');
    table.append(tr);
    let name = document.createElement('td');
    tr.append(name);
    name.innerText = obj.name
    let price = document.createElement('td');
    tr.append(price);
    price.innerText = obj.price
    let ammont = document.createElement('td');
    tr.append(ammont);
    ammont.innerText = obj.ammont
}