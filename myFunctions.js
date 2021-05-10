function saveUsername() {
	var input = document.getElementById("username").value;
	localStorage.setItem("username", input);
	localStorage.setItem("joined", 0);
	localStorage.removeItem("groupName");
}
	
function goBack() {
	window.history.back();
}

function setProfile() {
	var myName = localStorage.getItem("username");
	document.getElementById("username").innerHTML = myName;
	var pubGroup = localStorage.getItem("joined");
	if(pubGroup == 1) {
		var li = document.createElement("li");
		li.innerHTML = '<a href="publicGroup.html"> Play MK8 deluxe with me </a>';
		var ul = document.getElementById("groupList");
		ul.appendChild(li);
	}
	var gName = localStorage.getItem("groupName");
	if(gName != null) {
		var li = document.createElement("li");
		li.innerHTML = '<a href="myGroup.html">' + gName + '</a>';
		var ul = document.getElementById("groupList");
		ul.appendChild(li);
	}
}

function noFilter() {
	alert("Filter functionality not in prototype.");
}

function noSearch() {
	alert("Search functionality not in prototype.");
}

function checkJoined() {
	var pubGroup = localStorage.getItem("joined");
	if(pubGroup == 0) {
		var li = document.createElement("li");
		li.innerHTML = '<a href="publicGroup.html"> Play MK8 deluxe with me </a>';
		var ul = document.getElementById("groupSearchList");
		ul.appendChild(li);
	}
}

function publicGroupLoad() {
	var alreadyJoined = localStorage.getItem("joined");
	if(alreadyJoined == 0) {
		document.getElementById("joinButton").innerHTML = 'Join';
	} else {
		document.getElementById("joinButton").innerHTML = 'Leave';
	}
}

function joinGroup() {
	var alreadyJoined = localStorage.getItem("joined");
	if(alreadyJoined != 0) {
		localStorage.setItem("joined", 0);
		document.getElementById("joinButton").innerHTML = 'Join';
		alert("You left the group.");
	} else {
		localStorage.setItem("joined", 1);
		document.getElementById("joinButton").innerHTML = 'Leave';
		alert("You joined the group.");
	}
}

function saveDetails() {
	var gName = document.getElementById("groupName").value;
	localStorage.setItem("groupName", gName);
	var des = document.getElementById("description").value;
	localStorage.setItem("description", des);
	var game = document.getElementById("gameSelected").value;
	localStorage.setItem("gameSelected", game);
}

function createGroup() {
	var myGName = localStorage.getItem("groupName");
	document.getElementById("myName").innerHTML = myGName;
	var myDesc = localStorage.getItem("description");
	document.getElementById("myDescription").innerHTML = myDesc;
	var myGGame = localStorage.getItem("gameSelected");
	document.getElementById("currGame").innerHTML = "Current Game: " + myGGame;
}

function saveDetailsWP() {
	var wpName = document.getElementById("wpName").value;
	localStorage.setItem("wpName", wpName);
	var des = document.getElementById("wpDescription").value;
	localStorage.setItem("wpDescription", des);
	var game = document.getElementById("wpGameSelected").value;
	localStorage.setItem("wpGameSelected", game);
}

function createWP() {
	var myWPName = localStorage.getItem("wpName");
	document.getElementById("wpHeader").innerHTML = myWPName;
	var myDesc = localStorage.getItem("wpDescription");
	document.getElementById("myWPDescription").innerHTML = myDesc;
	var myWPName = localStorage.getItem("wpGameSelected");
	document.getElementById("currWPGame").innerHTML = "Current Game: " + myWPName;
}