初始化
useState 是React的一个钩子（Hook），用于在函数组件中添加状态。
currentTodoItem：当前输入框中的待办事项文本【字符串】。
todoList：待办事项列表，包含多个【数组】待办事项对象。

sortTodo 
这个函数用于比较两个待办事项，并决定它们的顺序。如果两个待办事项的完成状态不同，已完成的待办事项会排在后面。如果完成状态相同，则按照它们的 id 排序。

handleAddTodo
这个函数在用户点击添加按钮时被调用。它会检查输入框是否为空，如果不为空，则创建一个新的待办事项并添加到列表中，然后更新状态。

handleDeleteTodo(id)
这个函数接收一个 id 作为参数，并从待办事项列表中删除具有该 id 的待办事项。然后对更新后的列表进行排序并更新状态。

handleToggleTodo(id)
这个函数用于切换待办事项的完成状态。它通过 map 方法遍历待办事项列表，找到具有指定 id 的待办事项，并切换其 isCompleted 属性。








# 组件是什么？
组件（Component）是一个**可重用**的界面元素，它**封装**了特定的**功能和行为**。
1. 定义
组件 是一个**独立的、可复用的**代码块，它描述了界面的一部分。
在*React*中，组件可以是**类**（Class Component）或**函数**（Functional Component）。
2. 功能
- 组件负责**渲染UI的一部分**，并且可以**管理自己的状态和属性**（props）。
- 组件可以**接收输入**（通常是通过props），并根据这些输入**渲染输出**（UI元素）
- 组件可以**包含其他组件**，从而构建出**复杂的UI结构**。
3. 分类
1. **函数组件**：使用JavaScript函数来创建的组件，它**接受一个props对象**作为**参数**并**返回一个React元素**。
2. **类组件**：使用ES6类来创建的组件，它具有更多的特性，如内部状态（state）和生命周期方法。
4. 例子
以下是一个简单的React函数组件的例子：
```javascript

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```
在这个例子中，**Welcome**是一个**组件**，它接受一个名为**props的参数**，并**返回**一个包含问候语的**h1**元素。

5. 特点
可复用性：组件可以在不同的地方多次使用，只需传入不同的props。
封装性：组件内部的状态和行为被封装起来，对外只暴露必要的接口。
组合性：组件可以嵌套使用，即组件内部可以包含其他组件，形成组件树。
6. 优势
模块化：组件化使得代码更加模块化，易于管理和维护。
可读性：组件化的代码结构清晰，易于其他开发者理解和接手。
可测试性：独立的组件可以单独测试，提高了测试的效率和覆盖率。


# jsx中状态表达式长什么样子？
在 JSX 中，你可以使用*各种表达式*来展示或操作状态。以下是一些常见的使用状态的表达式示例：

- 显示状态值:
```javascript
<p>The count is: {count}</p>
```


- 条件渲染:
```javascript
{isShown && <div>The content is shown.</div>}

```
isShown 是一个**布尔值变量**。它可能是 true 或 false。
后者 是一个 JSX 元素，你想要根据条件渲染它。
isShown === true ==>结果是后者得到渲染
反之，结果是 isShown === false，啥也不展示
<br>
或者
```javascript
{isShown ? <div>The content is shown.</div> : <div>The content is hidden.</div>}
```
三元运算符（A?B :C）运算符根据 A 的值来决定渲染哪个 JSX 元素[B or C]。
- 三元运算符:
<p>Status: {isOnline ? 'Online' : 'Offline'}</p>

- 数组方式渲染列表
```javascript
{items.map(item => (
  <li key={item.id}>{item.name}</li>
// 对于数组中的每个元素（我们称之为 item），创建一个 <li> 标签。
// 给每个 <li> 标签设置一个 key 属性，这个属性的值是 item 的 id。
// 在 <li> 标签内部显示 item 的 name
// const items = [
//   { id: 1, name: '苹果' },
//   { id: 2, name: '香蕉' },
//   { id: 3, name: '橘子' }
// ];
// 使用 {items.map(item => (<li key={item.id}>{item.name}</li>))} 后，你将得到以下 HTML：
// <ul>
//   <li key="1">苹果</li>
//   <li key="2">香蕉</li>
//   <li key="3">橘子</li>
// </ul>

))}
// items 是一个数组，假设它包含了多个对象，每个对象代表一个项（item）。
// 这个箭头函数为每个数组元素返回一个 JSX 元素。
```
在 React 中，当你有一个**数组**，并且你想在 UI 中渲染这个数组的**每个元素**时，你通常会使用 JavaScript 的 **map** 方法。*map 方法遍历数组中的每个元素，并对每个元素执行一个函数，然后返回一个新的数组，该数组包含了每次函数调用的结果。*

