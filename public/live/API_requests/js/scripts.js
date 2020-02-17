///////////////////////////////////////
///fetch random users/////////////////
////////////////////////////////////
$.ajax({
  url: 'https://randomuser.me/api/?results=12&inc=picture,name,email,location,nat,dob,cell&nat=us',
  dataType: 'json',
  success: function(data) {
	  appendUserCards(data);
	  appendModaldata(data);
	  for(let i = 0; i <= 13; i ++) {
	showUserModal(i);
	  }
  }
});
//////////////////////////////////////////////
//append cards div and user data/////////////
////////////////////////////////////////////
function appendUserCards(data) {
	for(let i = 0; i < data.results.length; i++){
		$('.gallery').append(
	  		`<div class="card">
				<div class="card-img-container">
                	<img class="card-img" src=${data.results[i].picture.medium} alt="profile picture">
				</div>
				<div class="card-info-container">
					<h3 id="name" class="card-name cap">${data.results[i].name.first} ${data.results[i].name.last}</h3>
                	<p class="card-text">${data.results[i].email}</p>
                	<p class="card-text cap">${data.results[i].location.city} ${data.results[i].location.state}</p>
           		</div>
       		</div>`
			);	
	  }
}
//////////////////////////////////////////
/////////create student array for modal//
////////////////////////////////////////
const modalArray = [];
function appendModaldata(data) {
	for(let i = 0; i < data.results.length; i++) {
		const userDOB = data.results[i].dob.date;
		const formmatedDOB = userDOB.slice(0,10);
		modalArray.push(`
			<div class='modalArray' id='modalArray${i}'>
				<img class="modal-img" src=${data.results[i].picture.medium}>
				<h3 id="name" class="modal-name cap">${data.results[i].name.first} ${data.results[i].name.last}</h3>
				<p class="modal-text">${data.results[i].email}</p>
				<p class="modal-text cap">${data.results[i].location.city}</p>
				<hr>
				<p class="modal-text">${data.results[i].cell}</p>
				<p class="modal-text">${data.results[i].location.street} ${data.results[i].location.city} ${data.results[i].location.state}</p>
				<p class="modal-text">${formmatedDOB}</p>
			</div>
`);
}
	//////////////////////////////////////////////////
	//Append modalArray data to modal containter//////
	/////////////////////////////////////////////////
	for(let i = 0; i < modalArray.length; i++) {
	$('.modal-info-container').append(modalArray[i]);
		$('.modalArray').hide();
	}
}
/////////////////////////////////////////////////////
//Append Modal containers and buttons///////////
////////////////////////////////////////////////////
$('body').append(`
	<div class='modal-container'>
		<div class='modal'>
			<button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
			<div class='modal-info-container'>		
			</div>
		</div>
		<div class="modal-btn-container">
           <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
           <button type="button" id="modal-next" class="modal-next btn">Next</button>
        </div>
	</div>
`);
$('.modal-container').hide();
/////////////////////////////////////////////////////////////
/////////Function to close modal//////////////////////
//////////////////////////////////////////////
function closeModal() {
	$('.modal-close-btn').on('click', () => {
		$('.modal-container').hide();
		$('.modalArray').hide();
	});
}
closeModal();
////////////////////////////////////////////
///function  to show modal on click///////
////////////////////////////////////////
const userCard = document.getElementsByClassName('card')
function showUserModal (arrayIndex) {
	$(userCard[arrayIndex]).on('click', function() {
		$('.modal-container').show();
		$('#modalArray' + arrayIndex).show();
		$('.modal-close-btn').on('click', () => {
			$('#modalArray' + arrayIndex).hide();
		});
	});
}
////////////////////////////////////////////////////
////Toggle users in Modal Window//////////////////
//////////////////////////////////////////////////
$('#modal-next').on('click', function() {
		toggleNext();
});
$('#modal-prev').on('click', function() {
		togglePrev();
});
function toggleNext(){
	if($('#modalArray0').is(":visible")) {
	   	$('#modalArray0').hide();
		$('#modalArray0').next().show();
	   } else if($('#modalArray1').is(":visible")) {
	   	$('#modalArray1').hide();
		$('#modalArray1').next().show();
	   } else if($('#modalArray2').is(":visible")) {
	   	$('#modalArray2').hide();
		$('#modalArray2').next().show();
	   } else if($('#modalArray3').is(":visible")) {
	   	$('#modalArray3').hide();
		$('#modalArray3').next().show();
	   } else if($('#modalArray4').is(":visible")) {
	   	$('#modalArray4').hide();
		$('#modalArray4').next().show();
	   } else if($('#modalArray5').is(":visible")) {
	   	$('#modalArray5').hide();
		$('#modalArray5').next().show();
	   } else if($('#modalArray6').is(":visible")) {
	   	$('#modalArray6').hide();
		$('#modalArray6').next().show();
	   } else if($('#modalArray7').is(":visible")) {
	   	$('#modalArray7').hide();
		$('#modalArray7').next().show();
	   } else if($('#modalArray8').is(":visible")) {
	   	$('#modalArray8').hide();
		$('#modalArray8').next().show();
	   } else if($('#modalArray9').is(":visible")) {
	   	$('#modalArray9').hide();
		$('#modalArray9').next().show();
	   } else if($('#modalArray10').is(":visible")) {
	   	$('#modalArray10').hide();
		$('#modalArray10').next().show();
	   } 
}
function togglePrev(){
	if($('#modalArray1').is(":visible")) {
	   	$('#modalArray1').hide();
		$('#modalArray1').prev().show();
	   } else if($('#modalArray2').is(":visible")) {
	   	$('#modalArray2').hide();
		$('#modalArray2').prev().show();
	   } else if($('#modalArray3').is(":visible")) {
	   	$('#modalArray3').hide();
		$('#modalArray3').prev().show();
	   } else if($('#modalArray4').is(":visible")) {
	   	$('#modalArray4').hide();
		$('#modalArray4').prev().show();
	   } else if($('#modalArray5').is(":visible")) {
	   	$('#modalArray5').hide();
		$('#modalArray5').prev().show();
	   } else if($('#modalArray6').is(":visible")) {
	   	$('#modalArray6').hide();
		$('#modalArray6').prev().show();
	   } else if($('#modalArray7').is(":visible")) {
	   	$('#modalArray7').hide();
		$('#modalArray7').prev().show();
	   } else if($('#modalArray8').is(":visible")) {
	   	$('#modalArray8').hide();
		$('#modalArray8').prev().show();
	   } else if($('#modalArray9').is(":visible")) {
	   	$('#modalArray9').hide();
		$('#modalArray9').prev().show();
	   } else if($('#modalArray10').is(":visible")) {
	   	$('#modalArray10').hide();
		$('#modalArray10').prev().show();
	   } else if($('#modalArray11').is(":visible")) {
		   	$('#modalArray11').hide();
	   		$('#modalArray11').prev().show();
	   }
}
//////////////////////////////////////////////////
////Append search box////////////////////////////
//////////////////////////////////////////////////
$('.search-container').append(`
	 <form action="#" method="get">
           <input type="search" id="search-input" class="search-input" placeholder="Search...">
           <input type="submit" value="&#x1F50D;" id="serach-submit" class="search-submit">
     </form>
`);
//////////////////////////////////////////////////
//////Filter students on key up//////////////////
////////////////////////////////////////////////
$('#search-input').keyup(function() {
	$('.card').hide();
	const searchVal = $(this).val().toLowerCase();
	const nameH3 = document.getElementsByClassName('card-name');
	for(let i = 0; i < nameH3.length; i++) {
		const name = nameH3[i].textContent.toLowerCase();
		if(name.startsWith(searchVal)) {
			$(nameH3[i]).parent().parent().show();
		} 
	}
});
//////////////////////////////////////////////////////
///////////CSS Styles////////////////////////////////
/////////////////////////////////////////////////
$('body').css('background-color', '#A5CC6B');
$('.header-text-container h1').css('color', '#806D40');