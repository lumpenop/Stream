userList = document.querySelectorAll('.user_list > li');
score = () => {
    if(count==userList.length){
        document.querySelector('.start').removeAttribute('onclick')
        
    }
}