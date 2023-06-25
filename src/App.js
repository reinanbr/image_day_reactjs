import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

    const [data,setData] = useState(null)
    const [timeS,setTimeS]=useState(null)
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)

    useEffect(()=>{
        (
        async function(){
            try{
                setLoading(true)
                axios.defaults.headers.get['Content-Type'] ='application/json;charset=utf-8';
                axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
                const response = await axios.get('https://api.nasa.gov/planetary/apod?api_key=oCguPSOZSdzKxR790mhoLnnHI15tmxGP6uwWbuvj')
                console.log(response.data)
                setData(response.data)
               

            }
            catch(err){
                setError(err)
            }finally{
                setLoading(false)
            }
        }
        )()
    },[])



  return (<>
 
    <div className="App">
    
      <header className="App-header">
     <h1>Image Day</h1>
     <hr/>
      {loading && <div>Loading...</div>}

      {data &&
        <Card className='cardCenter' style={{ width: '18rem' }}>
        <Card.Img variant="top" src={data.hdurl} />
          <Card.Body >
        <Card.Title><h5>{data.title}</h5></Card.Title>
        <Card.Text><p><b>{data.date}</b></p>{data.explanation}</Card.Text>
  
      </Card.Body>
    </Card>
     }

        <p>
          By <code>ReySofts</code> 2023.
        </p>
        <a
          className="App-link"
          href="https://github.com/reinanbr"
          target="_blank"
          rel="noopener noreferrer"
        >
          your solution in softwares
        </a>
      </header>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>

<script
  src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
  crossorigin></script>

<script
  src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
  crossorigin></script>
    </>);
}



export default App;
