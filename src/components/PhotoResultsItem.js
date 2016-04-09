import React from 'react'

const PhotoResultsItem = ({photo}) => {

console.log(photo)

  return(
    <div className="photo-item">
        <img src={photo.src} />
    </div>
  )
}

export default PhotoResultsItem
