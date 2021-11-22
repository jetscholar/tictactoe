//This variable tells the computer whose turn it is
var turn = 0;
//This variable is used in loops for convenience
var i = Math.floor(Math.random() *  9 + 1);
//This variable is used to tell the score of the player
var gameScoreP = 0;
//This variable is used to tell the score of the computer
var gameScoreC = 0;

//These functions allow the player to move by clicking on a square and preventing them from moving when the square is already marked.
function one() {
    if (turn === 0 && document.getElementById('t1').innerHTML == '') {
        document.getElementById('t1').innerHTML = 'X';
        turn = 1;
        computerMove();    
        victory();
    } else {
        alert('This square is taken! Pick another one.');
    }
}

function two() {
    if (turn === 0 && document.getElementById('t2').innerHTML == '') {
        document.getElementById('t2').innerHTML = 'X';
        turn = 1;
        computerMove();
        victory();
    } else {
        alert('This square is taken! Pick another one.');
    }
}

function three() {
    if (turn === 0 && document.getElementById('t3').innerHTML == '') {
        document.getElementById('t3').innerHTML = 'X';
        turn = 1;
        computerMove();
        victory();
    } else {
        alert('This square is taken! Pick another one.');
    }
}

function four() {
    if (turn === 0 && document.getElementById('t4').innerHTML == '') {
        document.getElementById('t4').innerHTML = 'X';
        turn = 1;
        computerMove();
        victory();
    } else {
        alert('This square is taken! Pick another one.');
    }
}

function five() {
    if (turn === 0 && document.getElementById('t5').innerHTML == '') {
        document.getElementById('t5').innerHTML = 'X';
        turn = 1;
        computerMove();
        victory();
    } else {
        alert('This square is taken! Pick another one.');
    }
}

function six() {
    if (turn === 0 && document.getElementById('t6').innerHTML == '') {
        document.getElementById('t6').innerHTML = 'X';
        turn = 1;
        computerMove();
        victory();
    } else {
        alert('This square is taken! Pick another one.');
    }
}

function seven() {
    if (turn === 0 && document.getElementById('t7').innerHTML == '') {
        document.getElementById('t7').innerHTML = 'X';
        turn = 1;
        computerMove();
        victory();
    } else {
        alert('This square is taken! Pick another one.');
    }
}

function eight() {
    if (turn === 0 && document.getElementById('t8').innerHTML == '') {
        document.getElementById('t8').innerHTML = 'X';
        turn = 1;
        computerMove();
        victory();
    } else {
        alert('This square is taken! Pick another one.');
    }
}

function nine() {
    if (turn === 0 && document.getElementById('t9').innerHTML == '') {
        document.getElementById('t9').innerHTML = 'X';
        turn = 1;
        computerMove();
        victory();
    } else {
        alert('This square is taken! Pick another one.');
    }
}

