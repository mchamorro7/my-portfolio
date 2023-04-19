import { portableTextToHtml } from 'astro-sanity';

export function sanityPortableText(portabletext: Array<Object>) {
  return portableTextToHtml(portabletext);
}