- 字符串模板:
```javascript
<h1>Hello, {name}!</h1>
```

- 计算属性:
```javascript
<p>Total: {count * price}</p>
// 创建一个 HTML 段落。
// 在这个段落中显示文本 "Total: a*b"。
// 然后计算 count 和 price 的乘积，并将结果显示在同一行上。

```
- 样式绑定:
```javascript
<div style={{ color: isActive ? 'red' : 'blue' }}>This text color changes.</div>

```

- 类名绑定:
```javascript
<div className={classNames('btn', { 'btn-primary': isActive, 'btn-secondary': !isActive })}>
  Click me
</div>
```
创建一个 div 元素，并给它添加一个**固定的类名 'btn'。**
根据组件的状态 isActive 动态地添加 **'btn-primary'** 或 **'btn-secondary'** 类名。如果 isActive 为 **true**，则添加 **'btn-primary'** 类名[前者]；如果为 *false*，则添加 *'btn-secondary'* 类名。
在 div 中显示文本 “Click me”。

- 事件处理:
```javascript
<button onClick={() => setCount(count + 1)}>Increment</button>

```
1. onClick：这是一个事件属性，用于指定当按钮被点击时要执行的 JavaScript 代码。
() => setCount(count + 1)：这是一个箭头函数，它不接受任何参数（()），并返回一个调用 
2. setCount 函数的表达式。setCount 函数通常是在使用 React 的 useState 钩子时定义的，用于更新状态变量 count 的值。
3. 创建一个按钮，并在用户点击该按钮时执行一个函数。
该函数使用 setCount 更新状态变量 count 的值，使其等于当前值加 1。
按钮上显示的文本是 “Increment”，指示用户点击这个按钮将增加计数。
- 解构状态:
```javascript
const { username, age } = user;
<p>{username} is {age} years old.</p>

```
这行 JSX 代码会渲染一个段落 ，其中包含用户的名字和年龄。{username} 和 {age} 是 JSX 的表达式语法，它允许你在 JSX 中插入 JavaScript 表达式的值。

- 属性展开:
```javascript
const props = { name: 'John', age: 30 };
<User {...props} />

```
<User {...props} /> 这行代码创建了一个 User 组件的实例，并将 props 对象中的所有属性传递给它。这意味着 User 组件将接收 name 和 age 两个属性，它们分别被设置为 'John' 和 30。

这些表达式可以在 JSX 中直接使用，React 会计算表达式的结果并将其渲染到页面上。需要注意的是，在 JSX 中，所有的表达式都必须用花括号 {} 包围。
















# 状态（state）是如何影响组件的？
1. *状态定义组件的行为*
组件的状态定义了它的**行为**和**显示内容**。例如，在一个待办事项列表组件中，状态可能包含待办事项的列表。当用户**添加、删除或标记**待办事项为完成时，这些*操作*会更新状态，从而*改变组件的行为和显示。*

2. 状态的改变**触发组件的更新**
当组件的状态通过setState（在类组件中）或setXxx（在函数组件中使用useState钩子）函数更新时，React会重新渲染该组件。这是React响应式更新的核心机制。

3. 状态是组件私有的
状态是组件的私有数据，它只能在定义它的组件内部访问和修改。这意味着**组件的状态不会直接影响其他组件**，除非通过特定的方式（如props）传递。


以下是状态影响组件的详细过程：
## 状态初始化
在组件创建时，状态被初始化。对于函数组件，使用**useState**钩子进行初始化：
```javascript
const [count, setCount] = React.useState(0);
```
在这个例子中，**count**是组件的**初始状态**，数字初始化  (0) 
数组初始化   ([])
字符串初始化  ("")
当组件需要更新状态时，可以使用setCount函数：

## 状态更新
当组件需要更新状态时，可以使用set--*首字母大写* 函数：
```javascript
function handleClick() {
  setCount(count + 1);
}

```
每次调用setCount时，React都会调度一个更新，这会导致组件重新渲染。

## 组件重新渲染
当状态更新后，React会重新渲染组件。在这个过程中，React会使用**新的状态值**来生成组件的输出。这意味着**任何依赖于*状态*的数据或UI都会根据新的状态进行更新。**

## 响应式UI
因为组件在状态更新后重新渲染，所以任何在**渲染过程**中使**用状态的表达式**都会得到**更新**。
例如：
```javascript
function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```
在这个Counter组件中，每当点击按钮时，count状态会增加，然后组件会重新渲染，显示新的点击次数