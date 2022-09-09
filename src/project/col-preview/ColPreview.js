import React from "react";
import styled from "styled-components";
import "./style.css";
import luxury from "./3-column-preview-card-component-main/images/icon-luxury.svg";
import sedan from "./3-column-preview-card-component-main/images/icon-sedans.svg";
import suvs from "./3-column-preview-card-component-main/images/icon-suvs.svg";

const ColPreview = () => {
  return (
    <Wrapper>
      <Container>
        <div className="sedan">
          <img src={sedan} alt="" />
          <h1>SEDAN</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Necessitatibus, eligendi. Doloremque illo qui corporis labore?
          </p>
          <button>Learn More</button>
        </div>
        <div className="suvs">
          <img src={suvs} alt="" />
          <h1>SUVS</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Necessitatibus, eligendi. Doloremque illo qui corporis labore?
          </p>
          <button>Learn More</button>
        </div>
        <div className="luxury">
          <img src={luxury} alt="" />
          <h1>LUXURY</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Necessitatibus, eligendi. Doloremque illo qui corporis labore?
          </p>
          <button>Learn More</button>
        </div>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 6.25em;
  margin-right: 12.5em;
  margin-left: 12.5em;
  h1 {
    font-family: "Big Shoulders Display", cursive;
    text-align: left;
    color: hsl(0, 0%, 95%);
  }
  p {
    text-align: left;
    color: hsla(0, 0%, 100%, 0.75);
    line-height: 2em;
    font-size: 0.9375em;
  }

  @media screen and (max-width: 980px) {
    button {
      padding: 0.75em 1.875em;
      font-size: 10px;
    }

    @media screen and (max-width: 590px) {
      flex-direction: column;
      padding: 1em;
      .sedan {
        border-top-left-radius: 0.5em;
        border-top-right-radius: 0.5em;
        width: 300px;
      }
      .suv {
        width: 300px;
        max-height: 50px;
      }
      .luxury {
        width: 300px;
        max-height: 50px;
      }
    }
  }
  .sedan {
    background-color: hsl(31, 77%, 52%);
    min-height: 25em;
    padding-top: 2.8125em;
    border-top-left-radius: 0.5em;
    border-bottom-left-radius: 0.5em;
    padding: 2.625em;
    button {
      border: none;
      background-color: hsl(0, 0%, 95%);
      color: hsl(31, 77%, 52%);
      margin-top: 3.125em;
      padding: 0.75em 1.875em;
      border-radius: 1.875em;
      cursor: pointer;
      &:hover {
        background-color: rgba(248, 248, 248, 0);
        color: hsl(0, 0%, 95%);
        border: 0.125em solid hsl(0, 0%, 95%);
      }
    }
  }
  .suvs {
    background-color: hsl(184, 100%, 22%);
    min-height: 25em;
    padding-top: 2.8125em;
    padding: 2.625em;
    button {
      border: none;
      background-color: hsl(0, 0%, 95%);
      color: hsl(184, 100%, 22%);
      margin-top: 3.125em;
      padding: 0.75em 1.875em;
      border-radius: 1.875em;
      cursor: pointer;
      &:hover {
        background-color: rgba(248, 248, 248, 0);
        color: hsl(0, 0%, 95%);
        border: 0.125em solid hsl(0, 0%, 95%);
      }
    }
  }
  .luxury {
    background-color: hsl(179, 100%, 13%);
    min-height: 25em;
    padding-top: 2.8125em;
    border-top-right-radius: 0.5em;
    border-bottom-right-radius: 0.5em;
    padding: 2.625em;
    button {
      border: none;
      background-color: hsl(0, 0%, 95%);
      color: hsl(179, 100%, 13%);
      margin-top: 3.125em;
      padding: 0.75em 1.875em;
      border-radius: 1.875em;
      cursor: pointer;
      &:hover {
        background-color: rgba(248, 248, 248, 0);
        color: hsl(0, 0%, 95%);
        border: 0.125em solid hsl(0, 0%, 95%);
      }
    }
  }
`;

export default ColPreview;
