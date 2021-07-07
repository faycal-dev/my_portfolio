import React from "react";
import Swiper from "react-id-swiper";

const Project = (props) => {
  return (
    
        <Swiper {...props.params}>
          {props.images.map((item, index) => {
            return (
              <img
                id={index}
                src={item}
                style={{
                    height:"100%",
                    width:"100%"
                }}
              />
            );
          })}
        </Swiper>
     
  );
};

export default Project;
