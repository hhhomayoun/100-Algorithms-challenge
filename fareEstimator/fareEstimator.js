function fareEstimator(ride_time, ride_distance, cost_per_minute, cost_per_mile) {
 let result = [];
 for (let i = 0; i < cost_per_minute.length; i++) {
  result.push(Math.floor(ride_time * cost_per_minute[i] + ride_distance * cost_per_mile[i]))
 }
 return result;

}

console.log(fareEstimator(30, 7, [0.2, 0.35, 0.4, 0.45], [1.1, 1.8, 2.3, 3.5]));
