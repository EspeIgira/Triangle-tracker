
 function triangle()
 {
  var side = [side1,side2,side3];

   var side1= parseInt(document.getElementById('sidea').value);
   var side2= parseInt(document.getElementById('sideb').value);
   var side3= parseInt(document.getElementById('sidec').value);

  if((side1+side2>side3) && (side1+side3>side2) && (side2+side3>side1)){

    alert("This can be a triangle");

   if((side1 === side2) && (side2 === side3) && (side1 === side3))
   {
    alert("This triangle is Equilateral.");
   }
   else if((side1 === side2) || (side2 === side3) || (side1 === side3))
   {
     alert("This triangle is Isoscele.");
   }
   else if((side1!==side2) || (side2!==side3) || (side1!==side3) && (side2!==0))
   {
    alert("This triangle is Scalene.");
   }
  }
   else
   {
     alert("There is no any existence of a triangle.");
   }
    };