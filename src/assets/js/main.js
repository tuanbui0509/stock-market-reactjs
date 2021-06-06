// ceil,tc,floor,lower,higher
const colors = ['rgb(255, 37, 255)', 'rgb(255, 217, 0)',
    'rgb(30, 238, 238)', 'rgb(255, 0, 23)', 'rgb(11, 223, 57)']



function changeColor(numStock, tc, floor, ceil) {
    if (parseFloat(numStock) === parseFloat(ceil))
        return colors[0];
    else if (parseFloat(numStock) === parseFloat(tc))
        return colors[1];
    else if (parseFloat(numStock) === parseFloat(floor))
        return colors[2];
    else if (parseFloat(numStock) < parseFloat(tc))
        return colors[3];
    else if (parseFloat(numStock) > parseFloat(tc))
        return colors[4];
}


let stocks = document.querySelectorAll('.stock');


for (let i = 0; i < stocks.length; i++) {
    let line_stock = stocks[i].getElementsByTagName('td');
    let j = 0;
    for (; j < line_stock.length; j++) {
        let numStock = line_stock[j].innerHTML;
        let tc = line_stock[3].innerHTML;
        let ceil = line_stock[2].innerHTML;
        let floor = line_stock[1].innerHTML;
        if (j === 4 || j === 6 || j === 8 || j === 10 || j === 12 || j === 14 || j === 16) {
            let strColor = changeColor(numStock, tc, floor, ceil);
            line_stock[j].style.color = strColor;
            line_stock[j + 1].style.color = strColor;
            if (j === 10) line_stock[0].style.color = strColor;
        }
    }
}


const showMenuTheme = () => {
    let menuThemes = document.querySelector('.header__right-theme-list');
    console.log(menuThemes.style.display)
    if (menuThemes.style.display === 'block') {
        menuThemes.style.display = 'none';
    }
    else {
        menuThemes.style.display = 'block';
    }
}

const showMenuAccount = () => {
    let menuAccounts = document.querySelector('.header__right-account-list');
    console.log(menuAccounts)
    // menuAccounts.style.display = 'block';
    if (menuAccounts.style.display === 'block') {
        menuAccounts.style.display = 'none';
    }
    else {
        menuAccounts.style.display = 'block';
    }
}

// modal order matching

const showModalMatching = () => {
    let my_modal = document.getElementById('my-modal');
    console.log(my_modal)
    my_modal.style.visibility = 'visible';
    my_modal.style.opacity = 1;
}

const closeForm = () => {
    let my_modal = document.getElementById('my-modal');
    console.log(my_modal)
    my_modal.style.visibility = 'hidden';
    my_modal.style.opacity = 0;
}

const confirmForm = () => {
    let my_modal = document.getElementById('confirm-modal');
    console.log(my_modal)
    my_modal.style.visibility = 'visible';
    my_modal.style.opacity = 1;
}

const closeFormConfirm = () => {
    let my_modal = document.getElementById('confirm-modal');
    console.log(my_modal)
    my_modal.style.visibility = 'hidden';
    my_modal.style.opacity = 0;
}