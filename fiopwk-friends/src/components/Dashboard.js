import React, {useEffect, useState} from 'react'
import FriendList from './FriendsList'
import FriendForm from './FriendForm'
import {axiosWithAuth} from '../utils/AxiosWithAuth'

function Dashboard(props) {
    const [friendList, setFriendList] = useState(null)
    const [editOnClick, setEditOnClick] = useState(false)
    const [friendOnEdit, setFriendOnEdit] = useState()

    useEffect(() => {
        axiosWithAuth()
        .get('/friends')
        .then(res => {
            setFriendList(res.data)
        })
        .catch(err => console.log(err.response.status))

    }, [])

    const addFriend = (newFriend) => {
        setEditOnClick(false)
        setFriendList(newFriend)
    }

    const editFriend = (editList) => {
        setFriendList(editFriend)
    }

    const deleteFriend = (id) => {
        axiosWithAuth()
        .delete(`/friends/${id}`)
        .then(res => {
            setFriendList(res.data)
        })
        .catch(err => console.log(err.response.status))
    }

    const getFriend = id => {
        setEditOnClick(true)

        let editedFriend = friendList.filter(friend => friend.id === id)
        setFriendOnEdit(editFriend)

    }




    return (
        <div>
            
        </div>
    )
}

export default Dashboard
