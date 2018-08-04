window.onload = function () {
    var line = 0;
    
    
    
    
    var stopper = setTimeout (showTitle(), 1000);
    
    function showTitle () {
        document.getElementsByClassName("show")[line].style.color = "black";
        document.getElementsByClassName("show")[line++].style.transition = "color 1s linear 1s";
        document.getElementsByClassName("show")[line].style.color = "black";
        document.getElementsByClassName("show")[line++].style.transition = "color 1s linear 1s";
        clearTimeout (stopper);
    }
    
    
    
    
    var appear = setInterval(showLine, 0);
    
    function showLine () {
        document.getElementsByClassName("show")[line].style.color = "black";
        document.getElementsByClassName("show")[line++].style.transition = "color 1.5s linear 5s";
        
        if (line > 13){
            document.getElementsByClassName("show")[line].style.color = "black";
            document.getElementsByClassName("show")[line++].style.transition = "color 1.5s linear 30s";
        }
        
        if (line == 15){
            document.getElementsByClassName("show")[line].style.color = "black";
            document.getElementsByClassName("show")[line++].style.transition = "color 1.5s linear 33s";
            window.clearInterval(appear);
        }
    }
    
    
}