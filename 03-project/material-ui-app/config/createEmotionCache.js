/**
 * file: config/createEmotionCache.js
 * description: file responsible for creating the 'emotionCache' configuration
 * data: 10/25/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import createCache from '@emotion/cache';

export default function createEmotionCache() {
  return createCache({ key: 'css', prepend: true });
}
