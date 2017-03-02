var start_game = function () {
    document.body.style.backgroundColor = "white";
    var flag = true;
    var color = Math.random() * 10;
    color = Math.floor(color);
    var col = "";
    var guess = 0;
    alert(color);
    var input_color = prompt("I've chosen a Color \n It is one amongst: \n aqua,blue,cyan,green,indigo,maroon,orange,pink,red,yellow\n Guess that color!");

    while (flag != false) {
        guess++;
        switch (input_color) {
        case "aqua":
            col = 1;
            break;
        case "blue":
            col = 2;
            break;
        case "cyan":
            col = 3;
            break;
        case "green":
            col = 4;
            break;
        case "indigo":
            col = 5;
            break;
        case "maroon":
            col = 6;
            break;
        case "orange":
            col = 7;
            break;
        case "pink":
            col = 8;
            break;
        case "red":
            col = 9;
            break;
        case "yellow":
            col = 10;
            break;
        default:
            col = 0;
        }
        if (col == 0) {
            alert("I wasn't able to judge your color! Try again");
        } else if (col == color) {
            document.body.style.backgroundColor = input_color;
            break;
        } else if (col > color) {
            flag = confirm("Wrong Answer! \n Hint:Your color is alphabetically greater than mine! \nPlease try again.");
            console.log(flag);
        } else {
            flag = confirm("Wrong Answer! \n Hint:Your color is alphabetically lower than mine! \nPlease try again.");
        }
        input_color = prompt("Guess the color again!\n It is one amongst: \n aqua,blue,cyan,green,indigo,maroon,orange,pink,red,yellow");
    }
    setTimeout(function () {
        alert("You've guessed the correct color! The answer is indeed " + input_color + "\n You took " + guess + " guesses to win the game");
    }, 100);

}