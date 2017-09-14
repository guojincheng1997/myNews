import React from "react"
import ReactDOM from "react-dom"
import "antd/dist/antd.css"
import {Button, Row, Col ,Tabs ,Form,Modal,Input,Icon,message} from 'antd';
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
class Login extends React.Component{
	constructor(){
		super();
		this.state = { 
			visible: false
		}
	}
	render(){
		return(
			<div>
				<h1 onClick={this.showModal.bind(this)}>登录</h1>
				<Modal
				title="登录"
				visible={this.state.visible}
				onOk={this.handleOk.bind(this)}
				onCancel={this.handleCancel.bind(this)}
				>
				<Form className="login-form">
				<FormItem key={1}>
						<Input ref="user" prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
				</FormItem>
				<FormItem key={2}>
						<Input ref="pwd" prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
				</FormItem>
				<FormItem key={3}>
					<Button onClick={this.login.bind(this)}  type="primary" htmlType="submit" className="login-form-button">
					登录
					</Button>
				</FormItem>
				</Form>
				</Modal>
			</div>	
			)
	}
	login(){
		console.log(this.props.form)
		var user=this.refs.user.refs.input.value;
		var pwd=this.refs.pwd.refs.input.value;
		var url="http://newsapi.gugujiankong.com/Handler.ashx?action=login&username="+user+"&password="+pwd;
		console.log(url);
		fetch(url)
		.then((response) => response.json())
		.then((responseJson) => {
			if(responseJson!=null){
				message.success('登录成功');
				this.setState({
					visible: false,
				});
			}else{
				message.error('账号或密码错误');
			}
		})
	}
	showModal(){
		this.setState({
			visible: true,
		});
	}
	handleOk(e){
		this.setState({
			visible: false,
		});
	}
	handleCancel(e){
		this.setState({
			visible: false,
		});
	}
}

const WrappedNormalLoginForm = Form.create()(Login);
module.exports=Login


