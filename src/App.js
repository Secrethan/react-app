import logo from './logo.svg';
import './App.css';
function Header(){
    return(
         <header>
             <h1><a href ="/">React</a></h1>
         </header>
    )
}
function Article() {
    return (<article>
               <h2>Welcome</h2>
               Hello, Web
            </article>
           )
}

function App() {
  return (
    <div>
    <Header></Header>
    <Header></Header>
    <Header></Header>
    <Article></Article>
    <Article></Article>
    </div>
  );
}

export default App;
