import React from 'react'

const PhotoResultsItem = ({photo}) => {

  const thumbSrc = photo.props.thumbUrl
  const fullSrc = photo.props.imgUrl
  const title = photo.props.title

  return(
    <div className="col-lg-3">
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title title-trunc">Title: {title}</h3>
        </div>
          <div className="panel-body">
            <a href={fullSrc} target="_blank">
              <img src={thumbSrc}/>
            </a>
          </div>
      </div>
    </div>

  )
}

export default PhotoResultsItem
