let allImg = document.querySelectorAll('img');
let hide = document.querySelector('#hideButton');
let show = document.querySelector('#showButton');
let input = document.querySelector('#tagInput');
let clearFilter = document.querySelector('#clearFilter');

show.addEventListener('click', function (e) {
    let inputValue = input.value;
    allImg.forEach(function(img) {
        (img.dataset.tag.split(',')
            .indexOf(inputValue) != -1)?
            img.classList.remove('invisible') : img.classList.add('invisible');
    })
    input.value = '';
})

hide.addEventListener('click', function (e) {
    let inputValue = input.value;
    allImg.forEach(function(img) {
        (img.dataset.tag.split(',')
            .indexOf(inputValue) != -1)?
            img.classList.add('invisible') : img.classList.remove('invisible');
    })
    input.value = '';
})

clearFilter.addEventListener('click', function (e) {
    allImg.forEach(function (img) {
        img.classList.remove('invisible');
    })
})