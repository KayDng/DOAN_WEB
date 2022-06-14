                    //todo: Wrapper picture
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}
                    //todo: PASSWORD
const password = document.getElementById('pwd');
const pwd_signup = document.getElementById('pwd-signup');
const pwd_signup_again = document.getElementById('pwd-signup-again');
const toggle = document.getElementById('toggle');
const toggle_signup = document.getElementById('toggle-signup');
const toggle_signup_again = document.getElementById('toggle-signup-again');

function showPassword(){
    if (password.type === 'password'){
        password.setAttribute('type', 'text');
        toggle.classList.add('hide');
    }
    else {
        password.setAttribute('type', 'password');
        toggle.classList.remove('hide');
    }
}

function showPasswordSingup(){
    if (pwd_signup.type === 'password'){
        pwd_signup.setAttribute('type', 'text');
        toggle_signup.classList.add('hide-signup');
    }
    else {
        pwd_signup.setAttribute('type', 'password');
        toggle_signup.classList.remove('hide-signup');
    }
}

function showPassword(){
    if (password.type === 'password'){
        password.setAttribute('type', 'text');
        toggle.classList.add('hide');
    }
    else {
        password.setAttribute('type', 'password');
        toggle.classList.remove('hide');
    }
}

