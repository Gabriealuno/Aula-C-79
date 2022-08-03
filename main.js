nameofstudentArray=[]
function submit()
{
    var displaystudentArray=[]
    for(var j=1; j<=4; j++) {
        var nameofstudentArray= document.getElementById("nameofstudent"+j).value;
        console.log(nameofstudent);
        nameofstudentArray.push(nameofstudent);
    }
console.log(nameofstudentArray);
var lenghofnameofstudetArray=nameofstudentArray.lengh;
console.log(lenghofnameofstudetArray);
for(var k=0; k<lenghofnameofstudetArray; k++) {
    displaystudentArray.push("<h4>NOME - "+nameofstudentArray[k]+"</h4>");
    console.log(displaystudentArray);
}
    console.log(displaystudentArray);

    document.getElementById("displaynamewithcommas").innerHTML = displaystudentArray;
    var removecommas=displaystudentArray.join(" ");
    console.log(displaystudentArray);

    document.getElementById("displaynamewithoutcommas").innerHTML = displaystudentArray;
    document.getElementById("submitbutton").style.display = "none";
    document.getElementById("sortbutton").style.display = "inline-block";
    
}
function sorting()
 { nameofstudentArray.sort();
     console.log(nameofstudentArray);
     document.getElementById("display").innerHTML = nameofstudentArray; }
     var displaystudentArraysorting=[];
     var lenghofnameofstudetArray=nameofstudentArray.lengh;
console.log(lenghofnameofstudetArray);
for(var k=0; k<lenghofnameofstudetArray; k++) {
    displaystudentArray.push("<h4>NOME - "+nameofstudentArray[k]+"</h4>");
    console.log(displaystudentArray);
}
    console.log(displaystudentArray);

    document.getElementById("displaynamewithcommas").innerHTML = displaystudentArray;
    var removecommas=displaystudentArray.join(" ");
    console.log(displaystudentArray);

    document.getElementById("displaynamewithoutcommas").innerHTML = displaystudentArray;



     