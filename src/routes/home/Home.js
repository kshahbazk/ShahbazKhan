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
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import s from './Home.css';

const PHOTO_SET = [
  {
    src:
      'https://image.ibb.co/kCsFjc/29026106_10212732107990593_4286220479137579008_o.jpg',
    width: 329,
    height: 329,
  },
  {
    src:
      'https://image.ibb.co/kB6xxx/28516731_10212694515810812_3905791474410792888_o.jpg',
    width: 329,
    height: 329,
  },
  {
    src:
      'https://image.ibb.co/kegVHx/16463697_10209443191809744_5382730187737027492_o.jpg',
    width: 329,
    height: 329,
  },
  {
    src:
      'https://image.ibb.co/g2sFjc/16601682_10209479986649592_8163757091926767023_o.jpg',
    width: 329,
    height: 329,
  },
  {
    src:
      'https://image.ibb.co/hJGajc/14633641_10209075864906801_5933935922877307041_o.jpg',
    width: 329,
    height: 329,
  },
  {
    src:
      'https://image.ibb.co/nBcFjc/13882098_10207911153309739_3176624150014184165_n.jpg',
    width: 329,
    height: 329,
  },
  {
    src:
      'https://image.ibb.co/dAiXVH/13497690_10207592204976230_3020302380919501341_o.jpg',
    width: 329,
    height: 329,
  },
  {
    src:
      'https://image.ibb.co/nyM84c/18558561_10210333072296200_5017715543966711989_o.jpg',
    width: 329,
    height: 329,
  },
  {
    src:
      'https://image.ibb.co/k6cFjc/1653531_10202003849630839_230951538_n.jpg',
    width: 329,
    height: 329,
  },
];

class Home extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };
  constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{this.props.title}</h1>
          <Gallery photos={PHOTO_SET} onClick={this.openLightbox} />
          <Lightbox
            images={PHOTO_SET}
            onClose={this.closeLightbox}
            onClickPrev={this.gotoPrevious}
            onClickNext={this.gotoNext}
            currentImage={this.state.currentImage}
            isOpen={this.state.lightboxIsOpen}
          />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
