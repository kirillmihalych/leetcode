class MyHashMap {
  constructor() {
    this.prime = 107
    this.arr = [...Array(this.prime)].map(() => [])
  }

  put(key, value) {
    const [idx1, idx2] = this._getLocation(key)
    if (idx2 === -1) this.arr[idx1].push([key, value])
    else this.arr[idx1][idx2][1] = value
  }

  get(key) {
    const [idx1, idx2] = this._getLocation(key)
    if (idx2 === -1) return -1
    return this.arr[idx1][idx2][1]
  }

  remove(key) {
    const [idx1, idx2] = this._getLocation(key)
    if (idx2 === -1) return
    this.arr[idx1].splice(idx2, 1)
  }

  _getLocation(key) {
    const idx = key % this.prime
    for (let i = 0; i < this.arr[idx].length; i++) {
      if (this.arr[idx][i][0] === key) return [idx, i]
    }
    return [idx, -1]
  }
}
