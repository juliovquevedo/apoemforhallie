window.onload = function () {
    var titleLines = setTimeout (showTitle, 1000);
    var line = 0
    
    function showTitle () {
        document.getElementsByClassName("show")[line].style.color = "black";
        document.getElementsByClassName("show")[line++].style.transition = "color 1s linear 0.1s";
        document.getElementsByClassName("show")[line].style.color = "black";
        document.getElementsByClassName("show")[line++].style.transition = "color 1s linear 0.1s";
    }
    var appear = setInterval(showLine, 2800);
    var line = 0;
    
    function showLine () {
        if (line == 0){
            document.getElementsByClassName("show")[line].style.color = "black";
            
            document.getElementsByClassName("show")[line].style.color = "black";
            document.getElementsByClassName("show")[line++].style.transition = "color 0.8s linear 0.1s";
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