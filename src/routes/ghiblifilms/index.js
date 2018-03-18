/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Ghibli from './Ghibli';
import Layout from '../../components/Layout';

async function action({ fetch }) {
  const resp = await fetch('/graphql', {
    body: JSON.stringify({
      query:
        '{ghibli{id,title,description,url,director,release_date,rt_score,people}}',
    }),
  });
  const { data } = await resp.json();
  if (!data || !data.ghibli) throw new Error('Failed to load the news feed.');
  return {
    title: 'Ghibli Movie Guide',
    component: (
      <Layout>
        <Ghibli ghibli={data.ghibli} />
      </Layout>
    ),
  };
}

export default action;
