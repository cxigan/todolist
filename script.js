let addBtn = document.querySelector('#addBtn');
let input = document.querySelector('input');
let list = document.querySelector('#list');

addBtn.addEventListener('click', function () {
    let li = document.createElement("li");
    li.textContent = input.value;
    list.append(li);
    li.classList.add('item');

    let div = document.createElement('div');
    li.append(div);

    div.className = 'item__btns';

    let i = document.createElement('i');
    i.className = "fa-regular fa-square-check";
    div.append(i);

    let i1 = document.createElement('i1');
    i1.className = "fa-solid fa-trash-can";
    div.append(i1);

    i.addEventListener('click', function () {
        li.classList.toggle('done');
    })

    i1.addEventListener('click', function () {
        li.remove();
    })

})


