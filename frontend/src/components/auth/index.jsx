import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { Loader, errorHelper } from '../../utils/tools';

const Auth = () => {
    const [register, setRegister] = useState(false);
    let navigate = useNavigate();

    //Redux
    const users = useSelector((state) => state.users);
    const notifications = useSelector((state) => state.notifications);
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: { email: '', password: '' },
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
                        onSubmit={formik.handleSubmit}
                    >
                        <TextField
                            name='email'
                            label='enter your email'
                            variant='outlined'
                            {...formik.getFieldProps('email')}
                            {...errorHelper(formik, 'email')}
                        />

                        <TextField
                            name='password'
                            label='enter your password'
                            variant='outlined'
                            type='password'
                            {...formik.getFieldProps('password')}
                            {...errorHelper(formik, 'password')}
                        />

                        <div className='mt-2'>
                            <Button
                                variant='contained'
                                color='primary'
                                type='submit'
                                size='large'
                            >
                                {register ? 'Register' : 'Login'}
                            </Button>
                            <Button
                                className='mt-3'
                                variant='outlined'
                                color='secondary'
                                size='small'
                                onClick={() => setRegister(!register)}
                            >
                                Want to {!register ? 'Register' : 'Login'}
                            </Button>
                        </div>
                    </Box>
                )}
            </div>
        </>
    );
};

export default Auth;
