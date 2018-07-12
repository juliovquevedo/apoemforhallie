window.onload = function () {
    var appear = setInterval(showLine, 3500);
    var line = 0;
    
    function showLine () {
        if (line == 0){
            document.getElementsByClassName("show")[line++].style.display = "block";
            document.getElementsByClassName("show")[line++].style.display = "block";
        }
        else{
           document.getElementsByClassName("show")[line++].style.display = "initial"; 
        }
        if (line > 13){
            window.clearInterval(appear);
        }
    }
}