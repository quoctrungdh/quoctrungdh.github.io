/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	/* Your site config here */
	plugins: [
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `src`,
				path: `${__dirname}/src/`,
			},
		},
		`gatsby-transformer-remark`,
		'gatsby-plugin-postcss',
		// {
		// 	resolve: `gatsby-plugin-typography`,
		// 	options: {
		// 		pathToConfigModule: `src/utils/typography`,
		// 	},
		// },
		`gatsby-plugin-react-helmet`
	],
	siteMetadata: {
		title: "Trung Do's Blog"
	}
}
