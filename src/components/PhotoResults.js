import React from 'react'
import PhotoResultsItem from './PhotoResultsItem'

  const PhotoResults = (props) => {

    let allPhotos = props.data.map(function (photo) {
      let id = photo.id
      let secret = photo.secret
      let server = photo.server
      let farm = photo.farm
      let thumbSuffix = "_q"
      let title = photo.title

      return (
        <PhotoResultsItem
          photo={photo}
          key={photo.id}
          imgUrl={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`}
          thumbUrl={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}${thumbSuffix}.jpg`}
          title={title} />
      )
    })

      const photoItems = allPhotos.map((pic) => {
        return (
          <PhotoResultsItem photo={pic} key={pic.key} src={pic.thumbUrl}/>
        )
      })

  const sortDesc = (photos) => {
    photos.sort(function(a, b) {
      return b.datetaken > a.datetaken
    })
  }

  const sortAsc = (photos) => {
    photos.sort(function(a, b) {
      return b.datetaken < a.datetaken
    })
  }

    return (
      <div>
        {photoItems}
      </div>
    )
  }

export default PhotoResults
