module.exports = {
	title: 'inpm',
	description: '万事皆虚，万事皆允',
	head: [
		['link', {
			rel: 'icon',
			href: '/favicon.ico'
		}],
	],
	serviceWorker: true,
	port: 7777,
	themeConfig: {
		nav: [{
				text: 'Home',
				link: '/'
			},
			{
				text: 'Blog',
				link: '/blog'
			},
			{
				text: 'About',
				link: '/about'
			},
			{
				text: 'Github',
				link: 'https://github.com/c-yyy'
			},
		],
		sidebarDepth: 2,
		search: true,
		searchMaxSuggestions: 10,
		lastUpdated: 'Last Updated',
	}
}