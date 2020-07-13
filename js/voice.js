window.onload = function(){
    document.getElementById("speak").onclick = function(){
        var text = document.getElementById("txt").value;
        if(!text || text.length < 1){
            text = "Hello World!";
        } else{}
        text = text.replace(/\s/g, "%20");
        if(text[text.length - 1] === "0"){
            text = text.split("");
            for(var i = 0; i < 3; i++){
                text.pop();
            }
            text = text.join("");
        } else{}
        var audio = "https://audio1.spanishdict.com/audio?lang=en&text=" + text + "&key=8e9b354fabaade0e3ecf6f183f8dc173";
        var speak = new Audio(audio);
        speak.play();
    };
};