var x1 = "";
var x2 = "";
var x3 = "";
var x4 = "";
var x5 = "";

var str1 = "";
var str2 = "";
var str3 = "";

function clicksubmit() {

    x1 = document.getElementById('name').value;
    x2 = document.getElementById('email').value;
    x3 = document.getElementById('id').value;
    x4 = document.getElementById('url').value;
    x5 = document.getElementById('message').value;

	if(x1 == "" || x2 == "" || x3 == "" || x4 == "" || x5 == "")
	    alert('Fill all fields');
	else{
		checksubjectandmessage();
		checkid();
		checkemail();

		if(str1 != "" && str2 == "" && str3 == "")
		    alert(str1);
		else
		if(str1 == "" && str2 != "" && str3 == "")
		    alert(str2);
		else
		if(str1 == "" && str2 == "" && str3 != "")
		    alert(str3);
		else
		if(str1 != "" && str2 != "" && str3 == "")
		    alert(str1+"\n"+str2);
		else
		if(str1 != "" && str2 == "" && str3 != "")
		    alert(str1+"\n"+str3);
		else
		if(str1 == "" && str2 != "" && str3 != "")
		    alert(str2+"\n"+str3);
		else
		if(str1 != "" && str2 != "" && str3 != "")
		    alert(str1+"\n"+str2+"\n"+str3);
		else{
            var domain = x2.split("@");
            var address = x4.split(".");
            alert('Domain: '+domain[1]+"\n"+
            	  'Username URL: '+address[0]);
		}                     
	}
}

function checksubjectandmessage() {

	for(var i=0; i<x1.length; i++)
	    if(x1[i] == '0' || x1[i] == '1' || x1[i] == '2' || x1[i] == '3' || x1[i] == '4' ||
		    x1[i] == '5' || x1[i] == '6' || x1[i] == '7' || x1[i] == '8' || x1[i] == '9')
		{
            str1 = "/ Subject field contains numaric value"+"\n";
            break;
	    }

    for(var i=0; i<x5.length; i++)
     	if(x5[i] == '0' || x5[i] == '1' || x5[i] == '2' || x5[i] == '3' || x5[i] == '4' ||
			x5[i] == '5' || x5[i] == '6' || x5[i] == '7' || x5[i] == '8' || x5[i] == '9')
		{
            str1 = str1+"/ Message field contains numaric value";
            break;
	    }
}

function checkid() {

	for(var i=0; i<x3.length; i++)
	    if(x3[i] != '0' && x3[i] != '1' && x3[i] != '2' && x3[i] != '3' && x3[i] != '4' &&
		    x3[i] != '5' && x3[i] != '6' && x3[i] != '7' && x3[i] != '8' && x3[i] != '9')
		{
            str2 = "/ ID field contains non numaric value(string)";
            break;
	    } 
}

function checkemail() {
	
	var x = 0;
	for(var i=0; i<x2.length; i++)
	    if(x2[i] == '@')
		{
            x++;
	    }

	if(x == 0)
	    str3 = "/ Validation of email incorrect, doesnt contain(@)";   
}