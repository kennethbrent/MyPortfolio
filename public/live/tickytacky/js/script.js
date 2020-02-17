$('.board').hide();
////////////////////////////////////////////////
//Append start screen and require name input///
///////////////////////////////////////////////
$('body').append(
	"<div class='screen screen-start' id='start'>\
	<header>\
		<h1>Tic Tac Toe</h1>\
		<p class='error'></p>\
		<input type='text' class='playerName errorMessage' placeholder='Enter player1 name'>\
		<p class='error'></p>\
		<input type='text' class='player2name playerName errorMessage' placeholder='Enter player2 name'>\
		<a href='#'' class='button'>Start game</a>\
	</header></div>'");
/////////////////////////////////////////////////////////
///Require player 1 and player 2 name////////
/////////////////////////////////////////////////////////
$('.playerName').css({'display': 'block','margin': '25px auto 15px auto', 'padding': '5px', 'border': 'none', 'border-radius': '5px'});
$('.button').on('click', () => {
		if($('.playerName').val() === "" || $('.player2name').val() === ""){
			$('.error').html('Your name is required');
			$('.errorMessage').css({'margin-top':'2px', 'border':'solid 3px red'});
			$('.error').css({'font-weight': 'bold', 'color':'red', 'margin-bottom': '0px', 'font-size': '9px'});
		} else {
		$('.screen-start').hide();
		$('.board').show();
		}
	/////////////////////////////////
	/////append player names to game/
	/////////////////////////////////
	$('#player1').append("<p id='player1Name'></p>");
	$('#player1Name').html($('.playerName').val().toUpperCase());
	$('#player2').append("<p id='player2Name'></p>");
	if($('.player2name').length) {
		$('#player2Name').html($('.player2name').val().toUpperCase());
	}
	$('#player1Name, #player2Name').css({'margin': '4px 0 0 0', 'color': 'black', 'font-weight': 'bold', 'font-size': '20px'});
});
/////////////////////////////////////////////////////////////
////  Set value ///////////////////
////////////////////////////////////////////////////////////
const player1token ='box-filled-1';
const player2token= 'box-filled-2';
const tokens = [player1token,player2token];
let whoseTurn = 0;
$('#player1').addClass('active');
/////////////////////////////////////////////////////////////
////////Append and hide Win Screen and hide by default///////
////////////////////////////////////////////////////////////
$('body').append("<div class='screen screen-win' id='finish'>\
	<header>\
    <h1>Tic Tac Toe</h1>\
    <p class='message'></p>\
    <a href='#' class='button'>New game</a>\
  </header>\
</div>")
$('.screen-win').hide();
//////////////////////////////////////////////////////////
///////////////////////keep track of turn/////////////////
///////////////////////////////////////////////////////////
function toggle() {
	if(whoseTurn == 0) {
		$('#player2').addClass('active');
		$('#player1').removeClass('active');
		whoseTurn = 1;	
	} else {
		whoseTurn = 0;
		$('#player2').removeClass('active');
		$('#player1').addClass('active');
	}
}
///////////////////////////////////////////////////////////////////
//// change player turn on click and keep score///////////////////////
/////////////////////////////////////////////////////////////////////////
$('.box').on('click', function() {
	if (!$(this).hasClass('box-filled-1') && !$(this).hasClass('box-filled-2')) {
		$(this).addClass(tokens[whoseTurn]);	
		toggle();
	}
	
});
///////////////////////////////////////////////
///Restart on new game button click////
///////////////////////////////////////////////
$('.screen-win .button').on('click', () =>{
	$('.screen-win').hide();
	$('.board').show();     
	$('.box').removeClass('box-filled-1');
	$('.box').removeClass('box-filled-2');
	toggle();
});
///////////////////////////////////////
////Show on mouseover//////////////////
//////////////////////////////////////
$(".box").hover(function(){
		if(whoseTurn === 0 && !$(this).hasClass('box-filled-1') && !$(this).hasClass('box-filled-2')){
			$(this).css("background-image", "url(img/o.svg)");
        	}
		}, 
		function(){
        $(this).css("background-image", "");
    });

$(".box").hover(function(){
		if(whoseTurn === 1 && !$(this).hasClass('box-filled-1') && !$(this).hasClass('box-filled-2')){
			$(this).css("background-image", "url(img/x.svg)");
        	}
		}, 
		function(){
        $(this).css("background-image", "");
    });
/////////////////////////////////////
//Put li with class of box into array
//////////////////////////////////////
const boxArray = $('.box').toArray();
////////////////////////////////////////////
//function to check if box has been clicked/
///////////////////////////////////////////
const hasClass = (classNumber) => 
	$(boxArray[0]).hasClass('box-filled-' + classNumber)&&
		$(boxArray[1]).hasClass('box-filled-' + classNumber)&&
		$(boxArray[2]).hasClass('box-filled-' + classNumber)||
		
		$(boxArray[3]).hasClass('box-filled-' + classNumber)&&
		$(boxArray[4]).hasClass('box-filled-' + classNumber)&&
		$(boxArray[5]).hasClass('box-filled-' + classNumber)||
		
		$(boxArray[6]).hasClass('box-filled-' + classNumber)&&
		$(boxArray[7]).hasClass('box-filled-' + classNumber)&&
		$(boxArray[8]).hasClass('box-filled-' + classNumber)||
		
		$(boxArray[2]).hasClass('box-filled-' + classNumber)&&
		$(boxArray[5]).hasClass('box-filled-' + classNumber)&&
		$(boxArray[8]).hasClass('box-filled-' + classNumber)||
		
		$(boxArray[1]).hasClass('box-filled-' + classNumber)&&
		$(boxArray[4]).hasClass('box-filled-' + classNumber)&&
		$(boxArray[7]).hasClass('box-filled-' + classNumber)||
		
		$(boxArray[0]).hasClass('box-filled-' + classNumber)&&
		$(boxArray[3]).hasClass('box-filled-' + classNumber)&&
		$(boxArray[6]).hasClass('box-filled-' + classNumber)||
		
		$(boxArray[2]).hasClass('box-filled-' + classNumber)&&
		$(boxArray[4]).hasClass('box-filled-' + classNumber)&&
		$(boxArray[6]).hasClass('box-filled-' + classNumber)||
		
		$(boxArray[0]).hasClass('box-filled-' + classNumber)&&
		$(boxArray[4]).hasClass('box-filled-' + classNumber)&&
		$(boxArray[8]).hasClass('box-filled-' + classNumber);
////////////////////////////////////////////////
///Check if a winner or tie on click//////////
/////////////////////////////////////////////
$('.box').on('click', () => {
	if(hasClass(1))
	 {
		 $('.board').hide();
	   $('.screen-win').addClass('screen-win-one');
			$('.message').html($('.playerName').val().toUpperCase() + ' WINS!');
			$('.screen-win').show();
		} else if(hasClass(2))
	    	{
					$('.board').hide();
		   			$('.screen-win').addClass('screen-win-two');
					$('.message').html($('.player2name').val().toUpperCase() + ' WINS!');
					$('.screen-win').show();
	   			} else if($('.box').not('.box-filled-1 , .box-filled-2').length === 0)
				{
					$('.board').hide();
					$('.screen-win').addClass('screen-win-tie');
					$('.message').html('Tie!');
					$('.screen-win').show();
					
				}
	});
