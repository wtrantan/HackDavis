import React, { Component } from 'react';
import Sky from 'react-sky';
import pasta from "../../assets/images/pasta.png";
import ramen from "../../assets/images/ramen.png";
import apple from "../../assets/images/apple1.png";
import salad from "../../assets/images/salad.png";
import taco from "../../assets/images/taco1.png";
import dumpling from "../../assets/images/dumpling.png";
import sushi from "../../assets/images/sushi.png";
import sandwich from "../../assets/images/sandwich.png";
import fruits from "../../assets/images/fruits.png";
import karina from "../../assets/images/karina.png";

// you can pass imported images to Sky


class Skyback extends Component {
  render() {
    return (
      <div>
       { /* Sky adapts size to its container */}
        <Sky
          images={{
            /* FORMAT AS FOLLOWS */
            0: pasta,  /* You can pass as many images as you want */
            1: ramen,
            2: salad,
            3: apple,
            4: taco,
            5: dumpling,
            6: sushi,
            7: fruits,
            8: sandwich,
            9: karina,
        
            /* you can pass images in any form: link, imported via webpack... */
            /* 3: your other image... */
            /* 4: your other image... */
            /* 5: your other image... */
            /* ... */
          }}
          how={100} /* Pass the number of images Sky will render chosing randomly */
          time={20} /* time of animation */
          size={'150px'} /* size of the rendered images */
          background={'lightgray'} /* color of background */
        />
      </div>
    );
  }
}

export default Skyback;