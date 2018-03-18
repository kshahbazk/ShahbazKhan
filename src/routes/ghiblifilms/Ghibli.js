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
import s from './Ghibli.css';
import tomato from './icons8-tomato-50.png';
import tomato2x from './icons8-tomato-50x2.png';
import Character from '../../components/Character/Character';

class Ghibli extends React.Component {
  static propTypes = {
    ghibli: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        director: PropTypes.string.isRequired,
        release_date: PropTypes.string.isRequired,
        rt_score: PropTypes.string.isRequired,
        people: PropTypes.array,
      }),
    ).isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>Studio Ghibli Moves</h1>
          {this.props.ghibli.map(item => (
            <article key={item.id} className={s.movieItem}>
              <h1 className={s.movieTitle}>
                <a href={item.url}>{item.title}</a>
              </h1>
              <span className={s.subtileSpan}>
                Directed by: {item.director}
              </span>{' '}
              <span className={s.spacer}> | </span>
              <span className={s.subtileSpan}>
                Released: {item.release_date}
              </span>
              <img
                src={tomato}
                srcSet={`${tomato2x} 2x`}
                width="24"
                height="24"
                alt="Tomato"
              />{' '}
              <span className={s.subtileSpan}>{item.rt_score}%</span>
              <p className={s.movieDesc}>{item.description}</p>
              <div className={s.dropdown}>
                <button className={s.dropbtn}>Characters</button>
                <div className={s.dropdownContent}>
                  {item.people.map(char => <Character url={char} />)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Ghibli);
