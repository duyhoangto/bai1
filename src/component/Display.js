import React from "react";
import './Display.scss';
import logo from './../logo.svg';
class Display extends React.Component {
    constructor(props) {
        console.log("caLL 1")
        super(props)
        this.state = {
            isShowListUser: true
        }
    }
    // componentDidMount() {
    //     console.log("call me did mount")
    //     setTimeout(() => {
    //         document.title = "duyhoangto"
    //     }, 3000);
    // }


    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("did update", this.props, prevProps)
        if (this.props.listUser !== prevProps.listUser) {
            if (this.props.listUser.length === 5) {
                alert("you got 5 user")
            }
        }
    }

    handleOnClick = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }
    render() {
        console.log("render")
        const { listUser } = this.props;
        console.table(listUser)
        // Check if listUser is indeed an array and has elements
        if (!Array.isArray(listUser) || listUser.length === 0) {
            return <div>No users to display.</div>;
        }
        const test = { name: "hoidanit", age: "29" }
        return (
            <>
                {JSON.stringify(test)}
                <div className="display-infor-container">
                    <img src={logo} />
                    <div>
                        <span onClick={() => { this.handleOnClick() }}>
                            {this.state.isShowListUser === true ? "Hide List Users" : "Show List Users"}
                            <b />
                        </span>
                    </div>
                    {this.state.isShowListUser &&
                        <div >
                            {listUser.map((user, index) => {
                                console.table(user)
                                return (
                                    <div key={user.id} className={+user.age >= 18 ? "green" : "red"}>  {/* Use user's unique identifier as key if available */}
                                        <div style={{ color: "yellow", paddingTop: "50px" }}>My name is {user.name}</div>
                                        <div>I am {user.age} years old</div>
                                        <div>
                                            <button onClick={() => { this.props.handleDeleteUser(user.id) }}>
                                                Delete Data</button>  </div>
                                        <hr />
                                    </div>
                                )


                                // if (+user.age >= 18) {
                                //     return (
                                //         <div key={user.id} className="green">  {/* Use user's unique identifier as key if available */}
                                //             <div>My name is {user.name}</div>
                                //             <div>I am {user.age} years old</div>
                                //         </div>
                                //     )
                                // } else {
                                //     return (
                                //         <div key={user.id} className="red">  {/* Use user's unique identifier as key if available */}
                                //             <div>My name is {user.name}</div>
                                //             <div>I am {user.age} years old</div>
                                //         </div>
                                //     )
                                // }


                            })}
                        </div>
                    }
                </div>
            </>
        );
    }
}

export default Display;
