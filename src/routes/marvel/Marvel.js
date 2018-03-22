/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Marvel.css';
// import config from '../../config';

class Marvel extends React.Component {
  static propTypes = {
    marvel: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired,
        extension: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>Marvel Characters</h1>
          <a href="http://marvel.com\">
            Data provided by Marvel. © 2018 MARVEL
          </a>
          <ul className={s.characterBlock}>
            {this.props.marvel.map(item => (
              <li key={item.id} className={s.characterContainer}>
                <img
                  className={s.marvelImage}
                  src={`${item.thumbnail.path}/standard_large.${
                    item.thumbnail.extension
                  }`}
                  srcSet={`${item.thumbnail.path}/standard_fantastic.${
                    item.thumbnail.extension
                  }`}
                  alt="Character"
                />
                <p className={s.characterTitle}>{item.name}</p>
                <p className={s.characterDesc}>{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Marvel);
