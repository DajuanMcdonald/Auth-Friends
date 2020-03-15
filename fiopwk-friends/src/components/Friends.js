import React from 'react';
import { axiosWithAuth } from '../utils/AxiosWithAuth';
import Loader from 'react-loader-spinner';

export default class Friends extends React.Component {
    state = {
        friendsList: []
    };

    componentDidMount() {
        this.getFriends();
    }

    getFriends = () => {
        axiosWithAuth()
            .get('/api/friends')
            .then(res => {
                // console.log(res)
                this.setState({
                    friendsList: res.data
                })
            })
    }

    render() {
        return (
            <div>

                <form>
                    <input

                        placeholder='Enter Name'
                        name='name'
                        type='text'
                    />

                    <input
                        placeholder='Enter Email'
                        name='email'
                        type='email'
                    />


                    <button>Add a Friend</button>
                </form>
                <Loader type="Puff" color="#204963" height="60" width="60" />
                {this.state.friendsList.map(friend => (
                    <div friend={friend} key={friend.id} />
                ))}


            </div>
        )
    }
}


// const Friends = (props) => {
//     const [friends, setFriends] = React.useState([]);

//     React.useEffect(() => {
//         postFriends();
//     }, [friends])

//     const getFriends = () => {
//         axiosWithAuth()
//             .get('http://localhost:5000/api/friends')
//             .then(res => { setFriends(res.data) })
//             .catch(error => console.log(error.message.status))
//     }

//     const postFriends = (friend) => {
//         axiosWithAuth()
//             .post('http://localhost:5000/api/friends', JSON.parse(JSON.stringify(friend)))
//             .then(res => {
//                 this.getFriends();
//             })
//             .catch(error => console.log(error.messge.status))
//     }

//     return (
//         <>
//             <form>
//                 <input

//                     placeholder='Enter Name'
//                     name='name'
//                     type='text'
//                 >
//                 </input>

//                 <input
//                     placeholder='Enter Email'
//                     name='email'
//                     type='email'
//                 >
//                 </input>

//                 <button>Add a Friend</button>
//             </form>
//             {friends.map(friend => (
//                 <div friend={friend} key={friend.id} />
//             ))}

//         </>
//     )
// }

// export default Friends;
// export default Friends;