function clone(obj) {
  if (typeof obj === 'object') {
    let result = obj instanceof Array ? [] : {}
    for (let key in obj) {
      result[key] = clone(obj[key])
    }
    return result
  } else {
    return obj
  }
}

let obj = {
  name: '123',
  age: 18,
  gender: {
    h: 'male',
    f: 'female',
    obj: {
      name: '111'
    }
  },
  arr: [123, '123']
}
console.log(clone(obj))