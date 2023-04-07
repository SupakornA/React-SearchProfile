import './App.css';
import {useState} from "react"
import {AiOutlineSearch} from "react-icons/ai";
import {IoIosPeople} from "react-icons/io";
import {AiOutlineTag} from "react-icons/ai";

function App() {
  const data = [
    {id:1,name:"Phineas",email:"popeye@gmail.com",date:"10 July 2010",pic:"img/astronomy1.JPG",pic2:"img/sketch2.jpg"},
    {id:2,name:"Sofia",email:"sofia@gmail.com",date:"10 July 2010",pic:"img/SPACE.JPG",pic2:"img/maddie.jpg"},
    {id:3,name:"Ferb",email:"ferb@gmail.com",date:"10 July 2010",pic:"img/astronomy1.JPG",pic2:"img/coloring.jpg"},
    {id:4,name:"Olivia",email:"olivai@gmail.com",date:"10 July 2010",pic:"img/SPACE.JPG",pic2:"img/boy.jpg"},
    {id:5,name:"Emma",email:"emma@gmail.com",date:"10 July 2010",pic:"img/SPACE.JPG",pic2:"img/boy.jpg"},
    {id:6,name:"Hannah",email:"hannah@gmail.com",date:"10 July 2010",pic:"img/astronomy1.JPG",pic2:"img/coloring.jpg"},
    {id:7,name:"Isabella",email:"Isabella@gmail.com",date:"10 July 2010",pic:"img/SPACE.JPG",pic2:"img/maddie.jpg"},
    {id:8,name:"Mia",email:"Mia@gmail.com",date:"10 July 2010",pic:"img/astronomy1.JPG",pic2:"img/sketch2.jpg"},
    {id:9,name:"Chloe",email:"Chloe@gmail.com",date:"10 July 2010",pic:"img/astronomy1.JPG",pic2:"img/coloring.jpg"},
    {id:10,name:"Violet",email:"Violet@gmail.com",date:"10 July 2010",pic:"img/SPACE.JPG",pic2:"img/maddie.jpg"},
    {id:11,name:"Victoria",email:"Victoria@gmail.com",date:"10 July 2010",pic:"img/astronomy1.JPG",pic2:"img/coloring.jpg"},
    {id:12,name:"Madison",email:"Madison@gmail.com",date:"10 July 2010",pic:"img/SPACE.JPG",pic2:"img/coloring.jpg"},
    {id:13,name:"Darlene",email:"Darlene@gmail.com",date:"10 July 2010",pic:"img/SPACE.JPG",pic2:"img/maddie.jpg"},
    {id:14,name:"Milada",email:"Milada@gmail.com",date:"10 July 2010",pic:"img/astronomy1.JPG",pic2:"img/sketch2.jpg"},
    {id:15,name:"Kennocha",email:"Kennocha@gmail.com",date:"10 July 2010",pic:"img/SPACE.JPG",pic2:"img/boy.jpg"},
    {id:16,name:"Cara",email:"Cara@gmail.com",date:"10 July 2010",pic:"img/astronomy1.JPG",pic2:"img/maddie.jpg"},
    {id:17,name:"Vida",email:"Vida@gmail.com",date:"10 July 2010",pic:"img/SPACE.JPG",pic2:"img/coloring.jpg"},
    {id:18,name:"Amada",email:"Amada@gmail.com",date:"10 July 2010",pic:"img/astronomy1.JPG",pic2:"img/maddie.jpg"},
    {id:19,name:"Caroline",email:"Caroline@gmail.com",date:"10 July 2010",pic:"img/SPACE.JPG",pic2:"img/coloring.jpg"},
    {id:20,name:"Trixie",email:"Trixie@gmail.com",date:"10 July 2010",pic:"img/astronomy1.JPG",pic2:"img/sketch2.jpg"}
  ]

  const [word,setWord] = useState("")

  return (
    <div className="container">
      <div className='serch-container'>
        <label htmlFor="search-form">
          <input type='text' className='search-input' placeholder='search' value={word} onChange={(e)=>setWord(e.target.value)}></input>
          <i className='i1'><AiOutlineSearch size="1.5em" color='#ccc' /></i>
        </label>
      </div>
      <ul className="row">
      {data.filter((item) => {
        return word.toLowerCase() === '' ? item : item.name.toLowerCase().includes(word);
      })
      .map((item)=>{
        return (
            <li key={item.id}>
              <div className="card">
                <div className="card-title">
                  <img src={item.pic} alt={item.name}/>
                </div>
                <div className='profile'>
                  <img src={item.pic2} alt={item.name}/>
                </div>
                <div className='all'>
                    <div className='card-body'>
                      <h2>{item.name}</h2>
                      <li>(Graphic Designer)</li>
                    </div>
                    <div className="card-list">
                      <li>Email:</li> {item.email}
                      <li>Start date:</li>{item.date}
                    </div>
                    <div className='card-guild'>
                      <li><IoIosPeople /><span> Guild</span></li>
                      <ul>
                        <li>Viral Eating Thailand</li>
                        <li>  NFT Thailand</li>
                      </ul>
                    </div>
                    <div className='card-Tag'>
                      <li><AiOutlineTag /> Tag</li>
                      <ul>
                        <li>#Eat</li>
                        <li>#Sport</li>
                        <li>#Travel</li>
                      </ul>
                    </div>
                  </div>
                </div>
            </li>
        )
      })}
      </ul>
    </div>
  );
}

export default App;
