/*

const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('click');
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>HELLO</h1>';
});

*/

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const email = document.querySelector('#email');
const message = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    if (nameInput.value === '' || email.value === '') {
        message.classList.add('error');
        message.innerHTML = 'Please enter all fields';
        setTimeout(() => message.remove(), 3000);
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${email.value}`));
        userList.appendChild(li);

        // clear fields
        nameInput.value = '';
        email.value = '';
    }
};