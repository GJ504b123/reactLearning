
function AppContent() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  // React.useState：这是React中的一个内置钩子（Hook），它允许你在函数组件中添加和管理状态。useState接受一个初始状态作为参数，并返回一个包含两个元素的数组。

  function handleSubmit(event) {
    event.preventDefault();

    if (username === "" || password === "") {
      alert('"username" and "password" are required');
      // 在网页编程中，alert 是一个常用的 JavaScript 函数，用于显示一个带有确定按钮的警告对话框。
      // 这个对话框通常用于向用户显示一些信息或者提醒。
      // 当 alert 函数被调用时，它会立即暂停脚本的执行，并且显示一个模态对话框，直到用户点击确定按钮。
      // alert("这是一个警告信息！");

      return;
    }

    console.log("username: ", username);
    console.log("password: ", password);

    setUsername("");
    setPassword("");
  }

  // JSX syntax
  return (
    <main>
      <h2 style={{ textAlign:"center"}} >Login Form</h2>
      <form
        onSubmit={handleSubmit}
        // onSubmit={handleSubmit} 是一个属性绑定，将一个事件处理函数 handleSubmit 绑定到一个表单的 onSubmit 事件上。这意味着当用户提交表单时（通常是通过点击提交按钮或者按下回车键），handleSubmit 函数会被调用。
        style={{ textAlign: "center" }}

      >
        <input
          className="input"
          // 给input元素添加一个CSS类
          type="text"
          // 定义了input元素的类型。在这个例子中，它是一个文本输入框。
          value={username}
          // 将input元素的值绑定到React状态变量username。这意味着input元素将显示username状态变量的当前值。
          onChange={(event) =>
            setUsername(event.target.value)
            // event.target.value 是用户在输入框中输入的值。在HTML中，当用户与表单元素（如 <input>、<textarea> 或 <select>）交互时，这些元素会触发事件。
            // 是一个事件处理属性，它绑定了一个函数，当input元素的值发生变化时（即用户在输入框中输入或修改文本时），这个函数会被调用。
            // 该函数是一个箭头函数，它接受一个事件对象event作为参数，并调用setUsername函数来更新username状态变量的值。
          }
        />
        <br/>
        <input
          className="input"
          // 元素选择器失效，要改成类选择器||ID选择器，或者直接内联css
          type="password"
          value={password}
          onChange={(event) =>
            setPassword(event.target.value)
          }
        />

        <br />
        <button type="submit"  style={{margin:"5px"}}>
          Login
        </button>
      </form>
    </main>
  );
}

const appEl = document.querySelector("#app");
const root = ReactDOM.createRoot(appEl);

root.render(<AppContent />);