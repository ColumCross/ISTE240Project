function $(id) {
	return document.getElementById(id);
}
function current() {
	x = document.URL;
	lst = x.split("/");
	y = lst[6];
	lst2 = y.split(".", 1);
	return String(lst2);
}
function checker(page) {
	if(page == "index" || page == "history_index" || page == "famdex" || page == "photos" || page == "other" || page == "location") {
		$(page).style.color = "#000";
	} else if(page == "building" || page == "local_history" || page == "beginning") {
		$('history_index').style.color = "#542F21";
		$(page).style.color = "#000";
	} else if(page == "family" || page == "owners") {
		$('famdex').style.color = "#542F21";
		$(page).style.color = "#000";
	} else if(page == "about" || page == "references") {
		$('other').style.color = "#542F21";
		$(page).style.color = "#000";	
	} else {
		$('index').style.color = "#000";
	}	
}
function basicChanger(page) {
	$(page).style.color = "#000";
}
function Main() {
	checker(current());
	//basicChanger(current());
}