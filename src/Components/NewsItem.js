import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imgurl, newsUrl} = this.props;
    return (
        <div className="my-3">
        <div className="card">
        <img src={!imgurl?"https://www.enbridg.com/wp-content/themes/eikra/assets/img/noimage-420x273.jpg":imgurl} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <a href={newsUrl} className="btn btn-sm btn-primary">Read More</a>
        </div>
      </div>
      </div>
    )
  }
}

export default NewsItem
