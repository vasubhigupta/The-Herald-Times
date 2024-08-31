import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {

  static defaultProps = {
    country : "in",
    category : "sports"
  }
 
  constructor(){
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    
    }
  }
  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles: parsedData.articles,totalResult: parsedData.totalResults})
  }

  handlePrevClick = async () => {
    console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles
    })
  }

  handleNextClick = async () => {
    console.log("Next");
    if(this.state.page + 1 > Math.ceil(this.state.totalResult/20)){

    }
    else{
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=20`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles
      })
    }
  }

  render() {
    return (
      <div className="container my-3">
        <h1 style={{ textAlign: 'center', borderBottom: '2px solid #000', paddingBottom: '10px', marginBottom: '20px' }}>The Herald Times Headlines</h1>
        <div className="container d-flex justify-content-between">
        <button rel="noopener" type="button" className="btn btn-dark" disabled = {this.state.page <= 1} onClick={this.handlePrevClick}> &larr; Previous</button>
          <button rel="noopener" type="button" className="btn btn-dark" disabled={this.state.page + 1 > Math.ceil(this.state.totalResult / 20)} onClick={this.handleNextClick} >Next &rarr;</button>
       </div>
        <div className="row">
          {this.state.articles.map((element) => { 
                return <div className="col-md-4 my-3">
                <NewsItem key ={element.url} title = { element.title ? element.title : "Headlines Today"} description = {element.description ? element.description : "Click on 'Read More' to know all about it."} imageUrl = {element.urlToImage} newsUrl = {element.url} />
                </div>
          })}
       </div>
       <div className="container d-flex justify-content-between">
        <button rel="noopener" type="button" className="btn btn-dark" disabled = {this.state.page <= 1} onClick={this.handlePrevClick}> &larr; Previous</button>
          <button rel="noopener" type="button" className="btn btn-dark" disabled={this.state.page + 1 > Math.ceil(this.state.totalResult / 20)} onClick={this.handleNextClick} >Next &rarr;</button>
       </div>
      </div>
    )
  }
}
