
// 实现添加和删除待办事项的功能。
// 实现完成待办事项的功能（已完成的事项应被移动到列表底部）。

function MyApp() {
    const [currentTodoItem, setCurrentTodoItem] = React.useState("");//文本输入用字符串
    const [todoList, setTodoList] = React.useState([ ]);//为什么是([]),这里是初始化空数组
  //useState 被用来创建一个名为 todoList 的 state 变量，并初始化为一个空数组 []。这个 state 变量用于存储待办事项列表，每个待办事项通常是一个对象，包含 id、item 和 isCompleted 等属性。
    // 定义一个排序函数，用于将已完成的待办事项移动到列表底部
    const sortTodo = (o1, o2) => {
        if (o1.isCompleted !== o2.isCompleted) {
          // 如果两个待办事项的完成状态不同，则将已完成的待办事项放在后面
        return o1.isCompleted ? 1 : -1;
        }
        // 如果完成状态相同，则按 id 排序
        return o1.id - o2.id;
    };

    //   function handleAddTodo() {
    //     if (!currentTodoItem.length) {
    //       alert("Please enter a todo item");
    //       return;
    //     }//至少输入一个字符
// 添加待办事项的处理函数
    function handleAddTodo() {
        // 使用正则表达式检查是否至少有一个非空白字符  正则表达式（Regular Expression，简称 regex 或 regexp）是一种文本模式，由一系列字符组成，用于匹配字符串中符合特定规则的文本。正则表达式常用于字符串的搜索、替换、分割和验证操作。
        // if (!/\S \S/.test(currentTodoItem)) {
            if (!/^[\u4e00-\u9fa5]{2,}$/.test(currentTodoItem)) {
                //^ 表示匹配字符串的开始  [\u4e00-\u9fa5] 表示匹配一个汉字字符范围，涵盖了基本的汉字  {2,} 表示至少出现两次前面的字符类  $ 表示匹配字符串的结束
        alert("请输入至少二个汉字的待办事项");
        return;
        }
// 创建一个新的待办事项列表，包含当前列表和新添加的待办事项       
    const addedList = [
        ...todoList,  // 这是扩展操作符，它会将 todoList 数组中的所有元素复制到新的 addedList 数组中。
        {
            id: Math.random() + Date.now(),  // 创建一个新的对象，并为其分配一个唯一的 id。
            // Math.random() 生成一个 0 到 1 之间的随机数。
            // Date.now() 返回当前时间的毫秒时间戳。
            // 将两者相加，可以得到一个相对唯一的 id 值。
            item: currentTodoItem, // 当前输入框中的值 item项目
            isCompleted: false,  // 设置新待办事项的完成状态为 false，表示它尚未完成。
        },
    ];  // 结束新数组的定义。
        
      // 对新列表进行排序
      addedList.sort(sortTodo);
      // 更新待办事项列表状态
      setTodoList(addedList);
      // 清空输入框
      setCurrentTodoItem(""); 
    }
     // 删除待办事项的处理函数
     function handleDeleteTodo(id) {
        // 过滤掉具有指定 id 的待办事项
        const deletedTodoList = todoList.filter((todo) => todo.id !== id);
        // 对新列表进行排序
        deletedTodoList.sort(sortTodo);
        // 更新待办事项列表状态
        setTodoList(deletedTodoList);
      }
  
      // 切换待办事项完成状态的处理函数
      function handleToggleTodo(id) {
        // 映射待办事项列表，并切换指定 id 的待办事项的完成状态
        const toggledTodoList = todoList.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              isCompleted: !todo.isCompleted, // 切换完成状态
            };
          }
          // 如果不是指定的待办事项，则保持不变
          return todo;
        });
        // 对新列表进行排序
        toggledTodoList.sort(sortTodo);
        // 更新待办事项列表状态
        setTodoList(toggledTodoList);
      }
  
      // 返回 JSX，定义组件的渲染结构
      return (
        <main>
          <h1>React Todo List</h1>
          <input
            type="text" // 输入框类型为文本
            placeholder="Add item into as todo" // 提示文本
            value={currentTodoItem} // 输入框的值为 currentTodoItem 状态
            onChange={(event) => setCurrentTodoItem(event.target.value)} // 输入框值变化时更新状态
          />
          <button onClick={handleAddTodo}>Add</button> 
           {/* 添加按钮，点击时调用 handleAddTodo */}
          <ul>
            {todoList.map((todo) => ( // 遍历待办事项列表，为每个待办事项渲染一个列表项
              <li className={todo.isCompleted ? "deleted" : ""} key={todo.id}>
                <input
                  type="checkbox"
                  defaultChecked={todo.isCompleted} // 复选框默认选中状态
                  onClick={() => handleToggleTodo(todo.id)} // 点击时切换待办事项的完成状态
                />
                {todo.item} // 显示待办事项的文本
                <button onClick={() => handleDeleteTodo(todo.id)}>delete</button> // 删除按钮，点击时调用 handleDeleteTodo
              </li>
            ))}
          </ul>
        </main>
      );
    }
    
    // 找到页面中的 #app 元素
    const appEl = document.querySelector("#app");
    // 创建一个 React 根节点
    const root = ReactDOM.createRoot(appEl);
    // 渲染 MyApp 组件到根节点
    root.render(<MyApp />);