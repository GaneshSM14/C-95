import React, {useState} from 'react'
import {Button,StyleSheet} from 'react-native'
const App=()=>{
let Time=new Date().toLocaleTimeString()
const[ctime,setctime]=useState(Time)
 const UpdateTime=()=>{
  Time=new Date().toLocaleTimeString()
  setctime(Time)
}  
setInterval(UpdateTime,1000)

return(
  <>
  <h1 style={{backgroundColor:"lightblue",color:'blue'}}>
    {ctime}
  </h1>

  </>
)
}
export default App 

