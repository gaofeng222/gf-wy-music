import { RouteObject, Navigate } from 'react-router-dom'
import { lazy } from 'react'

const Discover = lazy(() => import('@v/Discover'))
const Focus = lazy(() => import('@v/Focus'))
const Mine = lazy(() => import('@v/Mine'))
const Page404 = lazy(() => import('@v/Page404'))
const DownLoad = lazy(() => import('@v/DownLoad'))
const Recommend = lazy(() => import('@v/Discover/SubPages/Recommend'))
const Songs = lazy(() => import('@v/Discover/SubPages/SongLists'))
const Artist = lazy(() => import('@v/Discover/SubPages/Artist'))
const Ranking = lazy(() => import('@v/Discover/SubPages/Ranking'))
const Album = lazy(() => import('@v/Discover/SubPages/Album'))
const Djradio = lazy(() => import('@v/Discover/SubPages/Djradio'))

const routes: RouteObject[] = [
	{ path: '/', element: <Navigate to="/discover" /> },
	{
		path: '/discover',
		element: <Discover />,
		children: [
			{ path: '/discover', element: <Navigate to="/discover/recommend" /> },
			{ path: '/discover/recommend', element: <Recommend /> },
			{ path: '/discover/songs', element: <Songs /> },
			{ path: '/discover/rank', element: <Ranking /> },
			{ path: '/discover/artist', element: <Artist /> },
			{ path: '/discover/album', element: <Album /> },
			{ path: '/discover/djradio', element: <Djradio /> }
		]
	},
	{ path: 'focus', element: <Focus /> },
	{ path: '/mine', element: <Mine /> },
	{ path: '/download', element: <DownLoad /> },
	{ path: '*', element: <Page404 /> }
]

export default routes
