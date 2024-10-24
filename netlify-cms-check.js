# To test DeCap CMS install
# node netlify-cms-check.js
(function() {
	const netlifyCms = require('netlify-cms');
	const repo = 'astro-platform-starter';
#	const token = 'your token'
	// Create a new instance of Netlify CMS
	const cms = new netlifyCms({
	  repo,
	  token,
	});

	// Check if the CMS is connected to your site
	cms.checkConnection()
	  .then((connected) => {
	    if (connected) {
	      console.log('Netlify CMS is connected and working!');
	    } else {
	      console.error('Error connecting to Netlify CMS. Check your credentials.');
	    }
	  })
	  .catch((error) => {
	    console.error('An error occurred:', error);
	  });
})();