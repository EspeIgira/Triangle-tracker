
 function triangle()
 {
  /*var side = [side1,side2,side3]*/


   var side1= document.getElementById('sideA').value;
   var side2= document.getElementById('sideB').value;
   var side3= document.getElementById('sideC').value;

   if(side1===side2>0 && side2===side3>0 && side1===side3>0){
    alert("Equilateral");

   }
   else if(side1===side2 || side2===side3 || side1===side3){
     alert("Isoscele");
   }
   else if(side1!==side2 || side2!==side3 || side1!==side3){
    alert("Scalene");
   }
   else{
     alert("Not a triangle");
   }
 }