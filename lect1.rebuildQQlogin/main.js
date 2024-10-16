function AppContent (){
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    
    const usernameClass =
    username.length <=5 ? "input-error" : "input";
    const passwordClass =
    password.length <=5 ? "input-error" : "input";
    function handleSubmit(event){
        event.preventDefault();
        if(usernameClass === "input-error" || passwordClass === "input-error"){
           
            return;
        }

        console.log("username: ", username);
        console.log("password: ", password);

        setUsername("");
        setPassword("");
    }
// JSX
return(
    <main
    className="bg"  >
    <h2
    className="h2">Login</h2>

    <form
    onSubmit={handleSubmit}
    className="form"
    >
    <input 
    className={username.length <= 5 ? "input-error" : "input"}
    type="text" 
    placeholder="Username"
    value={username}
    onChange={
        (event ) =>setUsername(event.target.value)
    }
    />
    <input 
     className={username.length <= 5 ? "input-error" : "input"}
    type="password" 
    placeholder="Password"
    value={password}
    onChange={
        (event ) =>setPassword(event.target.value)
    }
    />
    <br />
      <button type="submit" className="button" >Submit</button>
    </form>
    </main>

);
}

const appEl = document .querySelector("#app");
const root = ReactDOM.createRoot(appEl);
root .render(<AppContent />);