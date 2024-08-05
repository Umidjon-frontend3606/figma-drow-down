const elMenuLink = document.querySelectorAll('.menu__link');
console.log(elMenuLink);
elMenuLink.forEach(item => {
item.addEventListener('click',() => {
    elMenuLink.forEach(i=> i.classList.remove('menu__link-active'));
    item.classList.add('menu__link-active')
})
})

const elMenuBtn = document.querySelectorAll('.menu__link');
const elTop = document.querySelectorAll('.fax__top');

elMenuBtn.forEach(item => {
    item.addEventListener(('click') , (e) => {
        e.target.classList.toggle('menu__link-active');
    })
})

//eltop

elTop.forEach(item => {
    item.addEventListener('click' , e => {
        console.log(item.nextElementSibling);
        item.nextElementSibling.classList.toggle('visable')
    })
})