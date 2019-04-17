import Home from './Containers/Home/Template'
import Create from './Containers/Create/Template'

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