

numberList = document.querySelector('.number_list');
number = [];

addNum = (i) => {
    number.push(i);
    li = document.createElement('li');
    li.innerHTML = i;
    li.className = "before";
    numberList.appendChild(li);
}

for(i=1; i<=30; i++){
    if (i>=11 && i<=19){
        addNum(i);
        addNum(i);
    } else {
        addNum(i);
    }
}

number.push(i);
li = document.createElement('li');
li.innerHTML = "☆";
li.className = "before";
numberList.appendChild(li);

