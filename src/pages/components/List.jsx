import { useState } from 'react'; "react"

import styled from 'styled-components'
const  List =({count, setCount})=>{
  function inputDelete(e) {
    // console.log(count);
    // console.log(e.target.dataset.id);
    // setCount((arr)=>{
    //   console.log(newarr);
    //     return arr.filter((newarr)=>{
    //       e.target.dataset.id !== newarr.id
    //     })
    // })
    e.target.parentElement .remove()
  }
    return(
        <Footer>
          {count.map((arr)=>{
             return (
                <Container key = {arr.id}>
                  <Span>{arr.value}</Span>
                  <Delete data-id={arr.id} onClick={inputDelete}>刪除</Delete>
                </Container>
           )
          })}
        </Footer>
    )
}


const Footer = styled.div`
  border-top: 1px solid #000;
  margin-top: 6rem;
  text-align: center;
  width: 100%;
  display: flex;
  flex-flow:column wrap;
  align-items: center;
`
const Container = styled.div`
  color: #000;
  margin-top: 3rem;
  background-color: white;
  width: 50rem;
  padding: 2rem 3rem;
  display: block;
  border-radius: 6px;
`
const Delete = styled.button`
    padding: 1rem 2rem;
    background-color: red;
    display: block;
    float: right;
    color: #777;
    font-size: 1.6rem;
    font-weight: 600;
    border-radius: 6px;
      &:hover{
        background-color: blue;
      }
`
const Span = styled.div`
  display: inline-block;
  width: 10rem;
  word-break: break-all;
  padding: 1rem 2rem;
  font-size: 1.6rem;
  margin: auto;
`
export default List