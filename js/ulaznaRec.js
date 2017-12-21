var b =document.getElementById("a");


function reverseString() {

var str=b.value;

/*	 var newString = "";
	 for (var i = str.length - 1; i >= 0; i--) { 
        newString += str[i]; 
        
}
         document.getElementById("ispis").innerHTML=newString;
    if (str===newString)  {
    	 document.getElementById("ispis1").innerHTML="uneta rec JESTE palindrom";

    }
else {
	document.getElementById("ispis1").innerHTML="uneta rec NIJE palindrom";
}
*/
var strspl=str.split("");
console.log(strspl);
 var rev=strspl.reverse();
console.log(rev);
var joi=rev.join("");
console.log(joi);



 }
 
