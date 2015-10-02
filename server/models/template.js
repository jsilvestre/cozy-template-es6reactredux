import cozydb from 'cozydb';

const Template = cozydb.getModel('Template', {
    title: String,
    content: String,
});

export default Template;
