// 快速排序
// 分区: 从数组中任意选择一个基准，所有比基准小的元素放到基准前面，比基准大的元素放到基准的后面
// 递归：递归地对基准前后的子数组进行分区
function quickSort(arr) {
  if (!arr.length || arr.length === 1) return arr
    const mid = arr[0]
    const left = []
    const right = []
    for (let i = 1; i < arr.length; i++) {
      if (arr[i]<mid) {
        left.push(arr[i])
      } else {
        right.push(arr[i])
      }
    }
    return [...quickSort(left),mid,...quickSort(right)]
}

let arr = [1,2,3,6,7,8,4,5]
console.log(quickSort(arr))

// 冒泡排序
// 比较所有相邻元素,如果第一个比第二个大，则交换它们
// 一轮下来保证可以找到一个数是最大的
// 执行n-1轮，就可以完成排序

function bubbleSort(arr) {
  if (!arr.length || arr.length === 1) return arr
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length-i-1; j++) {
      if (arr[j]>arr[j+1]) {
        let tem = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = tem
      }
    }
  }
  return arr
}
console.log(bubbleSort(arr))

// 选择排序
// 找到数组中的最小值，选中它并将其放置在第一位
// 接着找到第二个最小值，选中它并将其放置到第二位
// 执行n-1轮，就可以完成排序

function selectionSort(arr){
  if (!arr.length || arr.length === 1) return arr
  for (let i= 0; i < arr.length; i++) {
    let indexMin = i
    for (let j=i;j<arr.length;j++){
      if (arr[j]<arr[indexMin]) {
        indexMin = j
      }
    }
    if (indexMin !== i) {
      const temp = arr[i]
      arr[i] = arr[indexMin]
      arr[indexMin] = temp
    }
  }
  return arr
}

console.log(selectionSort(arr))