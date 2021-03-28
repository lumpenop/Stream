
scoreBoard = [0, 1, 3, 5, 7, 12, 11, 15, 20, 25,
    30, 55, 40, 50, 60, 70, 135, 100, 150, 300]

color = ['blue','lightpurple','gray','black','green','red']
colorCount = 0;
stream = 0;
point = 0;

score = () => {
    userList = document.querySelectorAll('.user_list > li');
    for (i=0; i < userList.length-1; i++){
       
        beforeNum = parseInt(userList[i].innerHTML);
        afterNum = parseInt(userList[i+1].innerHTML);
        
        if (i > 0 && userList[i-1].innerHTML == '☆'){
            beforeNum = afterNum
        }

        if (beforeNum <= afterNum || userList[i+1].innerHTML == '☆'){
            stream = stream+1;
            userList[i].style.backgroundColor = color[colorCount];
            userList[i+1].style.backgroundColor = color[colorCount];

          
        } else {
            point = point + scoreBoard[stream];
            stream = 0;


            if(colorCount < color.length){
                colorCount++;
            } else {
                colorCount = 0;
            }
        }
    }
    point = point + scoreBoard[stream];
    document.querySelector('.scoring').innerHTML = point;
    return point;
}