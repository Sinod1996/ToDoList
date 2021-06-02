let btn = document.querySelector('button');
btn.setAttribute('class', 'btn');

let search = document.querySelector('input');
search.setAttribute('class', 'search');

let ulList = document.querySelector('.ul-list');

btn.addEventListener('click', function () {
    let search = document.querySelector('input');
    search.setAttribute('class', 'search');
    let liList = document.createElement('li');
    liList.setAttribute('class', 'li-list');
    let div = document.createElement('div');
    let ImpBtn = document.createElement('button');
    let delBtn = document.createElement('button');
    ImpBtn.innerText = "!";
    delBtn.innerText = 'DELETE'
    liList.innerText = search.value;

    if (search.value == "") {
        alert('You must write something');
        return search;

    } else {
        ulList.appendChild(liList);
    }
    search.value = "";


    delBtn.setAttribute('class', 'del-btn');
    ImpBtn.setAttribute('class', 'imp-btn');
    ImpBtn.addEventListener('click', function () {
        liList.classList.toggle('list-item');
    })

    delBtn.addEventListener('click', function () {
        ulList.removeChild(liList);
    })

    ulList.appendChild(liList);
    liList.appendChild(div);
    div.appendChild(ImpBtn);
    div.appendChild(delBtn);

})



