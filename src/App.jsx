import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const [first, setfirst] = useState([])
  const [index, setindex] = useState(1)

  async function btn (){
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=28`)
    setfirst(response.data)

    console.log(response.data)
    console.log('Hello')
  }

  useEffect(function(){
    btn()
  },[index])

  let printUser = 'Not Avaliable Value'
  if(first.length>0){
    printUser = first.map(function(elem,idx){

      return(
      <a href={elem.url} target="_blank" key={idx}>
        <div 
          className='bg-white p-4 w-40 rounded-xl flex flex-col
          items-center active:scale-95 transition ml-4'>
          <img 
            src={elem.download_url} 
            className='rounded-xl'/>
          <h2 className='mt-2 text-center font-semibold'>
            {elem.author}
          </h2>
        </div>
      </a>
      )
    })
  }

  return (
    <div>
      {/* <button onClick={btn} className='border-2 border-black bg-green-400 p-3 px-6 rounded-xl 
        mt-10 ml-10 active:scale-95 transition '>
        Get Data
      </button> */}
      <div className='h-screen w-full border-2 border-black bg-gray-400
        p-3 flex flex-wrap gap-3 p-2'>
        {printUser}
      </div>
      <div className='flex justify-center items-center gap-5'>
        <button className='border-2 border-black rounded-xl p-3 
          px-7 mt-5 bg-green-500 active:scale-95 transition'
          onClick={()=>{
            // if(index>1){
              setindex(index-1)
            // }
          }}>
          Prev
        </button>
        <h1 className='font-bold text-2xl mt-5'>Page-{index}</h1>
        <button className='border-2 border-black rounded-xl p-3
          px-7 mt-5 bg-green-500 active:scale-95 transition'
          onClick={()=>{
            setindex(index+1)
          }}>
          Next
        </button>
      </div>
    </div>
  )
}

export default App