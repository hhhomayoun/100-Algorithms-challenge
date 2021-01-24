function fancyRide(l, fares) {
 uberFares = ['uberx', 'uberxl', 'uberplus', 'uberblack', 'ubersuv']

 let maxFare = l * fares[0];
 for (let i = fares.length - 1; i >= 0; i--) {
  if ((l * fares[i]) >= maxFare && (l * fares[i]) <= 20) {
   maxFare = l * fares[i]
   return uberFares[i]
  }
 }

}

console.log(fancyRide(30, [0.3, 0.5, 0.7, 1, 1.3]));