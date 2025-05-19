import { RouteObject, Navigate } from 'react-router-dom'
import Discover from '@v/Discover'
import Page404 from '@v/Page404'
import Focus from '@v/Focus'
import Mine from '@v/Mine'

const routes: RouteObject[] = [
	{ path: '/', element: <Navigate to="/discover" /> },
	{ path: '/discover', element: <Discover /> },
	{ path: 'focus', element: <Focus /> },
	{ path: '/mine', element: <Mine /> },
	{ path: '*', element: <Page404 /> }
]

export default routes
