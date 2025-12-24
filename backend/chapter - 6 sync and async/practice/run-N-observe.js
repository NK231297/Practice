console.log('one');

console.log('two');

const callThree = ()=>{
  console.log('three');
};

const callThreeAndFour = ()=>{
  callThree();
  console.log('four');
};

callThreeAndFour();