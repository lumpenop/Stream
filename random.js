userList1 = document.querySelectorAll('.user_list1 > li');
userList2 = document.querySelectorAll('.user_list2 > li');
userList3 = document.querySelectorAll('.user_list3 > li');


for(i=0; i < userList1.length; i++){
    userList1[i].setAttribute("onclick","addNum(this)");
}

for(i=0; i < userList2.length; i++){
    userList2[i].setAttribute("onclick","addNum(this)");
}

for(i=0; i < userList3.length; i++){
    userList3[i].setAttribute("onclick","addNum(this)");
}

num = 0;
userChoiced = null;

count = 1;
selected = []
addNum = (userLi) => {
    
    if (num != 0 && userLi.innerHTML == ''){
        userLi.innerHTML = num;
        num=0;
        userChoiced.style.display = "none";
        userChoiced.removeAttribute("class");
        count++;
    }
}


clickRandom = () => {
    numberList = document.querySelectorAll('.before');
    rand = Math.random();
    randInt = Math.floor(rand * numberList.length)
    if(num == 0){
        num = numberList[randInt].innerHTML;
        numberList[randInt].style.backgroundColor = 'blue';
        userChoiced = numberList[randInt];
    }
    
}



