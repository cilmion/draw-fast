import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const TITLE = 'Pictomancer by Magi AI'
const DESCRIPTION = 'Draw a picture with AI.'
const TWITTER_HANDLE = '@magiai_sh'
const TWITTER_CARD = 'social-twitter.png'
const FACEBOOK_CARD = 'social-og.png'
const THEME_COLOR = '#FFFFFF'
const SITE_URL = 'https://pictomancer.magiai.sh'

export const metadata: Metadata = {
	metadataBase: new URL(SITE_URL),
	title: {
		default: TITLE,
		template: `%s • ${TITLE}`,
	},
	description: DESCRIPTION,
	openGraph: {
		title: TITLE,
		description: DESCRIPTION,
		siteName: TITLE,
		type: 'website',
		url: SITE_URL,
		images: FACEBOOK_CARD,
	},
	twitter: {
		creator: TWITTER_HANDLE,
		description: DESCRIPTION,
		card: 'summary_large_image',
		images: TWITTER_CARD,
	},
	applicationName: TITLE,
	appleWebApp: {
		capable: true,
		title: TITLE,
		statusBarStyle: 'black',
	},
	formatDetection: {
		telephone: false,
	},
	icons: [
		{ rel: 'shortcut icon', url: '/favicon.svg' },
		{ rel: 'icon', url: 'favicon-32x32.png', sizes: '32x32' },
		{ rel: 'icon', url: 'favicon-16x16.png', sizes: '16x16' },
		{ rel: 'apple-touch-icon', url: 'touch-icon-iphone.png' },
		{
			rel: 'apple-touch-icon',
			url: 'apple-touch-icon-152x152.png',
			sizes: '152x152',
		},
		{
			rel: 'apple-touch-icon',
			url: 'apple-touch-icon-180x180.png',
			sizes: '180x180',
		},
		{
			rel: 'apple-touch-icon',
			url: 'apple-touch-icon-167x167.png',
			sizes: '167x167',
		},
	],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				{children}
				<Analytics />
			</body>
		</html>
	)
}
