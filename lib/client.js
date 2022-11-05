import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'qat3b65i',
    dataset: 'production',
    apiVersion: '2022-10-29',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,

    /**dole{:vypnuti zpravy ohledne secret tokenu v nezabezpecenem webu} */
    ignoreBrowserTokenWarning: true
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);