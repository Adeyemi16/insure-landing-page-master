let ham = document.getElementById('ham');

let close = document.getElementById('close')

ham.addEventListener('click', () => {
    let links = document.getElementById('links')

    links.classList.remove('links')
    links.classList.add('show')

    ham.classList.add('links')

    ham.classList.remove('ham')
    let close = document.getElementById('close')
    close.classList.remove('hamb')
    close.classList.add('showb')
})

close.addEventListener('click', () => {
    let links = document.getElementById('links')

    links.classList.add('links')
    links.classList.remove('show')

    ham.classList.remove('links')
    ham.classList.add('ham')
    let close = document.getElementById('close')
    close.classList.add('hamb')
    close.classList.remove('showb')
})

