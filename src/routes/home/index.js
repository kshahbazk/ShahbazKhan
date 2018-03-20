/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Home from './Home';
import Layout from '../../components/Layout';

const title =
  'One machine can do the work of fifty ordinary men. No machine ' +
  'can do the work of one extraordinary man. –Elbert Hubbard';

function action() {
  return {
    title,
    component: (
      <Layout>
        <Home title={title} />
      </Layout>
    ),
  };
}

export default action;
