import React, {useEffect, useState} from 'react';
// import { Formik } from 'formik';

import {axiosWithAuth} from '../utils/AxiosWithAuth';

function FriendForm(props) {
return (
    <form>
        <label> Name </label>
        <input name="name" type="text"/>

        <label> Age </label>
        <input name="age" type="number"/>

        <label> Email </label>
        <input name="email" type="email"/>

        <input name="submit" type="submit"/>
    </form>

    
)
}

export default FriendForm;