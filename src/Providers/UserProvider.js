import React, { Component, createContext, userContext} from 'react'
import auth from "../firebase"

export const UserContext = createContext ({user:null});

export default class UserProvider extends Component {
    state ={
        user:null
    };
    componentDidMount =()=>{
        auth.onAuthStateChanged(userAuth=>{
            this.setState({user:userAuth})
        })
    }
    render() {
        return (
            <div>
                <UserContext.Provider value={this.state.user}>
                    {this.props.children}
                </UserContext.Provider>
            </div>
        )
    }
}
