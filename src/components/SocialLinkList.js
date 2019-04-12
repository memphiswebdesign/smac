import React, { Component } from 'react';

class SocialLinkList extends Component {
  /* eslint-disable */
  constructor(props) {
    super(props);
  }
  /* eslint-enable */

  render() {
    if (!this.props.list) { return <></> }

    // Assuming a social array, with objects within
    let links =  this.props.list.map((socialObject, index) => {

      let socialType = Object.keys(socialObject)[0];

      // Map the data.js names to the fa-{className} that needs to be used
      const typeClassNameMap = {
        'facebook': 'facebook',
        'instagram': 'instagram',
        'twitter': 'twitter',
        'site': 'link'
      };

      let classNames = `fa fa-${typeClassNameMap[socialType]} ${this.props.rounded ? 'border-icon rounded-icon' : ''}`;

      const link = socialObject[socialType];
      if (link) {
        return (
            <React.Fragment key={ index }>
              <a href={ link } className={ classNames } target="_blank" rel="noopener noreferrer" title={ socialType }>Social Links</a>
            </React.Fragment>
        );
      } else {
        return null;
      }

    });

    return <>{links}</>;
  }
}

export default SocialLinkList;
