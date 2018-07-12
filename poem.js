window.onload = function () {
    var appear = setInterval(showLine, 3500);
    var line = 0;
    
    function showLine () {
        if (line == 0){
            document.getElementsByClassName("show")[line].style.color = "black";
            document.getElementsByClassName("show")[line++].style.transition = "color 0.4s linear 0.1s";
            document.getElementsByClassName("show")[line].style.color = "black";
            document.getElementsByClassName("show")[line++].style.transition = "color 0.4s linear 0.1s";
        }
        else{
            document.getElementsByClassName("show")[line].style.color = "black";
            document.getElementsByClassName("show")[line++].style.transition = "color 0.5s linear 0.1s";
        }
        if (line > 14){
            window.clearInterval(appear);
        }
    }
}