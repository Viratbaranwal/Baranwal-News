import React, { Component } from 'react'
import Loading from './Loading';
import NewsItem from './NewsItem'

export class NewsComponent extends Component {

    
    constructor(){
        super();
        console.log('I am a constructor')
        this.state = {
            article: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount(){
        let url = "http://newsapi.org/v2/top-headlines?country=in&apiKey=0aa5f64d069b451b95fad84ae2761116&page=1";
        let data = await fetch(url);
        this.setState({loading: true})
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            article: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
    }

    handleNextClick = async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=0aa5f64d069b451b95fad84ae2761116&page=${this.state.page + 1}&pageSize=24`;
        let data = await fetch(url);
        this.setState({loading:true});
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            article: parsedData.articles,
            page: this.state.page+1,
            loading: false
        })

    }

    handlePreviousClick = async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=0aa5f64d069b451b95fad84ae2761116&page=${this.state.page - 1}&pageSize=24`;
        let data = await fetch(url);
        this.setState({loading:true});
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            article: parsedData.articles,
            page: this.state.page-1,
            loading:false
        })

    }

  render() {
    return (
      <div>
        <div className="container my-3 ">
            <h1 className='text-center'>Baranwal News - Top Headline</h1>
            {this.state.loading && <Loading/>}
        <div className="row ">
            {!this.state.loading && this.state.article?.map((element)=>{
                return <div className="col-md-3" key={element.url}>
                    <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imgurl={element.urlToImage} newsUrl={element.url}/>
                </div>
            })}
            
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-primary" onClick={this.handlePreviousClick}>&larr; Previous</button>
        <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/24)} type="button" className="btn btn-primary" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
        </div>
        
        

        
      </div>
    )
  }
}

export default NewsComponent
