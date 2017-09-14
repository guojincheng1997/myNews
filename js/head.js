import React from "react"
import ReactDOM from "react-dom"
import "antd/dist/antd.css"
import {Button, Row, Col ,Tabs ,Icon ,Carousel} from 'antd';
// import "fetch"
const TabPane = Tabs.TabPane;
import HeadLeft from "./head_left.js"
import Zhong from "./zhong.js"
import Right from "./right.js"
export default class Head extends React.Component{
		  constructor(){
		  	super();
		  	this.state = {
		  		array:[]
		  	};
		  }
	   	  render(){
	   	  	return(
	   	  		<Tabs defaultActiveKey="1" >
	   	  					<TabPane tab={<span><Icon type="exception" />头条</span>} key="1">
	   	  						<div style={{display:"flex",flexDirection:"row"}}>
	   	  							<HeadLeft array={this.state.array}/>
	   	  						<div style={{width:450,height:500,marginLeft:20,marginRight:20}}>
	   	  							<Zhong />
	   	  						</div>
	   	  						<div style={{flex:1,height:500}}>
	   	  							<Right />
	   	  						</div>
	   	  					</div>
	   	  					</TabPane>
	   	  					<TabPane tab={<span><Icon type="qrcode" />社会</span>} key="2">Content of Tab Pane 2</TabPane>
	   	  					<TabPane tab={<span><Icon type="rocket" />国内</span>} key="3">Content of Tab Pane 3</TabPane>
	   	  					<TabPane tab={<span><Icon type="layout" />国际</span>} key="4">Content of Tab Pane 2</TabPane>
	   	  					<TabPane tab={<span><Icon type="picture" />娱乐</span>} key="5">Content of Tab Pane 3</TabPane>
	   	  					<TabPane tab={<span><Icon type="tablet" />体育</span>} key="6">Content of Tab Pane 3</TabPane>
	   	  					<TabPane tab={<span><Icon type="line-chart" />军事</span>} key="7">Content of Tab Pane 3</TabPane>
	   	  					<TabPane tab={<span><Icon type="inbox" />科技</span>} key="8">Content of Tab Pane 3</TabPane>
	   	  					<TabPane tab={<span><Icon type="team" />财政</span>} key="9">Content of Tab Pane 3</TabPane>
	   	  					<TabPane tab={<span><Icon type="filter" />时尚</span>} key="10">Content of Tab Pane 3</TabPane>
	   	  			</Tabs> 
	   	  		)
	   	  }
	   	  // thumbnail_pic_s
	   	  componentWillMount(){
	   	  	var url="http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=top&count=12"
	   	  	fetch(url)
	   	  	.then((response) => response.json())
	   	  	.then((responseJson) => {
	   	  		this.setState({
	   	  			array:responseJson
	   	  		})
	   	  	})
	   	  }
	   }