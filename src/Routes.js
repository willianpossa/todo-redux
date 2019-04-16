import Home from './Containers/Home'
import Create from './Containers/Create'

export default [
    {
        component: Home,
        path: '/',
        exact: true
    },
    {
        component: Create,
        path: '/create-todo',
        exact: true
    }
]