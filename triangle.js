 function triangle()
 {
   var side1 = document.getElementById('sidea').value;
   var side2= document.getElementById('sideb').value;
   var side3= document.getElementById('sidec').value;

   /*Side1= (a + b);

   Side2= (a + c);

   side3= (c + b);*/
    

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