//This function dictates the computer's moves
function computerMove() {
        //If there is a chance to win
        if (turn === 1 && document.getElementById('t1').innerHTML == '' && (document.getElementById('t2').innerHTML == 'O' && document.getElementById('t3').innerHTML == 'O' || document.getElementById('t4').innerHTML == 'O' && document.getElementById('t7').innerHTML == 'O' || document.getElementById('t5').innerHTML == 'O' && document.getElementById('t9').innerHTML == 'O')){
            document.getElementById('t1').innerHTML = 'O';
            turn = 0;
        } else if (turn === 1 && document.getElementById('t2').innerHTML == '' && (document.getElementById('t1').innerHTML == 'O' && document.getElementById('t3').innerHTML == 'O' || document.getElementById('t5').innerHTML == 'O' && document.getElementById('t8').innerHTML == 'O')) {
            document.getElementById('t2').innerHTML = 'O';
            turn = 0;
        } else if (turn === 1 && document.getElementById('t3').innerHTML == '' && (document.getElementById('t1').innerHTML == 'O' && document.getElementById('t2').innerHTML == 'O' || document.getElementById('t6').innerHTML == 'O' && document.getElementById('t9').innerHTML == 'O' || document.getElementById('t5').innerHTML == 'O' && document.getElementById('t7').innerHTML == 'O')) {
            document.getElementById('t3').innerHTML = 'O';
            turn = 0;
        } else if (turn === 1 && document.getElementById('t4').innerHTML == '' && (document.getElementById('t1').innerHTML == 'O' && document.getElementById('t7').innerHTML == 'O' || document.getElementById('t5').innerHTML == 'O' && document.getElementById('t6').innerHTML == 'O')) {
            document.getElementById('t4').innerHTML = 'O';
            turn = 0;
        } else if (turn === 1 && document.getElementById('t5').innerHTML == '' && (document.getElementById('t4').innerHTML == 'O' && document.getElementById('t6').innerHTML == 'O' || document.getElementById('t2').innerHTML == 'O' && document.getElementById('t7').innerHTML == 'O' || document.getElementById('t1').innerHTML == 'O' && document.getElementById('t9').innerHTML == 'O' || document.getElementById('t4').innerHTML == 'O' && document.getElementById('t7').innerHTML == 'O')) {
            document.getElementById('t5').innerHTML = 'O';
            turn = 0;
        } else if (turn === 1 && document.getElementById('t6').innerHTML == '' && (document.getElementById('t3').innerHTML == 'O' && document.getElementById('t9').innerHTML == 'O' || document.getElementById('t4').innerHTML == 'O' && document.getElementById('t5').innerHTML == 'O')) {
            document.getElementById('t6').innerHTML = 'O';
            turn = 0;
        } else if (turn === 1 && document.getElementById('t7').innerHTML == '' && (document.getElementById('t1').innerHTML == 'O' && document.getElementById('t4').innerHTML == 'O' || document.getElementById('t8').innerHTML == 'O' && document.getElementById('t9').innerHTML == 'O' || document.getElementById('t3').innerHTML == 'O' && document.getElementById('t5').innerHTML == 'O')) {
            document.getElementById('t7').innerHTML = 'O';
            turn = 0;
        } else if (turn === 1 && document.getElementById('t8').innerHTML == '' && (document.getElementById('t2').innerHTML == 'O' && document.getElementById('t5').innerHTML == 'O' || document.getElementById('t7').innerHTML == 'O' && document.getElementById('t9').innerHTML == 'O')) {
            document.getElementById('t8').innerHTML = 'O';
            turn = 0;
        } else if (turn === 1 && document.getElementById('t9').innerHTML == '' && (document.getElementById('t1').innerHTML == 'O' && document.getElementById('t5').innerHTML == 'O' || document.getElementById('t7').innerHTML == 'O' && document.getElementById('t8').innerHTML == 'O' || document.getElementById('t3').innerHTML == 'O' && document.getElementById('t6').innerHTML == 'O')) {
            document.getElementById('t9').innerHTML = 'O';
            turn = 0;
        //If there is a chance to prevent the player from winning
        } else if (turn === 1 && document.getElementById('t1').innerHTML === '' && (document.getElementById('t2').innerHTML === 'X' && document.getElementById('t3').innerHTML == 'X' || document.getElementById('t5').innerHTML == 'X' && document.getElementById('t6').innerHTML == 'X' || document.getElementById('t5').innerHTML == 'X' && document.getElementById('t9').innerHTML == 'X')) {
            document.getElementById('t1').innerHTML = 'O';
            turn = 0;
        } else if (turn === 1 && document.getElementById('t2').innerHTML === '' && (document.getElementById('t1').innerHTML === 'X' && document.getElementById('t3').innerHTML == 'X' || document.getElementById('t4').innerHTML == 'X' && document.getElementById('t7').innerHTML == 'X')) {
            document.getElementById('t2').innerHTML = 'O';
            turn = 0;
        } else if (turn === 1 && document.getElementById('t3').innerHTML === '' && (document.getElementById('t2').innerHTML === 'X' && document.getElementById('t1').innerHTML == 'X' || document.getElementById('t6').innerHTML == 'X' && document.getElementById('t9').innerHTML == 'X' || document.getElementById('t5').innerHTML == 'X' && document.getElementById('t7').innerHTML == 'X')) {
            document.getElementById('t3').innerHTML = 'O';
            turn = 0;
        } else if (turn === 1 && document.getElementById('t4').innerHTML === '' && (document.getElementById('t1').innerHTML === 'X' && document.getElementById('t7').innerHTML == 'X' || document.getElementById('t5').innerHTML == 'X' && document.getElementById('t6').innerHTML == 'X')) {
            document.getElementById('t4').innerHTML = 'O';
            turn = 0;
        } else if (turn === 1 && document.getElementById('t5').innerHTML === '' && (document.getElementById('t2').innerHTML === 'X' && document.getElementById('t8').innerHTML == 'X' || document.getElementById('t4').innerHTML == 'X' && document.getElementById('t6').innerHTML == 'X' || document.getElementById('t1').innerHTML == 'X' && document.getElementById('t9').innerHTML == 'X' || document.getElementById('t3').innerHTML == 'X' && document.getElementById('t7').innerHTML == 'X')) {
            document.getElementById('t5').innerHTML = 'O';
            turn = 0;
        } else if (turn === 1 && document.getElementById('t6').innerHTML === '' && (document.getElementById('t4').innerHTML === 'X' && document.getElementById('t5').innerHTML == 'X' || document.getElementById('t3').innerHTML == 'X' && document.getElementById('t9').innerHTML == 'X')) {
            document.getElementById('t6').innerHTML = 'O';
            turn = 0;
        } else if (turn === 1 && document.getElementById('t7').innerHTML === '' && (document.getElementById('t1').innerHTML === 'X' && document.getElementById('t4').innerHTML == 'X' || document.getElementById('t8').innerHTML == 'X' && document.getElementById('t9').innerHTML == 'X' || document.getElementById('t5').innerHTML == 'X' && document.getElementById('t3').innerHTML == 'X')) {
            document.getElementById('t7').innerHTML = 'O';
            turn = 0;
        } else if (turn === 1 && document.getElementById('t8').innerHTML === '' && (document.getElementById('t2').innerHTML === 'X' && document.getElementById('t5').innerHTML == 'X' || document.getElementById('t7').innerHTML == 'X' && document.getElementById('t9').innerHTML == 'X')) {
            document.getElementById('t8').innerHTML = 'O';
            turn = 0;
        } else if (turn === 1 && document.getElementById('t9').innerHTML === '' && (document.getElementById('t7').innerHTML === 'X' && document.getElementById('t8').innerHTML == 'X' || document.getElementById('t3').innerHTML == 'X' && document.getElementById('t6').innerHTML == 'X' || document.getElementById('t1').innerHTML == 'X' && document.getElementById('t5').innerHTML == 'X')) {
            document.getElementById('t9').innerHTML = 'O';
            turn = 0;
        //If neither can be done, the computer moves to a random spot on the table
        } else if (document.getElementById('t' + i).innerHTML == '') {
            document.getElementById('t' + i).innerHTML = 'O';
            turn = 0;
        } else if (document.getElementById('t' + i).innerHTML != '') {
            k =  Math.floor(Math.random() * 9 + 1);
            if (document.getElementById('t' + k).innerHTML == ''){
                document.getElementById('t' + k).innerHTML = 'O';
                turn = 0;
            }
        }
}

