module.exports = function reverse (n) {
    if(n.toString().includes("-"))n=n*(-1);
  return (parseFloat(n.toString().split('').reverse().join('')) * Math.sign(n))                 
}
