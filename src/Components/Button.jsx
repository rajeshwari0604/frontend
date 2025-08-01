import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper>
      <div className="button">
        <div className="box">H</div>
        <div className="box">O</div>
        <div className="box">V</div>
        <div className="box">E</div>
        <div className="box">R</div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .button {
    display: flex;
  }

  .box {
    width: 35px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    font-weight: 700;
    color: #fff;
    transition: all .8s;
    cursor: pointer;
    position: relative;
    background: rgb(58, 165, 253);
    overflow: hidden;
  }

  .box:before {
    content: "W";
    position: absolute;
    top: 0;
    background: #0f0f0f;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateY(100%);
    transition: transform .4s;
  }

  .box:nth-child(2)::before {
    transform: translateY(-100%);
    content: 'O';
  }

  .box:nth-child(3)::before {
    content: 'R';
  }

  .box:nth-child(4)::before {
    transform: translateY(-100%);
    content: 'L';
  }

  .box:nth-child(5)::before {
    content: 'D';
  }

  .button:hover .box:before {
    transform: translateY(0);
  }`;

export default Button;
