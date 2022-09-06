// console.log(global)
// global.gc(); // 0 每次查询内存都先执行gc()再memoryUsage()，是为了确保垃圾回收，保证获取的内存使用状态准确

// function usedSize() {
//     const used = process.memoryUsage().heapUsed;
//     return Math.round((used / 1024 / 1024) * 100) / 100 + "M";
// }

// console.log(usedSize()); // 1 初始状态，执行gc()和memoryUsage()以后，heapUsed 值为 1.64M

// var map = new WeakMap();
// var b = new Array(5 * 1024 * 1024);

// map.set(b, 1);

// global.gc();
// console.log(usedSize()); // 2 在 Map 中加入元素b，为一个 5*1024*1024 的数组后，heapUsed为41.82M左右

// b = null;
// global.gc();

// console.log(usedSize()); // 



// 二分法
let arr = [1,2,3,4,5,6,7,8,9,10]
let target = 3
function search(arr,target) {
    let count = 0
    let start = 0
    let end = arr.length-1
    while(start<=end) {
       let mid = Math.floor((start+end)/2)
       if(target===arr[mid]){
        return mid
       } 
       if (target<arr[mid]) {
        end = mid
       }
       if (target>arr[mid]) {
        start = mid
       }
       count ++
    }
}
// console.log(search(arr,target))

// 冒泡排序
let arr1 = [10,21,13,41,15,26,37]
function arrSort(arr) {
    for(let i=0;i<arr.length-1;i++) {
        for(let j=0;j<arr.length-i-1;j++){
            if (arr[j]<arr[j+1]) {
                let tem = arr[j+1]
                arr[j+1] = arr[j]
                arr[j] = tem
            }
        }
    }
    return arr
}
// console.log(arrSort(arr1))

// 数组转为tree
const arr11 = [
    { id: 1, parent: 0 },
    { id: 2, parent: 1 },
    { id: 3, parent: 1 },
    { id: 4, parent: 2 },
    { id: 5, parent: 2 },
    { id: 6, parent: 3 },
];
function getChildren(arr, id){
  return arr.filter(item => item.parent === id).map(item => {
    item.children = getChildren(arr, item.id)
    return item
  })
}
// console.log(JSON.stringify(getChildren(arr11, 0)))
// [{"id":1,"parent":0,"children":[{"id":2,"parent":1,"children":[{"id":4,"parent":2,"children":[]},{"id":5,"parent":2,"children":[]}]},{"id":3,"parent":1,"children":[{"id":6,"parent":3,"children":[]}]}]}]

