var minTimeToVisitAllPoints = function  (points) {
  t steps = 0
  ints.forEach((p, i )  =>  {
    i  >  0 ) {
      += maxDist(p, points[i - 1])  
}
})

return steps
}

function maxDist(p1, p2) {
return Math.max(Math.abs(p1[0] -   p2[0]), Math.abs(p1[1]   - p2[1])
}

