import { useFormik, FieldArray, FormikProvider } from 'formik';
import { formValues, validation } from './validationSchema';

import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AdminTitle } from '../../../../utils/tools';

const AddArticles = () => {
    const articles = useSelector((state) => state.articles);
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: '',
        validationSchema: '',
        onSubmit: (values) => {
            console.log(values);
        },
    });
    return (
        <>
            <AdminTitle title='Add Article' />
            Add Articles
        </>
    );
};

export default AddArticles;
