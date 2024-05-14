

import React, { useEffect, useState } from "react";


// class UserInfor extends React.Component {
//     state = {
//         name: "",
//         address: "",
//         age: ""
//     }
//     handleClick = (event) => {
//         console.log("My name  is  :  ", this.state.name)
//         console.log(event.target)
//         console.log("random", Math.floor((Math.random() * 100) + 1))
//         this.setState({
//             name: "duyhoangto"
//         })
//     }
//     handleOnMouse(event1) {
//         console.log(event1.pageX)
//     }

//     handleOnchangeInput = (event) => {
//         this.setState({
//             name: event.target.value
//         })

//     }
//     handleOnchangeAge = (event) => {
//         this.setState({
//             age: event.target.value
//         })

//     }

//     handleOnSubmit = (event) => {
//         event.preventDefault();// ko tai lai trang (not reload)

//         this.props.handleAddnewUser({
//             id: Math.floor(Math.random() * 100 + 1) + " random",
//             name: this.state.name,
//             age: this.state.age
//         });
//     }
//     render() {
//         return (
//             <div>
//                 I'm a child
//                 my name is : {this.state.name} and i'm from : {this.state.address} , and i'm : {this.state.age} year old
//                 <button onClick={(event) => { this.handleClick(event) }} onMouseOver={this.handleOnMouse}>
//                     click me
//                 </button>

//                 <form onSubmit={(event) => this.handleOnSubmit(event)}>
//                     <label>Your name : </label>
//                     <input
//                         value={this.state.name}
//                         type='text'
//                         onChange={(event) => this.handleOnchangeInput(event)}
//                     />
//                     <label>Your age : </label>
//                     <input
//                         value={this.state.age}
//                         type='text'
//                         onChange={(event) => this.handleOnchangeAge(event)}
//                     />
//                     <button>Submit</button>
//                 </form>
//             </div>
//         )
//     }
// }

const UserInfor = (props) => {
    const { listUser } = props;
    const [name, setname] = useState('');
    const [address, setAdress] = useState('');
    const [age, setAge] = useState('');

    const handleOnchangeInput = (event) => {
        setname(event.target.value)

    }
    const handleOnchangeAge = (event) => {
        setAge(event.target.value)
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();// ko tai lai trang (not reload)

        props.handleAddnewUser({
            id: Math.floor(Math.random() * 100 + 1) + " random",
            name: name,
            age: age
        });
    }
    useEffect(() => {

        setTimeout(() => {
            document.title = "duyhoangto"
        }, 3000);
    }, [listUser]
    );
    return (
        <div>
            I'm a child
            my name is : {name} and i'm from : {address} , and i'm : {age} year old


            <form onSubmit={(event) => handleOnSubmit(event)}>
                <label>Your name : </label>
                <input
                    value={name}
                    type='text'
                    onChange={(event) => handleOnchangeInput(event)}
                />
                <label>Your age : </label>
                <input
                    value={age}
                    type='text'
                    onChange={(event) => handleOnchangeAge(event)}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default UserInfor;