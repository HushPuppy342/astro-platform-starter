const { init } = require('decap-cms-app');

// Initialize the CMS object
init();

// Now the registry is available via the CMS object.
CMS.registerPreviewTemplate("my-template", Astro);

// Start your app here
