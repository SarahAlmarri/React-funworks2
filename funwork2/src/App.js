import logo from './logo.svg';
import './App.css';



function App() {
  return <div class="div">
    <Header img ='https://media1.popsugar-assets.com/files/thumbor/JvSqhD_EXAytoP4rwBbbYPoNQ7Q/133x543:894x1304/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/12/01/753/n/1922283/e343aa995de3f2d275cbd6.74705204_/i/baby-yoda-memes.jpg' title = 'Sarah Almarri'></Header>
    <Body ></Body>
    <Footer title = 'Birthday Date : 1 / March / 2000'></Footer>
    </div>

}

function Header(props){
return <div class = 'header'>
<img class ='img' src={props.img}></img>
<h1 class ='h1'>{props.title}</h1>
</div>
}

function Body(props){
  return <>
  <div class = 'container'>
  <Card title = 'Reading Books'></Card>
 <Card title = 'Drawing'></Card>
 <Card title = 'Cooking'></Card>
  </div>
  </>
}
function Footer(props){
  return <>
  <div class = 'div3'> <p>{props.title} </p></div>
 
  </>
}
function Card(props){
 return<>
  <div class ='div2'>
  <h3 >{props.title}</h3>
</div>
</>
}
export default App;




// here is the fun part.. every information you type (name, photo, hobbies, footer) has to be sent as probs! :H5_Nya_yayyoudidit: 