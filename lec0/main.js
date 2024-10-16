/*  AppContent 是一个函数组件，它的定义方式是：
 以function关键字开始，后跟组件名称。
 组件名称通常以大写字母开头，以区分React元素和HTML元素。
 函数内部使用useState Hook来管理text状态。
 返回值是一个JSX表达式，定义了组件的UI结构。*/
function AppContent() {
  // AppContent是react的一个组件
  // 利用了React的useState Hook来创建一个响应式的文本输入字段。

    const [text, setText] = React.useState("");
    // React.useState是一个React的hook允许你在函数组件中添加和管理状态。
    // useState被用来创建一个名为text的状态变量，以及一个更新该状态的函数setText。
    //const [状态变量a，更新状态变量的函数b]
    // 初始状态被设置为空字符串""，这意味着当组件首次渲染时，text的状态将是空的。
    return (
      // retuen()返回的东西，就是JSX语法渲染的
      <main>
        <input
          onChange={(event) => setText(event.target.value)}
        />
        {/* onChange属性是一个事件处理函数，当用户在输入框中键入内容时，这个函数会被触发。该函数使用setText来更新text状态，使其等于用户输入的值。 */}
        <p>{text}</p>
        {/* 这里使用了花括号{}来嵌入JavaScript表达式，因此text状态变量的当前值将被渲染到<p>标签内。  */}
      </main>
    );
  }
/* 在指定的DOM元素上创建一个React根节点，并将AppContent组件渲染到这个根节点上。*/
  const appEl = document.querySelector("#app");// 这行代码通过document.querySelector("")方法查找页面中ID为app的元素，并将它赋值给变量appEl。
  const root = ReactDOM.createRoot(appEl);//在#app元素上创建一个React根节点
  // 使用ReactDOM.createRoot方法，React会在指定的DOM元素上创建一个根节点。这个根节点是React与DOM交互的桥梁。
  // 在appEl元素上创建了一个React根节点，并将其赋值给变量root。
  root.render(<AppContent />);// 渲染AppContent组件到根节点
  // 一旦创建了React根节点，你就可以使用root.render方法将React组件渲染到这个根节点内。
