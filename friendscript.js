function openNav() {
    document.getElementById("mySidenav").style.width = "200px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    $(".hide").removeClass("addme");
}
// $('#exampleModal').on('shown.bs.modal', function () {
//   $('#myInput').trigger('focus')
// })
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});

// $(".look").click(function(){
// 	$('this').toggleClass('addme').siblings().removeClass('addme');
// });

$(".poop").click(function(){
	// $(".poop").removeClass("look");
	// $(this).toggleClass('look');
	var index = $(this).index() + 1;
	console.log(index);
	var showme = "#click"+ index.toString();
	console.log(showme); 
	$(".hide").fadeOut(0).removeClass("addme");
	$(showme).fadeIn().toggleClass("addme");
	// var test = this.id;
	// test = test + '2';
	// console.log(test);
	// console.log(typeof test);
	// test = "#" + test;
	// $(test).toggleClass('look');
});
