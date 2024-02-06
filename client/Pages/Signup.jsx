import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../SEPO/utils/mutations';

import auth from '../SEPO/utils/auth';

const signUp = () => {
    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [addUser, {error, data}] = useMutation(ADD_USER);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const hanleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState)

        try {
            const { data } = await addUser ({
                variables: {...formState},
            });

            auth.login(data.addUser.token);
        } catch(err) {
            console.error(err)
        }
    };

    return (
        <main className='flex-row justify-center mb-4'>
            
        </main>
    )
}