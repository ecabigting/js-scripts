var nodeList = document.querySelectorAll("input[type=text]");
for(var i = 0; i < nodeList.length; i++) {
	//PM?122?105?0?0.0?A
	//<mark type>?<subject id>?<mark category>
	var txtboxIDs = nodeList[i].id.split("?");
	if(txtboxIDs[0] == "PM" || txtboxIDs[0] == "OM") {
		var newval = checkSubjectID(txtboxIDs[0],txtboxIDs[1],txtboxIDs[2]);
		document.getElementById(nodeList[i].id).value = newval;
	}
}

//grade 8 set
function checkSubjectID(mType,sId,mCat){
		var val = "";
		switch(sId) {
		//arab subjects
		case "137": //islamic education arabs 
		case "284": //islamic education non arabs
		case "129": //arabic language  arabs
		case "283": //arabic language non arabs
		case "131": //uae civics arabs
		case "135": //history arabs
		case "134": //geo arabs
		case "190": //uae soc non arab
			val = getArabSubMarks(mType,mCat);
			break;
		//academics
		case "132": //english
		case "138": //mathematics
		case "141": //science
			val =  getAcaSubMarks(mType,mCat);
			break;
		//academics-sat
		case "305": //english sat
		case "306": //mat sat
		case "427": //sci sat
			val =  getAcaSatMarks(mType,mCat);
			break;
		//misc subjects
		case "142": //social studies english
		case "136": //it
		case "133": //french
		case "139": //music
		case "130": //art
		case "140": //PE
			val = getMiscSubMarks(mType,mCat);
			break;
		default:
			val = "0"; 
	}
	return val;
}

function getArabSubMarks(mType,mCat){
	var val = "";
	switch(mType){
		case "PM":
			val = arabPM(mCat);
			break;
		case "OM":
			val = arabOM(mCat);
			break;
		default:
			val = "0";
	}
	return val;
}

function arabPM(mCat) {
	var val = "";
	switch(mCat){
		case "106": //quizes
		case "105": //classwork
		case "111": //midterm
			val = "10";
			break;
		case "107": //homework
			val = "5";
			break;
		case "112": //final
			val = "15";
			break;
		default:
			 val = "0";
	}
	return val;
}

function arabOM(mCat) {
	var val = "";
	switch(mCat){
		case "106": //quizes
		case "105": //classwork
		case "111": //midterm
			val = "20";
			break;
		case "107": //homework
			val = "10";
			break;
		case "112": //final
			val = "30";
			break;
		default:
		 val = "0";
	}
	return val;
}

function getAcaSubMarks(mType,mCat){
	var val ="";
	switch(mType){
		case "PM":
			val = acaPM(mCat);
			break;
		case "OM":
			val = acaOM(mCat);
			break;
		 default:
			val = 0;
	}
	return val;
}

function acaPM(mCat) {
	var val = "";
	switch(mCat){
		case "106": //quizes
		case "105": //classwork
		case "111": //midterm
			val = "9.6";
			break;
		case "107": //homework
			val = "4.8";
			break;
		case "112": //final
			val = "14.4";
			break;
		default:
			 val = "0"; 
	}
	return val;
}

function acaOM(mCat) {
	var val = "";
	switch(mCat){
		case "106": //quizes
		case "105": //classwork
		case "111": //midterm
			 val = "16";
			 break;
		case "107": //homework
			val = "8";
			break;
		case "112": //final
			val = "24";
			break;
		default:
			 val = "0"; 
	}
	return val;
}

function getAcaSatMarks(mType,mCat) {
	var val ="";
	switch(mType){
		case "PM":
			val = satPM(mCat);
			break;
		case "OM":
			val = satOM(mCat);
			break;
		 default:
			val = "0";
	}
	return val;
}

function satPM(mCat) {
	var val = "";
	switch(mCat){
		case "106": //quizes
		case "105": //classwork
		case "111": //midterm
			val = "2.4";
			break;
		case "107": //homework
			val = "1.2";
			break;
		case "112": //final
			val = "3.6";
			break;
		default:
			 val = "0"; 
	}
	return val;
}

function satOM(mCat) {
	var val = "";
	switch(mCat){
		case "106": //quizes
		case "105": //classwork
		case "111": //midterm
			val = "4.0";
			break;
		case "107": //homework
			val = "2";
			break;
		case "112": //final
			val = "6.0";
			break;
		default:
			 val = "0"; 
	}
	return val;	
}

function getMiscSubMarks(mType,mCat) {
	var val ="";
	switch(mType){
		case "PM":
			val = miscPM(mCat);
			break;
		case "OM":
			val = miscOM(mCat);
			break;
		 default:
			val = 0;
	}
	return val;
}

function miscPM(mCat){
	var val = "";
	switch(mCat){
		case "106": //quizes
		case "105": //classwork
		case "111": //midterm
			val = "12";
			break;
		case "107": //homework
			val = "6";
			break;
		case "112": //final
			val = "18";
			break;
		default:
			 val = "0"; 
	}
	return val;
}

function miscOM(mCat) {
	var val = "";
	switch(mCat){
		case "106": //quizes
		case "105": //classwork
		case "111": //midterm
			val = "20";
			break;
		case "107": //homework
			val = "10";
			break;
		case "112": //final
			val = "30";
			break;
		default:
			 val = "0"; 
	}
	return val;
}