function MyApp(){
    const [isBrown, setIsBrown] = React.useState("");
    const [isDarkMode, setIsDarkMode] = React.useState(false); // 初始状态不是暗夜模式
    // 切换暗夜模式的函数
    const toggleDarkMode = () => {
          setIsDarkMode(!isDarkMode);
        };

    return (
        <main>
    <div className={isDarkMode ? 'dark-mode' : 'light'} >
              <button onClick={toggleDarkMode} type = "checkbox"> 
        {isDarkMode ? 'light' : 'dark'}
      </button>
      <label
        className="father"
        />
        <label>
            <img src="./小恐龙.png.png" />
            <h2 >未连接到互联网</h2>
        </label>
        <label className="color">
                <p>请尝试以下办法</p>
                    <li>检查网线，调制解调器和路由器</li>
                    <li>重新连接到Wi-Fi网络</li>
                    <li id="blue">运行Windows网络诊断</li>

                <span className="small">
                    ERR_INTERNET_DISCONNECTED
                </span> 
        </label>
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