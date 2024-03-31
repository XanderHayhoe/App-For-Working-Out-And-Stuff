import React from 'react'
import {Button, FlexBox, Wrapper} from "./Home.styles.jsx"
import BlogClickBox from '../../components/BlogClickBox/BlogClickBox.jsx'
const Home = () => {
    const nutritionImg = process.env.PUBLIC_URL + '/images/nutritionLogo.png';

  return (
    <Wrapper>
        <div>Home</div>
        <FlexBox>
            <BlogClickBox imageSrc={nutritionImg} content={"Dieting"}/>
            <BlogClickBox imageSrc={nutritionImg} content={"Workouts"}/>
            <BlogClickBox imageSrc={nutritionImg} content={"Blog"}/>
            <BlogClickBox imageSrc={nutritionImg} content={"smthg else idk"}/>
        </FlexBox>
        
    </Wrapper>
  )
}

export default Home