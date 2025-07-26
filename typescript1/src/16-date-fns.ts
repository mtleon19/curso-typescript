import { subDays, format } from 'date-fns';


console.log(new Date(1998, 1, 20));
const date = new Date(1998, 1, 20); // 0 = enero, 1 = febrero
const rta = subDays(date, 10);
console.log(rta);
const str = format(rta, 'yyyy/MM/dd');

console.log(str);

console.log("==================================")
console.log(new Date(2014, 8, 1));
const result = subDays(new Date(2014, 8, 1), 10);
console.log(result);
const str2 = format(result, 'yyyy/MM/dd');
console.log(str2);
