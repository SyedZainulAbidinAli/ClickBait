var strange = 0;
function startGame() {
    var bruce = Math.random();
    var steve = bruce * 16
    var tony = Math.ceil(steve);
    document.getElementById("auto3").value = document.getElementById("auto2").value
    if (tony == document.getElementById("auto2").value) {
        var bruce = Math.random();
        var steve = bruce * 16
        var tony = Math.ceil(steve);

        if (tony == document.getElementById("auto3").value) {
            var bruce = Math.random();
            var steve = bruce * 16
            var tony = Math.ceil(steve);
        }
    }
    document.getElementById("auto2").value = tony;
    console.log(tony)
    document.getElementById(tony).style.background = "red";
    strange = strange + 1;
    document.getElementById("timer").innerHTML = strange;
    if (document.getElementById("easy").checked === true) {
        var thor = document.getElementById("auto1").value.length;
        var vs = strange - thor;
        if (vs >= 3) {
            document.getElementById("gameover").style.visibility = "visible"
            document.getElementById("message").style.visibility = "visible"
            document.getElementById("score").innerHTML = strange;
            document.getElementsByClassName("box").style.background = "aqua"

        }
        setTimeout("startGame()", 1500)
    }
    if (document.getElementById("medium").checked === true) {
        var thor = document.getElementById("auto1").value.length;
        var vs = strange - thor;
        if (vs >= 3) {
            document.getElementById("gameover").style.visibility = "visible"
            document.getElementById("message").style.visibility = "visible"
            document.getElementById("score").innerHTML = strange;
            document.getElementsByClassName("box").style.background = "aqua"

        }
        setTimeout("startGame()", 1000)
    }
    if (document.getElementById("hard").checked === true) {
        var thor = document.getElementById("auto1").value.length;
        var vs = strange - thor;
        if (vs >= 3) {
            document.getElementById("gameover").style.visibility = "visible"
            document.getElementById("message").style.visibility = "visible"
            document.getElementById("score").innerHTML = strange;
            document.getElementsByClassName("box").style.background = "aqua"
        }
        setTimeout("startGame()", 500)
    }
    if (document.getElementById("expert").checked === true) {
        var thor = document.getElementById("auto1").value.length;
        var vs = strange - thor;
        if (vs >= 3) {
            document.getElementById("gameover").style.visibility = "visible"
            document.getElementById("message").style.visibility = "visible"
            document.getElementById("score").innerHTML = strange;
            document.getElementsByClassName("box").style.background = "aqua"
        }
        setTimeout("startGame()", 300)
    }
}

function first() {
    if (document.getElementById("1").style.background == "red") {
        document.getElementById("1").style.background = "aqua"

        document.getElementById("auto1").value += 1;
    }

}

function second() {
    if (document.getElementById("2").style.background == "red") {
        document.getElementById("2").style.background = "aqua"
        document.getElementById("auto1").value += 1;
    }
}

function third() {
    if (document.getElementById("3").style.background == "red") {
        document.getElementById("3").style.background = "aqua"
        document.getElementById("auto1").value += 1;
    }
}

function fourth() {
    if (document.getElementById("4").style.background == "red") {
        document.getElementById("4").style.background = "aqua"
        document.getElementById("auto1").value += 1;
    }
}


function fifth() {
    if (document.getElementById("5").style.background == "red") {
        document.getElementById("5").style.background = "aqua"
        document.getElementById("auto1").value += 1;
    }
}

function sixth() {
    if (document.getElementById("6").style.background == "red") {
        document.getElementById("6").style.background = "aqua"
        document.getElementById("auto1").value += 1;
    }
}

function seventh() {
    if (document.getElementById("7").style.background == "red") {
        document.getElementById("7").style.background = "aqua"
        document.getElementById("auto1").value += 1;
    }
}

function eighth() {
    if (document.getElementById("8").style.background == "red") {
        document.getElementById("8").style.background = "aqua"
        document.getElementById("auto1").value += 1;
    }
}

function ninth() {
    if (document.getElementById("9").style.background == "red") {
        document.getElementById("9").style.background = "aqua"
        document.getElementById("auto1").value += 1;
    }
}

function tenth() {
    if (document.getElementById("10").style.background == "red") {
        document.getElementById("10").style.background = "aqua"
        document.getElementById("auto1").value += 1;
    }
}

function eleventh() {
    if (document.getElementById("11").style.background == "red") {
        document.getElementById("11").style.background = "aqua"
        document.getElementById("auto1").value += 1;
    }
}

function tewelth() {
    if (document.getElementById("12").style.background == "red") {
        document.getElementById("12").style.background = "aqua"
        document.getElementById("auto1").value += 1;
    }
}

function thirteenth() {
    if (document.getElementById("13").style.background == "red") {
        document.getElementById("13").style.background = "aqua"
        document.getElementById("auto1").value += 1;
    }
}

function fourteenth() {
    if (document.getElementById("14").style.background == "red") {
        document.getElementById("14").style.background = "aqua"
        document.getElementById("auto1").value += 1;
    }
}

function fifteenth() {
    if (document.getElementById("15").style.background == "red") {
        document.getElementById("15").style.background = "aqua"
        document.getElementById("auto1").value += 1;
    }
}

function sixteenth() {
    if (document.getElementById("16").style.background == "red") {
        document.getElementById("16").style.background = "aqua"
        document.getElementById("auto1").value += 1;
    }
}

function playAgain() {
    location.reload();
}

document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  }, false);

  
  document.onkeydown = function(e) {
    if(e.keyCode == 123) {
     return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
     return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
     return false;
    }
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
     return false;
    }

    if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)){
     return false;
    }      
 }