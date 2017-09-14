import React from "react"
import ReactDOM from "react-dom"
import "antd/dist/antd.css"
import {Button, Row, Col ,Tabs ,Icon ,Carousel} from 'antd';
// import "fetch"
const TabPane = Tabs.TabPane;
export default class Right extends React.Component{
	constructor(){
		super();
		this.state = {
			list:["keji","yule","caijing"],
			index:0,
			items:[]
		}
	}
	render(){
		console.log(this.state.index)
		var com=this.state.items.length>0 ?
		this.state.items.map(function(item,index){
			return (
					<div className="border" style={{width:400,padding:10}}>
						<div style={{display:"flex",alignItems: 'center'}}>
							<div style={{padding:5}}><img  className="imgStyle"  src={item.thumbnail_pic_s}/></div>
							<div style={{padding:5}}>{item.date}</div>
							<div style={{padding:5}}>{item.author_name}</div>
						</div>
						<div style={{marginTop:10,marginBottom:10,fontSize:20,fontWeight:"bold",overflow: "hidden",whiteSpace:"nowrap",textOverflow: "ellipsis"}}>{item.title}</div>
						<div>99评论</div>
					</div>
				)
		}):<div></div>
		return(
			<div>
				<div style={{display:"flex",　justifyContent:"space-around"}}>
					<div>头条号</div>
					<div><Button type="Primary" onClick={this.btn.bind(this)}>换一换</Button></div>
				</div>
				<div>
					{com}
				</div>
			</div>
			)
	}
	componentWillMount(){
		var url="http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type="+this.state.list[0]+"&count=10";
		fetch(url)
		.then((response) => response.json())
		.then((responseJson) => {
			this.setState({
				items:responseJson
			})
		})
	}
	btn(){
		console.log(this.state.list.length)
		var that=this;
		var i=++this.state.index < this.state.list.length ? this.state.index : 0;
		this.setState({
			index:i
		})
		var url ="http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type="+this.state.list[i]+"&count=10";
		fetch(url)
		.then((response) => response.json())
		.then((responseJson) => {
			that.setState({
				items:responseJson
			})
		})
	}
}