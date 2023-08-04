// hash counting
// https://leetcode.com/problems/letter-tile-possibilities
var numTilePossibilities = function (tiles) {
  const map = getHashMap(tiles)

  return dfs(map)
}

const dfs = (map) => {
  let count = 0

  for (const [key, value] of map.entries()) {
    console.log(key, value)
    if (value === 0) continue
    count++
    map.set(key, map.get(key) - 1)
    count += dfs(map, count)
    map.set(key, map.get(key) + 1)
  }

  return count
}

const getHashMap = (tiles, hashMap = new Map()) => {
  for (let i = 0; i < tiles.length; i++) {
    hashMap.set(tiles[i], hashMap.get(tiles[i]) + 1 || 1)
  }

  return hashMap
}
