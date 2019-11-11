import React, { Component } from 'react'
import {connect} from 'react-redux'
//antd-mobile
import {List,InputItem,WingBlank,WhiteSpace,Button} from 'antd-mobile'
import {bindActionCreators} from 'redux'

import Logo from '../components/Logo'
import handleChange from '../components/handleChange'
import * as loginAction from '../actions/loginAction'

//css
import '../common/styles/login.scss'

class Login extends Component {
    handleClick(val){
        let a = this.props.loginPatch.login('zjs');
        alert(JSON.stringify(this.props));   
    }
    render(){
        return (
            <div className="login-page">
                <Logo></Logo>
                <WingBlank>
                    <List className="form">
                        <InputItem
                        clear
                        placeholder="输入用户名"
                        value={this.props.state.userName} 
                        onChange={v=>this.props.handleChange('userName',v)}>用户名</InputItem>
                        <InputItem
                        clear
                        type="password"
                        placeholder="输入密码"
                        value={this.props.state.pwd} 
                        onChange={v=>this.props.handleChange('pwd',v)}>密码</InputItem>
                    </List>
                    <WhiteSpace/>
                    <Button type="primary" onClick={()=>this.handleClick(1)}>登录</Button>
                    <WhiteSpace/>
                    <Button type="primary">注册</Button>
                </WingBlank>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    userName:state.loginReducer.userName
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    loginPatch:bindActionCreators(loginAction,dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(handleChange(Login))

