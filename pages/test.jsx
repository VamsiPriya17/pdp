import React from 'react'
import { useContext } from 'react'
import DataContext from '../context/DataContext'
function test() {
  const data = useContext(DataContext)
  console.log(data)
  return <div>test</div>
}

export default test
