import { useState } from 'react'
import Input from './pages/components/Input'
import List from './pages/components/List'

import {ResetStyle, GlobalStyle} from './global/globalStyle'
import styled from 'styled-components'


function App() {
  const [count, setCount] = useState([])
  return (
    <>
        <ResetStyle/>
        <GlobalStyle/>
      <Body>    
        <Container>
          <Input setCount={setCount}/>
          <List count={count} setCount={setCount}/>
        </Container>
      </Body>
    </>
  )
}

const Body = styled.div`
  width: 100%;
  height: 1800px;
  background-color: skyblue;
  display: flex;
  justify-content: center;
  font-weight: 300;
`
const Container = styled.div`
  width: 50%;
  background-color: #777;
  text-align: center;
`

export default App
