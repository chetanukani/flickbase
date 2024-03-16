import { useState } from 'react';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { Loader } from '../../utils/tools';

const Auth = () => {
    const [register, setRegister] = useState(false);
    let navigate = useNavigate();

    //Redux
    const users = useSelector((state) => state.users);
    const notifications = useSelector((state) => state.notifications);
    const dispatch = useDispatch();
    const form = useFormik({
        initialValues: { email: 'chetan@mailinator.com', password: 'Test@123' },
        validationSchema: Yup.object({
            email: Yup.string()
                .required('Sorry email is required')
                .email('This is not valid email'),
            password: Yup.string().required('Sorry the password is required'),
        }),
        onSubmit: (values) => {
            doHandleSubmit(values);
        },
    });

    const doHandleSubmit = (values) => {
        if (register) {
            //dispatch register
        } else {
            //dispatch login
        }
    };
    return (
        <>
            <div className='auth_container'>
                <h1>Authenticate</h1>
                {users.loading ? (
                    <Loader />
                ) : (
                    <Box
                        sx={{
                            '& .MuiTextField-root': {
                                width: '100%',
                                marginTop: '20%',
                            },
                        }}
                        component='form'
                        onSubmit={Formik.handleSubmit}
                    >
                        form
                    </Box>
                )}
            </div>
        </>
    );
};

export default Auth;
