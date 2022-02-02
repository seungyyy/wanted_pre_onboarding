import styled from "@emotion/styled/";
import { useState } from 'react';

const Toggle = () => { 
  const [isChecked, setIsChecked] = useState(false);
  return (
    <>
      <h2>Toggle</h2>
      <ToggleBox>
        <label htmlFor="toggle" class="label">
          <input
            type="checkbox"
            id="toggle"
            onChange={() => { 
              isChecked ? setIsChecked(false) : setIsChecked(true);
            }}
            checked={isChecked}
          />
          <span class="slider"></span>
        </label>
        <p>Toggle Switch {!isChecked ? "OFF" : "ON"}</p>
      </ToggleBox>
    </>
  );
}

const ToggleBox = styled.div`
  .label {
    position: relative;
    display: inline-block;
    width: 70px;
    height: 30px;
    #toggle {
      opacity: 0;
      width: 0;
      height: 0;
    }
    .slider {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #dedede;
      border-radius: 20px;
      cursor: pointer;
      transition: 0.4s;
      &:before {
        position: absolute;
        content: '';
        height: 21px;
        width: 21px;
        left: 5px;
        top: 5px;
        background: #fff;
        border-radius: 50%;
        transition: 0.4s;
      }
    }
    #toggle:checked + .slider {
      background-color: #4900ce;
    }
    #toggle:checked + .slider::before {
      transform: translateX(40px);
    }
  }
`;


export default Toggle;