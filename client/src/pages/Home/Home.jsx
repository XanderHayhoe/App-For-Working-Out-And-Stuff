import React from 'react'
import {Button, Wrapper} from "./Home.styles.jsx"
import BlogClickBox from '../../components/BlogClickBox/BlogClickBox.jsx'
const Home = () => {
    const imageUrl = process.env.PUBLIC_URL + '/images/nutritionLogo.png';

  return (
    <Wrapper>
        <div>Home</div>
        <BlogClickBox imageSrc={imageUrl} content={"Dieting"}/>
    </Wrapper>
  )
}

export default Home