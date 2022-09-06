### grid布局

* 和flex区别
Flex 布局是轴线布局，只能指定"项目"针对轴线的位置，可以看作是一维布局。Grid 布局则是将容器划分成"行"和"列"，产生单元格，然后指定"项目所在"的单元格，可以看作是二维布局。Grid 布局远比 Flex 布局强大。

grid布局更适合的场景：二维，且需要对单元格差异化处理，比如复杂布局

* 关键使用
（1）通过容器属性，定义行高，列宽基本属性，还有间距，项目的排列方式，单元格别名等设置
（2）通过项目属性，定义单元格位置和特定的对齐方式

#### 容器属性

* 容器

display: grid;

* 定义每个行高和每个列宽

grid-template-rows 属性
grid-template-columns 属性，

* 定义间距

row-gap 行与行的间隔（行间距）
column-gap 列与列的间隔（列间距）
gap: <grid-row-gap> <grid-column-gap>;

* 定义区域

grid-template-areas

```css
.container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
  grid-template-areas: 'a b c'
                       'd e f'
                       'g h i';
}
```

* grid-auto-flow 定义项目的排列方式

row: 先行后列
column: 先列后行
row dense和column dense:  尽可能紧密填满，尽量不出现空格

* 单元格内容位置

justify-items 内容的水平位置（左中右），
align-items 单元格内容的垂直位置（上中下），
place-items属性是align-items属性和justify-items属性的合并简写形式。

* 整个内容区域在容器里面的位置
justify-content 属性，
align-content 属性，
place-content 属性

#### 项目属性

* 项目属性控制单元格位置
grid-column-start 属性，
grid-column-end 属性，
grid-row-start 属性，
grid-row-end 属性

其他项目都没有指定位置，由浏览器自动布局，这时它们的位置由容器的grid-auto-flow属性决定

grid-column属性是grid-column-start和grid-column-end的合并简写形式，grid-row属性是grid-row-start属性和grid-row-end的合并简写形式。

```css
.item-1 {
  background: #b03532;
  grid-column: 1 / 3;
  grid-row: 1 / 3;
}
/* 等同于 */
.item-1 {
  background: #b03532;
  grid-column: 1 / span 2;
  grid-row: 1 / span 2;
}
```

* 指定项目放在哪一个区域

grid-area: e  （e是grid-template-areas中设定）

或者grid-area属性还可用作grid-row-start、grid-column-start、grid-row-end、grid-column-end的合并简写形式
grid-area: 1 / 1 / 3 / 3;


* 作用单个项目的内容位置控制
justify-self 属性，
align-self 属性，
place-self 属性