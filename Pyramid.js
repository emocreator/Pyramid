export const pyramid_down = pyramid => {
  let minified = []
  pyramid.forEach((r, i) => {
    minified.push(r.map(e => {
      return (i === pyramid.length - 1) ? e : 0
    }))
  })
 
  for (let i = minified.length - 2; i >= 0; i--)
      for (let j = 0; j < minified[i].length; j++)
        minified[i][j] = pyramid[i][j] + Math.min(minified[i+1][j], minified[i+1][j+1])
     
  return minified[0][0];
}
