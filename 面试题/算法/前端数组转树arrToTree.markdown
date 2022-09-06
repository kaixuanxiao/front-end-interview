### 前端数组转树getChildren

例如，有数组 arr 如下：
```js
const arr = [
    { id: 1, parent: 0 },
    { id: 2, parent: 1 },
    { id: 3, parent: 1 },
    { id: 4, parent: 2 },
    { id: 5, parent: 2 },
    { id: 6, parent: 3 },
];

function getChildren(arr, id){
  arr.filter(item => item.parent === id).map(item => {
    item.children = getChildren(arr, item.id)
    return item
  })
}

getChildren(arr, 0)

// 转为Tree结构
{
  "id": 1,
  "children": [
      {
          "id": 2,
          "children": [
              {
                  "id": 4
              },
              {
                  "id": 5
              }
          ]
      },
      {
          "id": 3,
          "children": [
              {
                  "id": 6
              }
          ]
      }
  ]
}

// 方案1思路：递归生成每个元素的子元素树，每一次递归函数都要遍历查找一次
function getChildren(parent) {
  return arr.filter(item => item.parent === parent ).map( item => {
    item.children = getChildren(item.id)
    return item
  })
}
let tree = getChildren(0)

// 方案2思路：
{
  // 生成一个父子对应表{id: [子元素]}
  let map = {} 
  arr.forEach((item, index) => {
    const parent = item.parent
    if(!map[parent]) {
      map[parent] = [item]
    }else {
      map[parent].push(item)
    }
  })
  // 根据对应表生成tree
  function getTree(item) {
    const id = item["id"]
    if(!map[id]) return item
    return {
      ...item,
      children: map[id].map(_item => getTree(_item))
    }
  }
  let tree = getTree(map['0'])  
}


```
