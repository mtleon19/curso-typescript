(()=>{
    // let myNumber: number = undefined; //no se puede hacer
    // let myString: string = null;

    //TypeScript
    let myVar = null; //Tipo any
    let otherVar = undefined; //Tipo any

    let myNull: null = null; // Tipo null
    let myUndefined: undefined = undefined; //Tipo undefined

    let myNumber: number | null = null;
    myNumber = 50;

    let myString: string | undefined = undefined;
    myString = "Hola TypeScript";

    function hi(name:string | null){
        let hello = 'Hola ';
        if (name){
            hello += name.toLowerCase(); //no sale error porq esta dentro del if validado el string
        } else {
            hello += 'nobody';
        }
        console.log(hello);
    }

    function hiv2(name:string | null){
        let hello = 'Hola ';
        hello += name?.toLowerCase() || 'nobody'; // ? valida que el name sea string
        console.log(hello);
    }

    hi('Merlina');
    hi(null);   

    hiv2('Nicolas');
    hiv2(null);    

})();
