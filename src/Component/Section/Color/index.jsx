import React from "react";
import PropTypes from "prop-types";

Colors.propTypes = {};

function Colors({ colors }) {
   return (
      <div className="colors">
         {colors.map((color, index) => (
            <button key={index} style={{ background: color }}></button>
         ))}
      </div>
   );
}

export default Colors;
