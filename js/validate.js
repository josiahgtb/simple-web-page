//To change text

function changeText(){
	var content = document.getElementById('text');
	var prev = content.innerText;
	if (prev == "WELCOME") {
		content.innerText = "RESPONSIVE WEB DESIGN";
	}
	else {
		content.innerText = "WELCOME";
	}
}

//To change image

function changeImg(){
	var content = document.getElementById('pic');
	if (content.src.match("capture")) {
		content.src = "images/ipad.jpg";
	}
	else {
		content.src = "images/capture.jpg";
	}
}



//validating the Form

function validateForm(){
	var name = document.getElementById('name').value;
	var phoneNum = document.getElementById('phoneNum').value;
	var date_of_birth = document.getElementById('date_of_birth').value;
	var email = document.getElementById('email').value;
	var password = document.getElementById('password').value;
	var confirm_password = document.getElementById('confirm_password').value;

	if(name == "" && phoneNum == "" && date_of_birth == "" && email == "" && password == "" && confirm_password == "") {
		alert("*All inputs must be filled")
		return false;
	}

	if(name == "" ) {
		alert("*Please fill the name field")
		return false;
	}

	if(phoneNum == "" ) {
		alert("*Please fill the phone number field")
		return false;
	}

	if(phoneNum.length!=11) {
		alert("*Phone number must be 11 digits only")
		return false;
	}


	if(date_of_birth == "" ) {
		alert("*Please fill the date of birth field")
		return false;
	}

	if(email == "" ) {
		alert("*Please fill the email field")
		return false;
	}

	if(password == "" ) {
		alert("*Please enter password")
		return false;
	}

	if((password.length <= 6) || (password.length > 20)) {
		alert("*Password length must be between 6 and 20")
		return false;
	}

	
	if(confirm_password == "" ) {
		alert("*Please confirm password")
		return false;
	}

	if(password!=confirm_password) {
		alert("*Passwords do not match")
		return false;
	}
	
	else {
		alert("Nicely Done!")
		return true;
	}

}

//Displaying Date and Time

function renderTime(){
	//Date
	var mydate = new Date();
	var year = mydate.getYear();
	if (year < 1000) {
		year +=1900
	}
	var day = mydate.getDay();
	var month = mydate.getMonth();
	var daym = mydate.getDate();
	var dayarray = new Array("Sunday,","Monday,","Tuesday,","Wednesday,","Thursday,","Friday,","Saturday,");
	var montharray = new Array("January","February","March","April","May","June","July","August","September","October","November","December");
	//End Date

	//Time
	var currentTime = new Date();
	var h = currentTime.getHours();
	var m = currentTime.getMinutes();
	var s = currentTime.getSeconds();
		if(h == 24){
			h = 0;
		} else if(h > 12){
			h = h - 0;
		}
		if(h < 10){
			h = "0" + h;
		}
		if(m < 10){
			m = "0" + m;
		}
		if(s < 10){
			s = "0" + s;
		}

		var myClock = document.getElementById("clockDisplay");
		myClock.textContent = "" +dayarray[day]+" "+montharray[month]+" "+daym+", "+year+ " | "+h+":"+m+":"+s;
		myClock.innerText = "" +dayarray[day]+" "+montharray[month]+" "+daym+", "+year+" | "+h+":"+m+":"+s;

		setTimeout("renderTime()", 1000);
}
renderTime();