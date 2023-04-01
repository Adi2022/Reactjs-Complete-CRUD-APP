import React,{useState} from 'react'
import UserTabel from '../UserTabel'
const Home = () => {
  const[darkThemes,setDarkThemes]=useState(false)


  const theme = {
    dark: {
      backgroundColor: 'black',
      moonColor: 'white',
      moonBorder: '1px solid gray',
    },
    light: {
      backgroundColor: 'gray',
      moonColor: 'orange',
      moonBorder: '1px solid white',
    },
  };

  const handleClick=()=>{
    setDarkThemes((prevThemes)=>!prevThemes)
  }
  return (
    <div className='container py-4 ' style={darkThemes?theme.dark:theme.light}>
      <i class="fa-solid fa-moon" onClick={handleClick} style={{cursor:"pointer",
      color: darkThemes ? theme.dark.moonColor : theme.light.moonColor,
          }}></i>
       <UserTabel />
    </div>
  )
}

export default Home