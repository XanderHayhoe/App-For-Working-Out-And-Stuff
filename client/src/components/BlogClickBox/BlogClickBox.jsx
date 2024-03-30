import React from 'react'
import { Button, Content, Image } from './BlogClickBox.styles.jsx'


// wrapper button for an image that routes to a different page from home
// should make some for nutrition, workouts, splits, and sleeping

const BlogClickBox = ({imageSrc, content}) => {
  return (
    <Button> 
        <Image src={imageSrc} alt={content}/>
        <Content>{content}</Content>

    </Button>
  )
}

export default BlogClickBox