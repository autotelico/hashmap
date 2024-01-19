class HashMap {
  constructor(arrSize) {
    this.map = new Array(arrSize);
    this.map.fill(null)
    this.capacity = arrSize;
    this.loadFactor = 0.75;
  }
  hash(string) {
    let hashCode = 0;
    let prime = 13;
    for (const letter of string) {
      hashCode = prime * hashCode + string.charCodeAt(letter);
    }
    return hashCode % this.capacity;
  }
  set(key, value) {
    const index = this.hash(key)
    if (!this.map[index]) {
        this.map[index] = {}
    }
    this.map[index][key] = value;
  }
  get(key) {
    return this.map[this.hash(key)]
  }
}

const hashmap = new HashMap(16)
hashmap.set('age', 22)
console.log(hashmap.get('age'));
// console.log(hashmap.map);