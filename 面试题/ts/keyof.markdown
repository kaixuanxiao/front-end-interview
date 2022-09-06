### keyof

keyof操作符，作用于对象类型，是将一个对象类型映射为它所有属性名称的联合类型

```js
interface Person {
  name: string;
  age: number;
  gender: string;
}
type A = keyof Person; // "name" | "age" | "gender"

// 通过索引访问类型，相当于A["name" | "age" | "gender"]获取到所有类型的联合类型
type B = A[keyof Person] // "string" | "number" 
```