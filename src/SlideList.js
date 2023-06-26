import { Notes, Slide } from "spectacle";
import React from "react";
import * as PropTypes from "prop-types";

SlideList.propTypes = {
  file: PropTypes.object,
};

export function SlideList({
  file,
  backgroundColor = "black",
  textColor = "white",
}) {
  const { notes } = file;
  const slides = file.default;
  return (
    <>
      {slides
        .map((MDXSlide, i) => [MDXSlide, notes[i]])
        .map(([MDXSlide, MDXNote], i) => (
          <Slide
            key={`slide-${i}`}
            slideNum={i}
            backgroundColor={backgroundColor}
            textColor={textColor}
          >
            <MDXSlide />
            <Notes>
              <MDXNote />
            </Notes>
          </Slide>
        ))}
    </>
  );
}
