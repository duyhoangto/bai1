import logo from './logo.svg';
import './App.scss';
import Header from './component/header/header';
// class App extends React.Component {
//   state = {
//     listUser: [
//       { id: 1, name: "hoidanit", age: "30" },
//       { id: 2, name: "duyhoangto", age: "18" },
//       { id: 3, name: "to duy hoang ", age: "10" }
//     ]
//   }

//   handleAddnewUser = (userObj) => {
//     console.log("check data sucess :", userObj)
//     this.setState({
//       listUser: [userObj, ...this.state.listUser]
//     })
//   }

//   handleDeleteUser = (userId) => {
//     let listUserClone = this.state.listUser;
//     listUserClone = listUserClone.filter(item => item.id !== userId)
//     this.setState({
//       listUser: listUserClone
//     })
//   }

//   render() {

//     return (
//       <div>
//         hello world with toduyhoang &amp; HOI DAN IT ahihi
//         <UserInfor handleAddnewUser={this.handleAddnewUser} />
//         <hr />
//         <Display listUser={this.state.listUser} handleDeleteUser={this.handleDeleteUser} />
//         <br />
//         <Mycomponent />
//       </div>
//     );
//   }
// }

const App = (props) => {
  // const [listUser, setlistUser] = useState(
  //   [
  //     { id: 1, name: "hoidanit", age: "30" },
  //     { id: 2, name: "duyhoangto", age: "18" },
  //     { id: 3, name: "to duy hoang ", age: "10" }
  //   ]
  // )

  // const handleAddnewUser = (userObj) => {
  //   setlistUser([userObj, ...listUser])
  // }

  // const handleDeleteUser = (userId) => {
  //   let listUserClone = listUser;
  //   listUserClone = listUserClone.filter(item => item.id !== userId)
  //   setlistUser(listUserClone)
  // }
  return (
    <div>

      <Header />
    </div>
  )
}
export default App;
