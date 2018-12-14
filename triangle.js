 function triangle()
 {
   var side1 = document.getElementById('sidea').value;
   var side2= document.getElementById('sideb').value;
   var side3= document.getElementById('sidec').value;

   if((side1===side2 && side2===side3 && side1===side3)){
    alert("Equilateral");

   }
   else if((side1===side2 || side2===side3 || side1===side3)){
     alert("Isoscele");
   }
   else if((side1!==side2 || side2!==side3 || side1!==side3)){
    alert("Scalene");
   }
   else{
     alert("Not a triangle");
   }
 }