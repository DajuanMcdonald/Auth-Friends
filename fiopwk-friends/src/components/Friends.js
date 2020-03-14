import React from 'react';
import { axiosWithAuth } from '../utils/AxiosWithAuth';

const Friends = (props) => {
    const [friends, setFriends] = React.useState([]);

    React.useEffect(() => {
        postFriends();
    }, [friends])

    const postFriends = () => {
        axiosWithAuth()
        .get()
        .then()
        .catch()
    }

    return (
        <>
        <form>
            <input
            
            placeholder='Enter Name'
            name='name'
            type='text'
            >
            </input>
            
            <input
            placeholder='Enter Email'
            name='email'
            type='email'
            >
            </input>

            <button>Add a Friend</button>
        </form>
        {friends.map(friend => (
            <div friend={friend} key={friend.id} />
        ))}

        </>
    )
}