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
		case "109": //islamic education arabs g6
		case "284": //islamic education non arabs
		case "280": //islamic education non arabs g6
		case "129": //arabic language  arabs
		case "104": //arabic language  arabs g6
		case "283": //arabic language non arabs
		case "274": //arabic language non arabs g6
		case "131": //uae civics arabs
		case "135": //history arabs
		case "134": //geo arabs
		case "115": //UAE SOCIAL STUDIES-ARABS g6
		case "190": //uae soc non arab
		case "192": //UAE SOCIAL STUDIES-NON ARABS g6
			val = getArabSubMarks(mType,mCat);
			break;
		//academics
		case "132": //english
		case "106": //english g6
		case "138": //mathematics
		case "110": //mathematics g6
		case "141": //science
		case "113": //science g6
			val =  getAcaSubMarks(mType,mCat);
			break;
		//academics-sat
		case "305": //english sat
		case "302": //english sat g6
		case "306": //math sat
		case "301": //math sat g6
		case "427": //sci sat
		case "425": //sci sat g6
			val =  getAcaSatMarks(mType,mCat);
			break;
		//misc subjects
		case "142": //social studies english
		case "114": //social studies english-g6
		case "136": //it
		case "108": //it g6
		case "133": //french
		case "107": //french g6
		case "139": //music
		case "130": //art
		case "105": //art g6
 		case "140": //PE
		case "112": //PE g6
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
			val = "9.60";
			break;
		case "107": //homework
			val = "4.80";
			break;
		case "112": //final
			val = "14.40";
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
			val = "2.40";
			break;
		case "107": //homework
			val = "1.20";
			break;
		case "112": //final
			val = "3.60";
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