import React from "react"
import ReactDOM from "react-dom"
import "antd/dist/antd.css"
import {Button, Row, Col ,Tabs ,Form,Modal,Input,Icon,message} from 'antd';
const TabPane = Tabs.TabPane;
import Head from "./js/Head.js"
const FormItem = Form.Item;
import Login from "./js/login.js"
export default class Root extends React.Component{
	render(){
		return(
	   	  		<div>
	   	  		<Row>
	   	  			<Col span={2}></Col>
	   	  			<Col span={2}>
	   	  				<h1 style={{letterSpacing:15}}>今日头条</h1>
	   	  			</Col>
	   	  			
	   	  			<Col span={16}>
	   	  				<Head />
	   	  			</Col>
	   	  			<Col span={2}>
	   	  				<Login />
	   	  			</Col>
	   	  			<Col span={2}></Col>
	   	  		</Row>
	   	  		</div>
	   	  	)
	}

}
ReactDOM.render(<Root />,document.body)