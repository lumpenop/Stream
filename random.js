userList1 = document.querySelectorAll('.user_list1 > li');
userList2 = document.querySelectorAll('.user_list2 > li');
userList3 = document.querySelectorAll('.user_list3 > li');

numList = document.querySelectorAll('number_list > li');
console.log(userList1)
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

addNum = (userLi) => {
    
    if (num != 0 && userLi.innerHTML == ''){
        userLi.innerHTML = num;
        num=0;
        userChoiced.style.display = "none";
    }
}

choiceArr = [];
choiceArr1119 = [];
randomChoice = (numLi) => {
    if(num == 0){
        num = numLi.innerHTML;
        numLi.style.backgroundColor = 'blue';
        userChoiced = numLi;
    }
}





