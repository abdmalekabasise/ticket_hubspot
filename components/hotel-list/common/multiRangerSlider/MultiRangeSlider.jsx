import React, { useCallback, useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";

const MultiRangeSlider = ({ min, max, onChange }) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  // Get min and max values when their state changes
  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);

  return (
    <div className="container">
        <style jsx>{`
        .container {
            height: 25vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          
          .slider {
            position: relative;
            width: 200px;
          }
          
          .slider__track,
          .slider__range,
          .slider__left-value,
          .slider__right-value {
            position: absolute;
          }
          
          .slider__track,
          .slider__range {
            border-radius: 3px;
            height: 5px;
          }
          
          .slider__track {
            background-color: #ced4da;
            width: 100%;
            z-index: 1;
          }
          
          .slider__range {
            background-color: #399993;
            z-index: 2;
          }
          
          .slider__left-value,
          .slider__right-value {
            color: #000000;
            font-size: 12px;
            margin-top: 20px;
          }
          
          .slider__left-value {
            left: 6px;
          }
          
          .slider__right-value {
            right: -4px;
          }
          
          /* Removing the default appearance */
          .thumb,
          .thumb::-webkit-slider-thumb {
            -webkit-appearance: none;
            -webkit-tap-highlight-color: transparent;
          }
          
          .thumb {
            pointer-events: none;
            position: absolute;
            height: 0;
            width: 200px;
            outline: none;
          }
          
          .thumb--left {
            z-index: 3;
          }
          
          .thumb--right {
            z-index: 4;
          }
          
          /* For Chrome browsers */
          .thumb::-webkit-slider-thumb {
            background-color: #f1f5f7;
            border: none;
            border-radius: 50%;
            box-shadow: 0 0 1px 1px #ced4da;
            cursor: pointer;
            height: 18px;
            width: 18px;
            margin-top: 4px;
            pointer-events: all;
            position: relative;
          }
          
          /* For Firefox browsers */
          .thumb::-moz-range-thumb {
            background-color: #f1f5f7;
            border: none;
            border-radius: 50%;
            box-shadow: 0 0 1px 1px #ced4da;
            cursor: pointer;
            height: 18px;
            width: 18px;
            margin-top: 4px;
            pointer-events: all;
            position: relative;
          }
          
      `}</style>
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        onChange={(event) => {
          const value = Math.min(Number(event.target.value), maxVal - 1);
          setMinVal(value);
          minValRef.current = value;
        }}
        className="thumb thumb--left"
        style={{ zIndex: minVal > max - 100 && "5" }}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        onChange={(event) => {
          const value = Math.max(Number(event.target.value), minVal + 1);
          setMaxVal(value);
          maxValRef.current = value;
        }}
        className="thumb thumb--right"
      />

      <div className="slider">
        <div className="slider__track" />
        <div ref={range} className="slider__range" />
        <div className="slider__left-value">{minVal}</div>
        <div className="slider__right-value">{maxVal}</div>
      </div>
    </div>
  );
};

MultiRangeSlider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

export default MultiRangeSlider;
