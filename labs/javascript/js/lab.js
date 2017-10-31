// Put your JavaScript lab code here!
let s = 'I like JavaScript more than I like to party.';
console.log(s.substring(28, 43));

let s2 = 'I love Washington State Unviersity';
s2 = s2.replace('Washington State Unviersity', 'University of Washington');
console.log(s2);

let s3 = s2 + ', ' + s;
console.log(s3);

function sum(n){
  let ret = 0;
  for (let i =1; i<=n; i++) {
    ret = ret+i;
  }

  return ret;
}

console.log(sum(5) + 'is 15, sum');


function vow(str) {
  let check = ['a','e','i','o','u']
  let ret = 0;
  for (let i = 0; i<str.length; i++) {
    if (check.includes(str.charAt(i))) {
      ret++;
    }
  }
  return ret;
}

console.log(vow('this is a message'), "= 6 vowels");

function smallNum(num) {
  let small = num[0];
  for(let i = 0; i<num.length; i++) {
    if (num[i] < small){
      small = num[i];
    }
  }
  return small;
}

console.log(smallNum([1,2,3,4,5,-100,6,4,100,-50]), "= -100, smallest num");

function longString(str) {
  let ret = '';
  if (str.length != 0){
    ret = str[0];
  }
  for (let i = 0; i<str.length; i++){
    if(str[i].length > ret.length){
      ret = str[i];
    }
  }
  return ret;
}

console.log(longString(['1234','123456','This is The Longest String in the Array','small']));



function removeString(arr, str){
  for(var i = arr.length - 1; i >= 0; i--){
    if(arr[i]===str){
      arr.splice(i,1);
    }
  }
  return arr;
}

console.log(removeString(['this','string','REMOVEME','is','ok','REMOVEME','!'], 'REMOVEME'));
