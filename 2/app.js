let table = document.querySelector('#table1')
for (let row =1; row <= 10; row++) {
    let tr = document.createElement('tr');
    for (let col = 1; col <= 10; col++) {
        let td = document.createElement('td');
        td.textContent = row * col;
        tr.appendChild(td);        
}
table.appendChild(tr);
}