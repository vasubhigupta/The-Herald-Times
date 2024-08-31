import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div className="card" style={{ width: '18rem' }}>
        <img src={imageUrl ? imageUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8E0WJmsaqcbwVPah4d8-_ojb_iYgbNfp8qw&s"} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
              <a href={newsUrl}  target = "_blank" className="btn btn-sm btn-dark">Read More</a>
        </div>
      </div>
    )
  }
}
