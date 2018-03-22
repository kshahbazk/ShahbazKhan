/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { GraphQLList as List } from 'graphql';
import fetch from 'node-fetch';
import crypto from 'crypto';
import MarvelCharacterType from '../types/MarvelCharacterType';
import config from '../../config';

const url = 'https://gateway.marvel.com/v1/public/characters';

let items = [];
let lastFetchTask;
let lastFetchTime = new Date(1970, 0, 1);

function getHash(data) {
  return crypto
    .createHash('md5')
    .update(data)
    .digest('hex');
}

function getURL(apiBase) {
  const limit = '100';
  const apiKey = config.auth.marvel.key;
  const secretKey = config.auth.marvel.secret;
  const ts = Math.random();
  const hash = getHash(ts + secretKey + apiKey);
  return `${apiBase}?limit=${limit}&ts=${ts}&apikey=${apiKey}&hash=${hash}`;
}

const marvel = {
  type: new List(MarvelCharacterType),
  resolve() {
    if (lastFetchTask) {
      return lastFetchTask;
    }

    if (new Date() - lastFetchTime > 1000 * 60 * 10 /* 10 mins */) {
      // const fullURL = getURL(url);
      const fullURL = getURL(url);
      lastFetchTime = new Date();
      lastFetchTask = fetch(fullURL)
        .then(response => response.json())
        .then(data => {
          if (data.status === 'Ok') {
            items = data.data.results;
          }

          lastFetchTask = null;
          return items;
        })
        .catch(err => {
          lastFetchTask = null;
          throw err;
        });

      if (items.length) {
        return items;
      }

      return lastFetchTask;
    }

    return items;
  },
};

export default marvel;
