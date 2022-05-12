import logo from './logo.svg';
import './App.css';
import Axios from "axios"
import FileDownload from "js-file-download"

function App() {
  const download=(e)=>{
     e.preventDefault()
     Axios({
       url:"http://localhost:4000",
       method:"GET",
       responseType:"blob",
     }).then((res)=>{
      //  console.log(res)
          FileDownload(res.data,"download.png");
     })
  }


  return (
    <div className="App">
      <button onClick={(e)=>download(e)}> download</button>
    </div>
  );
}

export default App;
