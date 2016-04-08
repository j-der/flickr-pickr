import React from 'react'
import PhotoResultsItem from './PhotoResultsItem'

const Results = (props) => {
  return (
    <ul>
      {props.photos.length}
    </ul>
  )
}

export default Results
// const PhotoResults = (props) => {

//   var photos = props.photos

//   const photoItems = photos.map((photo) => {
//     return (
//       <PhotoResultsItem
//         photo={photo}
//         key={photo.id}/>
//     )
//   })

//   return (
//       <div className="centered">
//         {photoItems}
//       </div>
//   )
// }

// export default PhotoResults
