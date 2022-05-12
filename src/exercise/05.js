// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 🐨 add a className prop to each div and apply the correct class names
// based on the text content
// 💰 Here are the available class names: box, box--large, box--medium, box--small
// 💰 each of the elements should have the "box" className applied

// 🐨 add a style prop to each div so their background color
// matches what the text says it should be
// 🐨 also use the style prop to make the font italic
// 💰 Here are available style attributes: backgroundColor, fontStyle

// const smallBox = <div className='box box--small' style={{backgroundColor:'lightblue', fontStyle:'italic'}}>small lightblue box</div>
// const mediumBox = <div className='box box--medium' style={{backgroundColor:'pink', fontStyle:'italic'}}>medium pink box</div>
// const largeBox = <div className='box box--large' style={{backgroundColor:'orange', fontStyle:'italic'}}>large orange box</div>

// Extra Credit Solution 1
// function Box(props) {
//   const className = 'box ' + props.className
//   const styles = props.style
//   styles.fontStyle = 'italic'
//   return (
//     <div className={className} style={styles}>
//       {props.children}
//     </div>
//   )
// }
// Alternative
function Box({className = '', style, ...otherProps}) {
  // order of style matters, but not order of classNames
  return (
    <div
      className={`box ${className}`}
      style={{fontStyle: 'italic', ...style}}
      {...otherProps}
    />
  )
}

const smallBox = (
  <Box className="box--small" style={{backgroundColor: 'lightblue'}}>
    small lightblue box
  </Box>
)
const mediumBox = (
  <Box className="box--medium" style={{backgroundColor: 'pink'}}>
    medium pink box
  </Box>
)
const largeBox = (
  <Box className="box--large" style={{backgroundColor: 'orange'}}>
    large orange box
  </Box>
)

// Extra Credit Solution 2
// function Box(props) {
//   const className = 'box box--' + props.size
//   // const sizeClassname = size ? `box--${size}` : '' 
//   // className=`box ${className} ${sizeClassname}`
//   const styles = props.style
//   styles.fontStyle = 'italic'
//   // console.log(styles)
//   return <div {...props} className={className} style={styles} />
// }

// const smallBox = <Box size="small" style={{backgroundColor: 'lightblue'}}>
//   small lightblue box
// </Box>

// const mediumBox = (<Box size="medium" style={{backgroundColor: 'pink'}}>
//   medium pink box
// </Box>
// )
// const largeBox = (<Box size="large" style={{backgroundColor: 'orange'}}>
//   large orange box
// </Box>
// )

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App
