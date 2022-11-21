
// delivery date - starts at tommorow

const date = document.querySelector("#delDate");

let today = moment().format('yyyy-MM-DD');
let tommorow = moment().add(1, 'days').format('yyyy-MM-DD');

date.value = tommorow;
date.min = tommorow;


// gift section maximum 2 options

let group = document.querySelectorAll('input[type="checkbox"]');
function checkboxlimit(checkgroup, limit) {
    for (var i = 0; i < checkgroup.length; i++) {
        checkgroup[i].onclick = function () {
            var checkedcount = 0
            for (var i = 0; i < checkgroup.length; i++)
                checkedcount += (checkgroup[i].checked) ? 1 : 0
            if (checkedcount > limit) {
                this.checked = false
            }
        }
    }
}

checkboxlimit(group, 2);


/// button "make order" activation 

const form = document.forms.deliveryForm;
const button = document.querySelector('input[type=submit]');
const inputsText = form.querySelectorAll('input[type=text]');


const nameInput = form.name;
const surnameInput = form.surname;
const paymentInput = form.payment;
const deliveryInput = form.delDate;
const houseInput = form.houseNum;
const adressInput = form.adress;
const flatInput = form.flatNum;




nameInput.oninput = () => {
    if (nameInput.checkValidity() == true) {
        nameInput.classList.remove('inputBad')
        nameInput.classList.add('inputGood')
    } else if (nameInput.checkValidity() == false) {
        nameInput.classList.add('inputBad')
    }
}




for (let i = 0; i < form.length; i++) {
    form[i].oninput = () => {
        if (form[i].checkValidity() == true) {
            form[i].classList.remove('inputBad')
            form[i].classList.add('inputGood')
        } else if (form[i].checkValidity() == false) {
            form[i].classList.add('inputBad')
        }
    }
}


function checkAll() {
    let must = form.querySelectorAll('.required');
    let result = 0;

    for (let i = 0; i < must.length; i++) {
        if (must[i].checkValidity() == true) {
            result += 1;
        }
    };

    if (result == must.length) {
        button.classList.remove("btn-inactive");
        button.classList.add("btn");
    } else {
        button.classList.remove("btn");
        button.classList.add("btn-inactive");
    }
}


nameInput.addEventListener("click", (evt) => {
    checkAll();
});

surnameInput.addEventListener("click", (evt) => {
    checkAll();
});

paymentInput[0].addEventListener("click", (evt) => {
    checkAll();
});

paymentInput[1].addEventListener("click", (evt) => {
    checkAll();
});

deliveryInput.addEventListener("click", (evt) => {
    checkAll();
});

houseInput.addEventListener("click", (evt) => {
    checkAll();
});

adressInput.addEventListener("click", (evt) => {
    checkAll();
});

flatInput.addEventListener("click", (evt) => {
    checkAll();
});













































