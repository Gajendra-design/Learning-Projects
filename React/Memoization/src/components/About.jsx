import React from 'react'

const About = () => {
    console.log('about is rendering');
    
  return (
    <div>About</div>
  )
}

//it will rerender of course because we haven't use React.memo
export default About