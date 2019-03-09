function digital_root(n) {
  // ...
 let n_1 = function root(n){
   if (n > 0) {
     return (n % 10) + root(Math.floor(n / 10));
   }
   else {
     return (n % 10);
   } 
 }();
 console.log(n_1);
 if ((n_1 % 10) > 0) {
   return digital_root(n_1);
 }
}