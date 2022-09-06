/**
 * 可以设置函数参数默认值，以及与解构赋值结合使用
 */
function fun ({
  url,
  showLoading = true
}) {

}

/**
 * rest参数，用于获取函数多余参数
 */

function getSet(...num) {
  return new Set([...num])
}

/**
 * 箭头函数：简化回调函数
 * this问题：定义时所在的对象，而不是使用时所在的对象
 * 不可以当构造函数（没有prototype），不可以使用arguments，不可以使用yield命令
 */

[1,2,3].map(x => x * x)
