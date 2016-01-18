-------------------------------
---check the checkbox----------
-------------------------------
var nodeList = document.querySelectorAll("input[type=checkbox]");
for(var i = 0; i < nodeList.length; i++) {
	if(nodeList[i].id.indexOf("ab") > -1)
	{
		var temp = nodeList[i].id.replace("ab","marks");
		var valOfTxtBox = document.getElementById(temp).value;
		if(valOfTxtBox == null || valOfTxtBox == "") {
			nodeList[i].checked = true;
		}
	}	
}

-------------------------------
----devils random--------------
-------------------------------
var nodeList = document.querySelectorAll("input[type=text]");
for(var i = 0; i < nodeList.length; i++) {
	if(nodeList[i].id.indexOf("marks") > -1)
	{
		if(nodeList[i].id.indexOf("$106") > -1 || nodeList[i].id.indexOf("$105") > -1)
		{
			document.getElementById(nodeList[i].id).value = maxTwenty();
		}else if(nodeList[i].id.indexOf("$107") > -1)
		{
			document.getElementById(nodeList[i].id).value = 10;
		}
		
	}	
}


function maxTwenty() {
	var min = 18, max = 21;
	return Math.floor(Math.random() * (max - min) + min);
}
-------------------------------
-------------------------------
-------------------------------
