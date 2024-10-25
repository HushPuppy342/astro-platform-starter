import { init } from 'decap-cms-app';
import { isClient } from '@astrojs/hooks';

if (isClient) {
    const window = globalThis.window;
    console.log('In client-side code');
    init();
}

// Now the registry is available via the CMS object.
CMS.registerPreviewTemplate("my-template", Astro);

// Start your app here
