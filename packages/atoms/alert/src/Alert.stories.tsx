import Alert from './Alert'


export default {
    title: 'Alert',
    component: Alert
}

export const Informative = () => <Alert variant='informative' maxWidth='200px'>This is a random text</Alert>
export const Warning = () => <Alert variant='warning' maxWidth='200px'>This is a random text</Alert>