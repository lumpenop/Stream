
scoreBoard = [0, 1, 3, 5, 7, 12, 11, 15, 20, 25,
    30, 55, 40, 50, 60, 70, 135, 100, 150, 300]

col = ['blue','purple','gray','black','green','red'];
colorCount = 0;
stream = 0;
total = 0;

colorGroup = [];

score = () => {
    userList = document.querySelectorAll('.user_list > li');
    for (i=0; i < userList.length-1; i++){
       
        beforeNum = parseInt(userList[i].innerHTML);
        afterNum = parseInt(userList[i+1].innerHTML);
        
        if (i > 0 && userList[i].innerHTML == '☆'){
            beforeNum = parseInt(userList[i-1].innerHTML);
        } else if (userList[i+1].innerHTML == '☆'){
            afterNum = beforeNum;
        } 

        if (beforeNum <= afterNum){
         
            colorGroup.push(i);
            colorGroup.push(i+1);
                
            stream++;

            if(i==userList.length-2){
                total = total + scoreBoard[stream];
            }
      
        } else {
        
            for(j=0; j < colorGroup.length; j++){
                userList[colorGroup[j]].style.background = col[colorCount];
            }

            colorCount++;
            colorGroup = [];

            if(colorCount == col.length){
                colorCount = 0;
            }
            
            total = total + scoreBoard[stream];
            stream = 0;
     
    }
    for(j=0; j < colorGroup.length; j++){
        userList[colorGroup[j]].style.background = col[colorCount];
    }
    
    document.querySelector('.scoring').innerHTML = total;
    }
}