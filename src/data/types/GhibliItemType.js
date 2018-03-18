/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
  GraphQLList as ListType,
} from 'graphql';

const GhibliItemType = new ObjectType({
  name: 'GhibliItem',
  fields: {
    id: { type: new NonNull(StringType) },
    title: { type: new NonNull(StringType) },
    description: { type: new NonNull(StringType) },
    director: { type: new NonNull(StringType) },
    release_date: { type: new NonNull(StringType) },
    rt_score: { type: new NonNull(StringType) },
    url: { type: new NonNull(StringType) },
    people: { type: new ListType(StringType) },
  },
});

export default GhibliItemType;
