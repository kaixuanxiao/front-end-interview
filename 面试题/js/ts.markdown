### ts

* any和unknown的区别

  * 相同点: 对任何类型的变量赋值都被认为是类型正确的

  * unknow类型的变量只能赋值给unknow和any类型的变量

  * 不同点

  any: 放弃类型检查
  unknow：未知类型，但是使用此类型变量仍然需要通过缩小类型来解决

* never

never表示其他任何类型也不能被赋值给它，它只能是never
never只能在两种情况下使用
  
    * 抛出异常
    * 返回never类型的函数

* interface 和 type 的区别

  * interface 只能声明 函数/对象；可以通过多次定义或者extends实现扩展

  ```js
  interface X {
    a: number
      b: string
  }

  interface Y {
    () => void
  }
  ```
  * type: 除了能声明 对象/函数 以外，还能为基础类型声明别名；可以使用联合类型，交叉类型实现扩展

* 类型断言

as 断言

as const

告诉编译器为表达式推断出它能推断出的最窄或最特定的类型。如果不使用它，编译器将使用其默认类型推断行为，这可能会导致更广泛或更一般的类型。

!    
非空断言操作符: 排除 null 和 undefined

* 类型缩小

通常对于联合类型进行类型缩小，可以使用类型断言，或者使用typeof类型保护

* 泛型

typescript中许多时候，标注的具体类型并不能确定，比如一个函数的参数类型。

泛型的本质是参数化类型，通俗的将就是所操作的数据类型被指定为一个参数

TypeScript可以使用泛型来创建可重用的组件。支持当前数据类型，同时也能支持未来的数据类型。扩展灵活。

* 类型工具
```js
/**
 * Make all properties in T optional
 */
type Partial<T> = {
    [P in keyof T]?: T[P];
};

/**
 * Make all properties in T required
 */
type Required<T> = {
    [P in keyof T]-?: T[P];
};

/**
 * Make all properties in T readonly
 */
type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};

/**
 * From T, pick a set of properties whose keys are in the union K
 */
type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};

/**
 * Construct a type with a set of properties K of type T
 */
type Record<K extends keyof any, T> = {
    [P in K]: T;
};

/**
 * Exclude from T those types that are assignable to U
 */
type Exclude<T, U> = T extends U ? never : T;

/**
 * Extract from T those types that are assignable to U
 */
type Extract<T, U> = T extends U ? T : never;

/**
 * Construct a type with the properties of T except for those in type K.
 */
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

/**
 * Exclude null and undefined from T
 */
type NonNullable<T> = T extends null | undefined ? never : T;

/**
 * Obtain the parameters of a function type in a tuple
 */
type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;

```