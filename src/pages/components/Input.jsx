import styled from 'styled-components'
import { useState, useRef } from 'react' 
import { v4 as uuidv4 } from 'uuid';

const  Input = ({setCount})=>{
  const inputRef = useRef()
  

  function inputChange () {
    if (inputRef.current.value === ""){
      return
    }
    let valueArr = {id: uuidv4 (), value: inputRef.current.value}
    inputRef.current.value = ""
    setCount((arr)=>{
      return [...arr, valueArr]
    })
  }
  return(

    <div>
       <Header type="text" placeholder="Type Somthing..."  ref={inputRef}/>
        <Btn onClick={inputChange}>添加</Btn>
    </div>
)
}


const Header = styled.input`
  border-radius: 6px;
  width: 39rem;
  margin-top: 9rem;
  height: 6rem;
  margin-right: 6rem;
`
const Btn = styled.button`
padding: 1rem 2rem;
border: 1px solid #000;
background-color: #000;
color: wheat;
border-radius: 6px;
  &:hover{
    background-color: red;
  }
`
export default Input