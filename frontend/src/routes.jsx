import { useEffect, useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { isAuth } from './store/actions/users';
import { Loader } from './utils/tools';

import MainLayout from './hoc/mainLayout';
import AuthGuard from './hoc/authGuard';
import Home from './components/home';
import Header from './components/navigation/header';
import Auth from './components/auth';
import Dashboard from './components/dashboard/index';
import DashboardMain from './components/dashboard/main';

import AdminArticles from './components/dashboard/articles/index';
import AddArticle from './components/dashboard/articles/edit_add/add';

const Router = () => {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(isAuth());
    }, []);

    useEffect(() => {
        if (users.auth !== null) {
            setLoading(false);
        }
    }, [users]);

    return (
        <BrowserRouter>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <Header />
                    <MainLayout>
                        <Routes>
                            <Route
                                path='/dashboard'
                                element={
                                    <AuthGuard>
                                        <Dashboard />
                                    </AuthGuard>
                                }
                            >
                                <Route index element={<DashboardMain />} />
                                <Route
                                    path='/dashboard/articles'
                                    element={<AdminArticles />}
                                />
                                <Route
                                    path='/dashboard/articles/add'
                                    element={<AddArticle />}
                                />
                            </Route>
                            <Route path='/auth' element={<Auth />} />
                            <Route path='/' element={<Home />} />
                        </Routes>
                    </MainLayout>
                </>
            )}
        </BrowserRouter>
    );
};

export default Router;
