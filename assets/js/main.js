// JS for Sudipto Ghosh

var closeSidebarBtn = document.getElementById('btn-close-sidebar');
var backtotopBtn = document.getElementById('back-to-top');

function openSidebar() {
    document.getElementById('side-menu').style.width = "100%";
    closeSidebarBtn.classList.add('animate'); // Add class
    document.getElementById('back-to-top').style.display = "none";
    backtotopBtn.classList.add('animate'); // Add class

}

function closeSidebar() {
    document.getElementById('side-menu').style.width = "0%";
    closeSidebarBtn.classList.remove('animate'); // Remove class;
    document.getElementById('back-to-top').style.display = "block";
    backtotopBtn.classList.remove('animate'); // Add class

}

var modal = document.getElementById('contact-modal');
var span = document.getElementsByClassName("close")[0];

function openModal() {
    modal.style.display = "block";
}

span.onclick = () => {
    modal.style.display = "none";
}

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var paymodal = document.getElementById('payment-modal');

function openpayModal() {
    paymodal.style.display = "block";
}

function closepayModal() {
    paymodal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == paymodal) {
        paymodal.style.display = "none";
    }
}

function getQueryVariable(variable) {
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}
var submit;
const contactForm = document.querySelector(".contact-form");
function formSubmission(submit) {
       const param = getQueryVariable("submit");
       
       if (param == 'success') {
		openModal();
		contactForm.innerHTML = "<div id='post-submission'><p><i class='fas fa-lg fa-check-circle'></i></p><p>Message Sent</p></div>";
		document.getElementById('post-submission').style.display = "grid";
		document.getElementById('post-submission').style.color = "green";
		//document.getElementById('post-submission').style.border = "2px solid green";
		// console.log("Success!");
       }
       else if (param == 'failure') {
	        // console.log("Failure!");
		openModal();
		contactForm.innerHTML = "<div id='post-submission'><p><i class='fas fa-lg fa-times-circle'></i></p><p>Error</p></div>";
                document.getElementById('post-submission').style.display = "grid";
		document.getElementById('post-submission').style.color = "red";
		//document.getElementById('post-submission').style.border = "2px solid red";
       }
       else {
		// console.log("Form not submitted!");
       }
	
}
formSubmission(submit);
