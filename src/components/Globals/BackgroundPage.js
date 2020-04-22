import React from "react";
import BackgroundImage from "gatsby-background-image";

export default function BackgroundPage({
  img,
  styleClass,
  title,
  children
}) {
  return (
    <BackgroundImage className={styleClass} fluid={img}>
      <h1 className="title text-white  text-center display-4 ">
        {title}
      </h1>
      {children}
    </BackgroundImage>
  );
}

BackgroundPage.defaultProps = {
  title: "default title",
  styleClass: "default-background"
};