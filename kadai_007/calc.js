num = Math.floor(Math.random() * 15);

console.log(num);


if (num % 3 === 0 && num % 5 === 0) {
  console.log('３と５の倍数です');
}
else if (num % 3 === 0){
  console.log('３の倍数です');
}
else if (num % 5 === 0) {
  console.log('５の倍数です');
}
else {
  console.log(num);
}





