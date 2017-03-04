var start_game = function () {
    document.body.style.backgroundColor = "#FFFFFF";
    var flag = true;
    var input_color = null;
    var calc_color = function () {
        var color = Math.random() * 10;
        color = Math.floor(color);
        return color;
    }
    var colarr = ["aqua", "blue", "cyan", "red", "maroon", "green", "indigo", "yellow", "orange", "pink"];
    colarr.sort();
    var guess_col = function () {
        input_color = prompt("I've chosen a Color \n It is one amongst: \n" + colarr + "\n Guess that color!");
        if (input_color == null) {
            flag = false;
        }
    }
    var play_game = function () {
        color = calc_color();
        var guess = 0;
        while (flag) {
            guess_col();
            guess++;
            if (colarr.indexOf(input_color) == -1) {
                alert("I wasn't able to judge your color! Try again");
            } else if (colarr.indexOf(input_color) == color) {
                document.body.style.backgroundColor = input_color;
                break;
            } else if (colarr.indexOf(input_color) < color) {
                flag = confirm("Wrong Answer! \n Hint:Your color is alphabetically lower than mine! \nPlease try again.");
            } else {
                flag = confirm("Wrong Answer! \n Hint:Your color is alphabetically greater than mine! \nPlease try again.");
            }
        }
        if (input_color != null && flag != false) {
            setTimeout(function () {
                alert("You've guessed the correct color! The answer is indeed " + input_color + "\n You took " + guess + " guesses to win the game");
            }, 100);
        }
        setTimeout(function () {
            if (confirm("Would you like to play again?")) {
                flag = true;
                play_game();
            }
        }, 200);

    }
    play_game();
}
