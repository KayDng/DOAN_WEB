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
 const toggle = document.getElementById('toggle');

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