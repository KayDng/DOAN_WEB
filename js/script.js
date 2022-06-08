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
                    //todo: USER
var x = document.getElementById('login')
var y = document.getElementById('register')
var z = document.getElementById('btn')

function register() {
    x.style.left = "-999px"
    y.style.left = "50px"
    z.style.left = "120px"
}

function login() {
    x.style.left = "50px"
    y.style.left = "999px"
    z.style.left = "0"
}

var modal = document.getElementById('login-form');
window.onclick = function(event)
{
    if (event.target == modal)
    {
        modal.style.display = 'none';
    }
}
                    //todo: PASSWORD
 const password = document.getElementById('password');
 const hide_password = document.getElementById('hide-password');
 const hide = document.getElementById('hide');
 const toggle_password = document.getElementById('hide-password');
 const toggle = document.getElementById('toggle');

function showPassword(){
    if (password.type === 'password',hide_password.type === 'password', hide.type === 'password'){
        hide_password.setAttribute('type', 'text');
        password.setAttribute('type', 'text');
        hide.setAttribute('type', 'text');
        toggle_password.classList.add('hide')
        toggle.classList.add('hide');
    }
    else {
        hide_password.setAttribute('type', 'password')
        hide.setAttribute('type', 'password')
        password.setAttribute('type', 'password');
        toggle.classList.remove('hide');
        toggle_password.classList.remove('hide');
        }
    }