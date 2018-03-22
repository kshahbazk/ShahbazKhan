/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Marvel from './Marvel';
import Layout from '../../components/Layout';

async function action({ fetch }) {
  const resp = await fetch('/graphql', {
    body: JSON.stringify({
      query: '{marvel{id,name,description,thumbnail {path,extension,}}}',
    }),
  });
  const { data } = await resp.json();
  if (!data || !data.marvel) throw new Error('Failed to load the news feed.');
  return {
    title: 'Marvel Character Guide',
    component: (
      <Layout>
        <Marvel marvel={data.marvel} />
      </Layout>
    ),
  };
}

export default action;
