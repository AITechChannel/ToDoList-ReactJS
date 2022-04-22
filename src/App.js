import { useState } from "react";



function App() {
  const getData = localStorage.getItem('data');
  const jsdata = JSON.parse(getData)

  const [data, setData] = useState('')
  const [datas,setDatas] = useState(jsdata ?? [])

  const handleInput =(e) => {
    setData(e.target.value)
  }

  const handleSubmit = () => {
    setDatas(prev=> 
      
      {const dataLocalStorage = [...prev, data]
        console.log(dataLocalStorage)
        localStorage.setItem('data', JSON.stringify(dataLocalStorage))
        return [...prev, data]
      })
    setData('')
    console.log(datas)
  }



  return (
    <div style = { {padding: 20}}>
      <input onChange = {handleInput} value={data}/>
      <button onClick = {handleSubmit}>Add</button>
      <ul>
      {datas.map((list, index) => (
        <li key={index}>{list}</li>
      ))}
      </ul>
     
    </div>
  );
}

export default App;
