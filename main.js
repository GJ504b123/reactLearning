function MyApp() {
  // 使用React的useState钩子来创建状态变量和它们的更新函数
  const [isPurple, setIsPurple] = React.useState(""); // 控制圆形是否为紫色
  const [textColor, setTextColor] = React.useState(""); // 控制文字颜色
  const [size, setSize] = React.useState(180); // 控制圆形的大小【默认值】和c语言一样，字符加"",数字直接写
  const [rotate, setRotate] = React.useState(0); // 控制圆形的旋转角度

  // circleStyle对象包含应用于圆形div的样式
  const circleStyle = {
    height: `${size}px`,
    // 圆形的高度，动态设置
    // ` 设置的内容 `
    // ${} 是一个占位符，用于插入表达式的值。在这个占位符内部，你可以放入任何有效的 JavaScript 表达式。
    // size 是一个变量，其值将被计算并插入到字符串中。
    // px 是一个单位，表示像素（pixels），它告诉 CSS 属性（如 height、width 或 lineHeight）以像素为单位来解析 size 的值。
    // 因此，如果 size 变量的值是 100，那么 ${size}px 在字符串中的结果将是 "100px"。在 CSS 中，这会被解释为一个100像素的长度值。
    width: `${size}px`, // 圆形的宽度，动态设置
    lineHeight: `${size}px`, // 行高，与圆形大小相同，确保文字垂直居中

    transform: `rotate(${rotate}deg)`, // 应用CSS的rotate变换，动态设置旋转角度
    // transform: rotate(90deg);正值，顺时针旋转90度
  };//简而言之就是加上`css的语句 (${变量}) +css的单位

  // 返回React元素，这是组件的渲染部分
  return (
    <main>
      {/* 复选框，用于切换圆形是否为紫色 */}
      {/* <label>
  Purple
  <input
    type="text" // 明确指定类型为文本输入框
    value={isPurple} // 假设 isPurple 是一个字符串
    onChange={(event) => setIsPurple(event.target.value)} // 当文本改变时，更新 isPurple 状态
  />
</label> */}
{/* 文本框样式，输入内容改变颜色 */}
<label>
  Purple
  <input
    type="checkbox"
    checked={isPurple}
    onChange={() => setIsPurple(!isPurple)}
  />
</label>


      {/* 下拉选择框，用于选择文字颜色 */}
      <label>
        text color
        <select
          onChange={(event) =>
            setTextColor(event.target.value) // 当选择改变时，更新textColor状态
          }
          // value={textColor}
        >
          <option value="" selected>White</option> // 默认选项，白色
          <option value="text-black">Black</option> // 黑色选项
          <option value="text-orange">Orange</option> // 橙色选项
          {/* JavaScript：你可以使用 JavaScript 来根据元素的 value 属性动态地改变元素的类或样式。 */}
        </select>
      </label>

      {/* 数字输入框，用于设置圆形的大小 */}
      <label>
        Circle Size
        <input
          type="number"
          value={size}
          onChange={(event) => setSize(event.target.value)} // 当输入改变时，更新size状态
        />
      </label>

      {/* 数字输入框，用于设置圆形的旋转角度 */}
      <label>
        Circle Rotate
        <input
          type="number"
          value={rotate}
          onChange={(event) =>
            setRotate(event.target.value) // 当输入改变时，更新rotate状态
          }
        />
      </label>

      {/* 圆形div，其类名和样式会根据状态变量动态变化 */}
      <div
        className={`circle ${isPurple ? "purple" : ""}${textColor}`}
        style={circleStyle}
      >
        Hi! 
        {/* // 圆形内显示的文字 */}
      </div>
    </main>
  );
}

// 查询DOM中id为'app'的元素
const appEl = document.querySelector("#app");
// 使用ReactDOM.createRoot创建一个React根节点
const root = ReactDOM.createRoot(appEl);

// 使用root.render方法渲染MyApp组件到根节点
root.render(<MyApp />);
