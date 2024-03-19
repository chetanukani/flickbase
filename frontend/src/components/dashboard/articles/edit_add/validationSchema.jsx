import * as Yup from 'yup';

export const formValues = {
    title: '',
    content: '',
    excerpt: '',
    score: '',
    director: '',
    actors: [],
    status: 'draft',
    category: '',
};

export const validation = () => {
    Yup.object({
        title: Yup.string().required('Sorry the title is required'),
        content: Yup.string()
            .required('Sorry the content is required')
            .min(50, 'That is it?.. writs some more'),
        excerpt: Yup.string()
            .required('Sorry the title is required')
            .max(500, 'Sorry 500 max'),
        score: Yup.number()
            .required('Sorry the score is required')
            .min(0, '0 is the min')
            .max(100, 'Sorry 100 max'),
        director: Yup.string().required('Sorry the director is required'),
        actors: Yup.array()
            .required('Sorry the actor are required')
            .min(3, 'Must be 3 al least'),
        status: Yup.string().required('Sorry the status is required'),
        category: Yup.string().required('Sorry the category is required'),
    });
};
