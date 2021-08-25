player1_name = localStroage.getItem("player1_name")
player2_name = localStroage.getItem("player2_name")


player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player1_score").innerHTML = player2_score ;

document.getElementById("player_question").innerHTML = "Question Turn" + player1_name ;
document.getElementById("player_answer").innerHTML = "Answer Turn" + player2_name ;

function send() {
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("word in lowerCase = " + word);

    charAt1 = word.charAt(1);
    console.log(chrAt1);

    lenght_divide_2 = Math.floor(word.lenght/2)
    charAt2 = word.charAt(lenght_divide_2)
    console.log(charAt2)

    lenght_minus_1 = word.length - 1;
    charAt3 = word.charAt(lenght_minus_1);
    console.log(charAt3)
}
