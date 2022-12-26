import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient ({
    projectId: '2le4b57t',
    dataset: 'production',
    apiVersion: '2022-11-21',
    useCdn: true,
    token: 'skCWU0IScJNsneGlWNwyRJu7DkX7vWCZnDC5aX3kTpPz08Ea88S2nV5QMICejxrXfM8E6ze3EFqfAnG5wfkMoxIH0oa4haqsVKKleNHlGXlrbvraTJ9AJNTWeBPuF4tIN3PDMnGaxkREUxKxZKAvZaxjnelmKscFgzHzNidmgoUY89rzI7A2',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);