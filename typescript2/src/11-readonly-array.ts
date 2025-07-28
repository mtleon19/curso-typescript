const numbers: number[]= [1,2,2,2];
numbers.push(9);
numbers.push(10);
numbers.pop();
numbers.unshift(1);
numbers.filter(()=> {})
numbers.reduce(() => 0)
numbers.map(() => 0)

console.log(numbers);

/*
//con Readonly no se permiten las sgtes funciones
const numbers2: ReadonlyArray<number> = [1,2,2,2];
numbers2.push(9);
numbers2.pop();
numbers2.unshift(1);
numbers2.filter(()=> {})
numbers2.reduce(() => 0)
numbers2.map(() => 0)
*/
