import React from "react"
import ReactDOM from "react-dom"
import "antd/dist/antd.css"
import {Button, Row, Col ,Tabs ,Icon ,Carousel} from 'antd';
// import "fetch"
const TabPane = Tabs.TabPane;
export default class HeadLeft extends React.Component{
	   	  render(){
	   	  	var com=this.props.array.map(function(item,index){
	   	  			return (
	   	  				  <div key={index} style={{width:80,paddingTop:10,paddingBottom:10}}>
	   	  				  	<img style={{width:80,height:80}} src={item.thumbnail_pic_s}/>
	   	  				  	<div>{item.author_name}</div>
	   	  				  </div>
	   	  				)
	   	  	})
	   	  	return(
	   	  					
	   	  						<div style={{width:300,overflow:"hidden"}}>
	   	  							<Carousel autoplay>
	   	  								<div style={{width:200,height:200,backgroundColor:"red"}}></div>
	   	  								<div style={{width:200,height:200,backgroundColor:"gray"}}></div>
	   	  								<div style={{width:200,height:200,backgroundColor:"green"}}></div>
	   	  								<div style={{width:200,height:200,backgroundColor:"blue"}}></div>
	   	  							</Carousel>
	   	  						
	   	  							<div style={{padding:10}}><h1>最新资讯</h1></div>
	   	  							<div style={{display:"flex",flexWrap:"wrap",　justifyContent:"space-around"}}>
	   	  								{com}
	   	  							</div>
	   	  						</div>
	   	  				
	   	  		)
	   	  }
	  
	   }