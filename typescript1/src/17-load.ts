import _ from 'lodash'; // el signo _ es para llamar a toda la libreria

const data = [
  {
    username: 'nico',
    role: 'admin'
  },
  {
    username: 'valentina',
    role: 'seller'
  },
  {
    username: 'zulema',
    role: 'seller'
  },{
    username: 'santiago',
    role: 'customer'
  },
  {
    username: 'isabela',
    role: 'customer'
  }
];

const rta = _.groupBy(data, (item) => item.role);

console.log(rta);


const lala = 1 + '1';

const lala1 = 1 + 1;
console.log(lala)
