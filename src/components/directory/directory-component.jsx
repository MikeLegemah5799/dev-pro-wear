import React from "react";

import MenuItem from "../menu-item/menu-item-component";

import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl:
            "https://images.pexels.com/photos/823723/pexels-photo-823723.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          id: 1,
          linkUrl: "shop/hats"
        },
        {
          title: "jackets",
          imageUrl:
            "https://images.pexels.com/photos/16170/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          id: 2,
          linkUrl: "shop/jackets"
        },
        {
          title: "sneakers",
          imageUrl:
            "https://images.pexels.com/photos/2460438/pexels-photo-2460438.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          id: 3,
          linkUrl: "shop/sneakers"
        },
        {
          title: "womens",
          imageUrl:
            "https://images.pexels.com/photos/1644888/pexels-photo-1644888.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          size: "large",
          id: 4,
          linkUrl: "shop/womens"
        },
        {
          title: "mens",
          imageUrl:
            "https://images.pexels.com/photos/936043/pexels-photo-936043.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          size: "large",
          id: 5,
          linkUrl: "shop/mens"
        }
      ]
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
