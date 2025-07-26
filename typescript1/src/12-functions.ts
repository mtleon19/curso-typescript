(()=> {
  type Sizes = 's' | 'M' | 'L' | 'XL'; //Alias y Tipos Literales

  function createProductJson(
      title: string,
      createdAt: Date,
      stock: number,
      size: Sizes
  ){
    return {
          title,
          createdAt,
          stock,
          size
      }
  }

  const producto1 = createProductJson('P1', new Date('10/10/3030'), 12, 'XL')
  console.log(producto1);
  console.log(producto1.title);
  console.log(producto1.stock);

  //trabajar con arrow functions
  const createProductJsonv2 = (
      title: string,
      createdAt: Date,
      stock: number,
      size?: Sizes // con el signo ?, el parametro sera opcional
  ) => {
    return {
          title,
          createdAt,
          stock,
          size
      }
  }

  const producto2 = createProductJsonv2('P1', new Date(), 12, 'XL')
  console.log(producto2);
  console.log(producto2.title);
  console.log(producto2.stock);

})();


