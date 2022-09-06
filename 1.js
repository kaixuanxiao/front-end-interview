// const fs = require('fs')

// const contentText = fs.readFileSync('./1111.xlsx', 'utf8')
// // const a = fs.writeJSON(contentText)
// console.log(contentText)

/** 引入Node的文件模块 */
const fs = require('fs')

// /** 引入Excel文件处理模块（若没安装，安装一下即可） */
const xlsx = require('node-xlsx')

// /** 解析excel文档 */
const sheets = xlsx.parse('./1.xlsx')
const data = sheets[0].data
const arr = []
data.forEach(item => {
  if (!item[1] && !item[2] && !item[3]) {
    arr.push({
      value: item[0],
      label: item[4],
      children: [],
    })
  }
})
data.forEach(item => {
  if (item[1] && !item[2] && !item[3]) {
    arr[0].children.push({
      value: item[1],
      label: item[4],
      children: [],
    })
  }
})
data.forEach(item => {
  if (item[1] && item[2] && !item[3]) {
    arr[0].children.forEach(j => {
      if (j.value === item[1]) {
        j.children.push({
          value: item[2],
          label: item[4],
          children: [],
        })
      }
    })
  }
})
data.forEach(item => {
  if (item[1] && item[2] && item[3]) {
    arr[0].children.forEach(j => {
      j.children.forEach(p => {
        if (p.value === item[2]) {
          p.children.push({
            value: item[3],
            label: item[4],
          })
        }
      })
    })
  }
})
arr[0].children.forEach(i => {
  if (i.children && i.children.length === 0) {
    delete i.children
  } else {
    i.children.forEach(j => {
      if (j.children && j.children.length === 0) {
        delete j.children
      } else {
        j.children.forEach(p => {
          if (p.children && p.children.length === 0) {
            delete p.children
          }
        })
      }
    })
  }
})
console.log(JSON.stringify(arr))
// const arr1 = []
// arr.forEach(item => {
//   arr1.push({
//     value: Object.keys(item)[0],
//     label: Object.values(item)[0],
//   })
// })
// arr1.forEach(item => {
//   if (parseInt(item.value) % 1000 === 0 || parseInt(item.value) % 100 === 0 || parseInt(item.value) % 10 === 0) {
//     item.children = []
//   }
// })
// console.log(JSON.stringify(data))
// const arr = []
// for (let i = 0; i < 26; i++) {
//   data.forEach(item => {
//     if (item[0] === String.fromCharCode((65 + i))) {
//       if (!item[1] && !item[2] && !item[3]) {
//         arr.push({
//           label: item[4],
//           value: item[0],
//           children: [],
//         })
//       }
//     }
//   })
// }
// arr.forEach(i => {
//   data.forEach(item => {
//     if (item[0] === i.value) {
//       if (item[0] && item[1] && !item[2] && !item[3]) {
//         i.children.push({
//           label: item[4],
//           value: item[1],
//           children: [],
//         })
//       }
//     }
//   })
// })
// arr.forEach(i => {
//   i.children.forEach(j => {
//     data.forEach(item => {
//       if (item[0] === i.value && j.value === item[1]) {
//         if (item[0] && item[1] && item[2] && !item[3]) {
//           j.children.push({
//             label: item[4],
//             value: item[2],
//             children: [],
//           })
//         }
//       }
//     })
//   })
// })
// arr.forEach(i => {
//   i.children.forEach(j => {
//     j.children.forEach(k => {
//       data.forEach(item => {
//         if (item[0] === i.value && j.value === item[1] && k.value === item[2]) {
//           if (item[0] && item[1] && item[2] && item[3]) {
//             k.children.push({
//               label: item[4],
//               value: item[3],
//             })
//           }
//         }
//       })
//     })
//   })
// })
// console.log(JSON.stringify(arr))
