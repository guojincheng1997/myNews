import React from "react"
import ReactDOM from "react-dom"
import "antd/dist/antd.css"
import {Button, Row, Col ,Tabs ,Icon ,Carousel} from 'antd';
// import "fetch"
const TabPane = Tabs.TabPane;
class ZhongChlied extends React.Component{
	  constructor(){
		  	super();
		  	this.state = {
		  		array:[]
		 };
	}
	render(){
		var com=this.state.array.length>0 ?
		this.state.array.map(function(item,index){
			var style =index%5!=0 ? {padding:5,marginLeft:10,overflow: "hidden",whiteSpace:"nowrap",textOverflow: "ellipsis"}
			 : {whiteSpace:"nowrap",padding:5,marginLeft:10,fontWeight:"bold",fontSize:18,overflow: "hidden",textOverflow: "ellipsis"}
			return (
				<li key={index} style={style}>{item.title}</li>
				)
			}) : <div>false</div>
		return(
			<div >
				<ul>
					{com}
				</ul>
			</div>
		)
	}
	componentWillMount(){
		var url="http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type="+this.props.url+"&count=30";
		fetch(url)
		.then((response) => response.json())
		.then((responseJson) => {
			this.setState({
				array:responseJson
			})
		})
	}

}

export default class Zhong extends React.Component{
	render(){
		return(
			<Tabs defaultActiveKey="1" >
				<TabPane tab="社会" key="2">
					<ZhongChlied url="shehui"/>
				</TabPane>
				<TabPane tab="国内" key="3">
					<ZhongChlied url="guonei"/>
				</TabPane>
				<TabPane tab="国际" key="4">
					<ZhongChlied url="guoji"/>
				</TabPane>
				<TabPane tab="体育" key="6">
					<ZhongChlied url="tiyu"/>
				</TabPane>
			</Tabs>
			)
	}

}
