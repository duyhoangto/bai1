import React from "react";
import './Display.scss';
class Display extends React.Component {
    state = {
        isShowListUser: true
    }
    handleOnClick = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }
    render() {
        const { listUser } = this.props;
        console.table(listUser)
        // Check if listUser is indeed an array and has elements
        if (!Array.isArray(listUser) || listUser.length === 0) {
            return <div>No users to display.</div>;
        }

        return (
            <div className="display-infor-container">
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
        );
    }
}

export default Display;