//This function sets the condition for victory (or tie) and what to do in the case of it
function victory() {
    //Conditions of victory
    if ((document.getElementById('t1').innerHTML == 'X' && document.getElementById('t2').innerHTML == 'X' && document.getElementById('t3').innerHTML == 'X') || 
    (document.getElementById('t4').innerHTML == 'X' && document.getElementById('t5').innerHTML == 'X' && document.getElementById('t6').innerHTML == 'X') || 
    (document.getElementById('t7').innerHTML == 'X' && document.getElementById('t8').innerHTML == 'X' && document.getElementById('t9').innerHTML == 'X') ||
    (document.getElementById('t1').innerHTML == 'X' && document.getElementById('t4').innerHTML == 'X' && document.getElementById('t7').innerHTML == 'X') ||
    (document.getElementById('t2').innerHTML == 'X' && document.getElementById('t5').innerHTML == 'X' && document.getElementById('t8').innerHTML == 'X') ||
    (document.getElementById('t3').innerHTML == 'X' && document.getElementById('t6').innerHTML == 'X' && document.getElementById('t9').innerHTML == 'X') ||
    (document.getElementById('t1').innerHTML == 'X' && document.getElementById('t5').innerHTML == 'X' && document.getElementById('t9').innerHTML == 'X') ||
    (document.getElementById('t3').innerHTML == 'X' && document.getElementById('t5').innerHTML == 'X' && document.getElementById('t7').innerHTML == 'X')) {
        //Sets a delay
        setTimeout(function() {document.getElementById('winner').innerHTML = "Congratulations! You win!";
        //Hides the table and shows the winner screen
        document.getElementById('fin').classList.remove('invis');
        document.getElementById('Table').classList.add('invis');
        }, 500);
        gameScoreP++;
        document.getElementById('pScore').innerHTML = 'Player - ' + gameScoreP;
    //Conditions of victory
    } else if ((document.getElementById('t1').innerHTML == 'O' && document.getElementById('t2').innerHTML == 'O' && document.getElementById('t3').innerHTML == 'O') || 
    (document.getElementById('t4').innerHTML == 'O' && document.getElementById('t5').innerHTML == 'O' && document.getElementById('t6').innerHTML == 'O') || 
    (document.getElementById('t7').innerHTML == 'O' && document.getElementById('t8').innerHTML == 'O' && document.getElementById('t9').innerHTML == 'O') ||
    (document.getElementById('t1').innerHTML == 'O' && document.getElementById('t4').innerHTML == 'O' && document.getElementById('t7').innerHTML == 'O') ||
    (document.getElementById('t2').innerHTML == 'O' && document.getElementById('t5').innerHTML == 'O' && document.getElementById('t8').innerHTML == 'O') ||
    (document.getElementById('t3').innerHTML == 'O' && document.getElementById('t6').innerHTML == 'O' && document.getElementById('t9').innerHTML == 'O') ||
    (document.getElementById('t1').innerHTML == 'O' && document.getElementById('t5').innerHTML == 'O' && document.getElementById('t9').innerHTML == 'O') ||
    (document.getElementById('t3').innerHTML == 'O' && document.getElementById('t5').innerHTML == 'O' && document.getElementById('t7').innerHTML == 'O')) {
        //Sets a delay
        setTimeout(function() {document.getElementById('winner').innerHTML = "The computer wins! Try harder next time!";
        //Hides the table and shows the winner screen
        document.getElementById('fin').classList.remove('invis');
        document.getElementById('Table').classList.add('invis');
        }, 500);
        gameScoreC++;
        document.getElementById('cScore').innerHTML = 'Computer - ' + gameScoreC;
    //Conditions of a tie
    } else if (document.getElementById('t1').innerHTML && 
    document.getElementById('t2').innerHTML && 
    document.getElementById('t3').innerHTML && 
    document.getElementById('t4').innerHTML && 
    document.getElementById('t5').innerHTML && 
    document.getElementById('t6').innerHTML && 
    document.getElementById('t7').innerHTML && 
    document.getElementById('t8').innerHTML && 
    document.getElementById('t9').innerHTML){
        //Sets a delay
        setTimeout(function() {document.getElementById('winner').innerHTML = "It's a tie!";
        //Hides the table and shows the winner screen
        document.getElementById('fin').classList.remove('invis');
        document.getElementById('Table').classList.add('invis');
        }, 500);
    }
}

//This runs when the play again button is clicked, it resets the board
function again() {
    document.getElementById('fin').classList.add('invis');
    document.getElementById('Table').classList.remove('invis');
    document.getElementById('t1').innerHTML = '';
    document.getElementById('t2').innerHTML = '';
    document.getElementById('t3').innerHTML = '';
    document.getElementById('t4').innerHTML = '';
    document.getElementById('t5').innerHTML = '';
    document.getElementById('t6').innerHTML = '';
    document.getElementById('t7').innerHTML = '';
    document.getElementById('t8').innerHTML = '';
    document.getElementById('t9').innerHTML = '';
}