(()=>{
  const calcTotal = (prices: number[]): string => {
    //string para que explicitamente retorne un string
    let total = 0;
    prices.forEach((item)=> {
      total += item;
    });
    return total.toString();
  }

  const printTotal = (prices: number[]): void => {
    //void para que explicitamente no retorne nada
    const rta = calcTotal(prices);
    console.log(`El total es ${rta}`);
  }

  const rta = calcTotal([1,2,1,1,1]);
  console.log(rta);

  printTotal([1,2,1,1,1]);
})();
