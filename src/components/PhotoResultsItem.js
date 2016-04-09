import React from 'react'

const PhotoResultsItem = ({photo}) => {

  const src = photo.props.thumbUrl
  return(
    <div className="photo-item">
      <img src={src}/>
    </div>
  )
}

export default PhotoResultsItem
