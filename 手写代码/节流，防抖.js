// 防抖
function debounce(fn,delay) {
  var timeout = null
  return function() {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      fn.apply(this, arguments)
    },delay)
  }
}

let fn = () => {
  console.log('防抖：', Math.random())
}

// 节流

function throttle(fn,delay) {
  var canRun = true
  return function() {
    if (!canRun) return
    setTimeout(() =>{
      fn.apply(this, arguments)
      canRun = false
    },delay)
  }
}