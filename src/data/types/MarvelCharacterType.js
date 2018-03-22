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
  GraphQLID as ID,
} from 'graphql';

const ThumnailObject = new ObjectType({
  name: 'thumnail',
  fields: {
    path: { type: new NonNull(StringType) },
    extension: { type: new NonNull(StringType) },
  },
});

const MarvelCharacterType = new ObjectType({
  name: 'MarvelCharacterType',
  fields: {
    id: { type: new NonNull(ID) },
    name: { type: new NonNull(StringType) },
    description: { type: new NonNull(StringType) },
    thumbnail: { type: new NonNull(ThumnailObject) },
  },
});

export default MarvelCharacterType;
