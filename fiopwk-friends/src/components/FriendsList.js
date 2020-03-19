import React from 'react'
import { axiosWithAuth } from '../utils/AxiosWithAuth'

import Friend from './Friend'

export default class FriendsList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            friends: []
        }

    }

    componentDidMount() {
        this.getData();
    }

    // helper method: @getData
    getData = () => {
        axiosWithAuth()
            .get('/friends')
            .then(res => {
                this.setState({ friends: res.data })
            })
    }

    render() {
        return (
            <div>
                <h2>Friends List</h2>
                {props.friends.map(friend =>
                    <Friend
                        key={this.friend.id}
                        friend={this.friend}
                        getFriend={this.props.getFriend}
                        
                    />

                )}

            </div>
        )
    }
}
