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

    let second = document.getElementById('second')
    second.classList.remove('second')
    second.classList.add('none')

    let third = document.getElementById('third')
    third.classList.remove('third')
    third.classList.add('none')

    let fourth = document.getElementById('fourth')
    fourth.classList.remove('fourth')
    fourth.classList.add('none')

    let footer = document.getElementById('footer')
    footer.classList.remove('footer')
    footer.classList.add('none')
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

    let second = document.getElementById('second')
    second.classList.remove('none')
    second.classList.add('second')

    let third = document.getElementById('third')
    third.classList.remove('none')
    third.classList.add('third')

    let fourth = document.getElementById('fourth')
    fourth.classList.remove('none')
    fourth.classList.add('fourth')

    let footer = document.getElementById('footer')
    footer.classList.remove('none')
    footer.classList.add('footer')
})

