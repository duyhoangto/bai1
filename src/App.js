import logo from './logo.svg';
import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import Mycomponent from './component/mycomponent';
import React from 'react';
import UserInfor from './component/userinfor';
import Display from './component/Display';

class App extends React.Component {
  state = {
    listUser: [
      { id: 1, name: "hoidanit", age: "30" },
      { id: 2, name: "duyhoangto", age: "18" },
      { id: 3, name: "to duy hoang ", age: "10" }
    ]
  }

  handleAddnewUser = (userObj) => {
    console.log("check data sucess :", userObj)
    this.setState({
      listUser: [userObj, ...this.state.listUser]
    })
  }

  handleDeleteUser = (userId) => {
    let listUserClone = this.state.listUser;
    listUserClone = listUserClone.filter(item => item.id !== userId)
    this.setState({
      listUser: listUserClone
    })
  }

  render() {

    return (
      <div>
        hello world with toduyhoang &amp; HOI DAN IT ahihi
        <UserInfor handleAddnewUser={this.handleAddnewUser} />
        <hr />
        <Display listUser={this.state.listUser} handleDeleteUser={this.handleDeleteUser} />
        <br />
        <Mycomponent />
      </div>
    );
  }
}

export default App;
