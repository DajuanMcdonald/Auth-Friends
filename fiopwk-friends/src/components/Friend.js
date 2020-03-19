import React, { useState } from 'react'
import {Card, Button, Modal} from 'semantic-ui-react'

import FriendForm from './FriendForm'

export default function Friend(props) {

    const [openModal, setOpenModal] = useState(false)

    const editFriends = () => {
        props.getFriend(props.friend.id)
    }

    const deleteFriends = () => {
        props.deleteFriend(props.friend.id)
    }

    return (
        <Card>
            <Card.Content>
                <Card.Header>{props.friend.name}</Card.Header>
                <Card.Meta>{props.friend.email}</Card.Meta>
                <Card.Description>{props.friend.age}</Card.Description>
            </Card.Content>

            <Card.Content extra >
                <div>
                    <Modal trigger={
                        <Button onClick={editFriends} color='green'>
                            +
                        </Button>
                    }
                        closeIcon
                    >
                        <Modal.Content>
                            <FriendForm />

                        </Modal.Content>
                    </Modal>
                    <Modal trigger={
                        <Button color='red'>
                            -
                        </Button>
                    }
                        open={openModal}
                    >
                        <Modal.Header>Delete a Friend</Modal.Header>
                        <Modal.Actions>
                            <Button onClick={() => {setOpenModal(false)}}>Cancel</Button>
                            <Button onClick={deleteFriends}>Delete</Button>
                        </Modal.Actions>

                    </Modal>
                </div>
            </Card.Content>



        </Card>
    )
}
