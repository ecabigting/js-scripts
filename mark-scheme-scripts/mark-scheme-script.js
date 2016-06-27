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

function checkSubjectID(mType,sId,mCat){
		var val = "";
		switch(sId) {
		//arab subjects
		//grade 9IG
		//50/100
		case "265": //islamic education arabs g9IG
		case "288": //islamic education non arabs g9IG
		case "259": //ARABIC LANGUAGE ARABS g9IG
		case "287": //arabic language non arabs g9IG
		case "321": //history arabs g9IG
		case "318": //UAE CIVICS ARABS g9IG
		case "319": //Gero Arabs g9IG
		case "270": //UAE SOCIAL STUDIES-NON ARABS g9IG
		case "137": //islamic education arabs g8
		case "109": //islamic education arabs g6
		case "122": //islamic education arabs g7
		case "284": //islamic education non arabs g8
		case "282": //islamic education non arabs g7
		case "280": //islamic education non arabs g6
		case "129": //arabic language arabs g8
		case "116": //arabic language arabs g7
		case "104": //arabic language arabs g6
		case "283": //arabic language non arabs g8
		case "281": //arabic language non arabs g7
		case "274": //arabic language non arabs g6
		case "131": //uae civics arabs
		case "135": //history arabs
		case "134": //geo arabs
		case "115": //UAE SOCIAL STUDIES-ARABS g6
		case "128": //UAE SOCIAL STUDIES-ARABS g7
		case "190": //uae soc non arab g8
		case "118": //UAE CIVICS ARABS G7
		case "191": //uae soc non arab g7
		case "192": //UAE SOCIAL STUDIES-NON ARABS g6
		//grade9
		//50/100
		case "150": //islamic education arabs g9
		case "286": //islamic education non arabs g9
		case "189": //UAE SOCIAL STUDIES-NON ARABS g9
		case "148": //History-Arabs G9
		case "147": //Geo arabs G9
		case "145": //UAE CIVICS ARABS G9
		case "285": //arabic language non arabs g9
		case "143": //arabic language arabs g9
		//grade10 acedenucs case
		//50/110
		case "160": //islamic education arabs g10
		case "290": //islamic education non arabs g10
		case "155": //ARABIC LANGUAGE ARABS g10
		case "289": //arabic language non arabs g10
		//grade11 academics case
		//50/100
		case "171": // islamic - arabs g11
		case "294": // islamic non arabs g11
		case "165": // arab lang g11
		case "293": // arab lang non arab g11
			val = getArabSubMarks(mType,mCat);
			break;
		//academics
		case "132": //english g8
		case "106": //english g6
		case "119": //english g7
		case "138": //mathematics g8
		case "110": //mathematics g6
		case "123": //mathematics g7
		case "141": //science g8
		case "113": //science g6
		case "126": //science g7
			val =  getAcaSubMarks(mType,mCat);
			break;
		//academics-sat
		case "305": //english sat g8
		case "303": //english sat g7
		case "302": //english sat g6
		case "306": //math sat g8
		case "301": //math sat g6
		case "304": //math sat g7
		case "427": //sci sat g8
		case "426": //sci sat g7
		case "425": //sci sat g6
			val =  getAcaSatMarks(mType,mCat);
			break;
		//misc subjects
		case "142": //social studies english g8
		case "127": //social studies english g7
		case "114": //social studies english g6
		case "136": //it g8
		case "108": //it g6
		case "121": //it g7
		case "133": //french g8
		case "107": //french g6
		case "120": //french g7
		case "139": //music g8
		//case "403": //music g6-old
		case "111": //music g6
		case "124": //music g7
		case "130": //art g8
		case "105": //art g6
		case "117": //art g7
 		case "140": //PE g8
		case "112": //PE g6
		case "125": //PE g7
		//grade9
		//60/100
		case "152": //PE g9
		case "149": //it g9
		case "153": //science g9
		case "151": //mathematics g9
		case "154": //History-English G9
		case "146": //english g9
		//grade9IG
		//60/100
		case "263": //english g9IG
		case "266": //mathematics g9IG
		case "268": //physics g9IG
		case "262": //chemistry g9IG
		case "260": //biology g9IG
		case "264": //it g9IG
		case "261": //business studies g9IG
		case "267": //PE g9IG
		//grade10
		//60/100
		case "158": //english g10
		case "161": //mathematics g10	
		case "163": //physics g10
		case "157": //chemistry g10
		case "156": //biology g10
		case "162": //PE g10
		case "159": //it g10
		case "164": //economics g10
		//grade11
		//60/100
		case "169": //eng g11
		case "172": //math g11
		case "174": //physics g11
		case "168": //chem g11
		case "166": //bio g11
		case "170": //IT g11
		case "167": //Business studies g11
		case "175": //Socio g11
		case "400": //PSYCHOLOGY g11
		case "173": // PE g11
		//grade12 academics case
		//60/100
		case "181": //ISLAMIC EDUCATION- ARABS g12
		case "298": //ISLAMIC EDUCATION- NON ARABS g12
		case "176": //ARABIC LANGUAGE- ARABS g12
		case "297": //ARABIC LANGUAGE- NON ARABS g12
		case "179": //ENGLISH g12	
		case "182": //MATHEMATICS g12
		case "184": //PHYSICS g12
		case "178": //CHEMISTRY g12
		case "177": //BIOLOGY g12
		case "180": //IT g12
		case "428": //BUSINESS STUDIES g12
		case "186": //ENTERPRENEURSHIP g12
		case "185": //PSYCHOLOGY g12
		case "183": //PHYSICAL EDUCATION g12	
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