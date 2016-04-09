import React from 'react'
import PhotoResultsItem from './PhotoResultsItem'

  const PhotoResults = (props) => {
    let allPhotos = props.data.map(function (photo) {
      let id = photo.id
      let secret = photo.secret
      let server = photo.server
      let farm = photo.farm
      let thumbSuffix = "_q"
      let imgSrc = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`
      let thumbUrl = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}${thumbSuffix}.jpg`

      return (
        <PhotoResultsItem photo={photo} key={photo.id} src={thumbUrl}/>
      )
    })

    return (
      <div>
        {PhotoResults}
      </div>
      )
  }

export default PhotoResults
