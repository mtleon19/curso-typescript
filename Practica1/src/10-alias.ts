(()=>{
  type UserID = string | number | boolean;
  let userId: UserID;

  function greeting(myText: UserID) {
    if (typeof myText === 'string') {
      console.log(`string ${myText.toLowerCase()}`);
    }
  }


  //Literal Types
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  let shirtSize: Sizes;

  shirtSize = "M"; //CORRECTO
  shirtSize = "S"; //CORRECTO
 // shirtSize = "qwrty"; //ERROR. No está en las opciones.
//  shirtSize = "SS"; //ERROR. Letra de más.
  shirtSize = "L"; //CORRECTO
  shirtSize = "M";

  function yourSize( userSize: Sizes ){
      console.log(`Tu medida es ${userSize}`);
  }

  yourSize(shirtSize);
})();
