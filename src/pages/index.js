import React from "react"
import {Carousel} from "react-bootstrap"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Info from "../components/Home/Info";
import Menu from '../components/Home/Menu'
import Contact from "../components/Home/Contact";
import BackgroundPage from "../components/Globals/BackgroundPage"
const IndexPage = ({data}) => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Carousel>
        <Carousel.Item>
        <BackgroundPage
        img={data.img1.childImageSharp.fluid}
        title="Fresh and Delicious Food 
        For your Health"
        styleClass="default-background "
      />
        </Carousel.Item>
        <Carousel.Item>
        <BackgroundPage
        img={data.img2.childImageSharp.fluid}
        title="Fresh and Delicious Food
        For your Health"
        styleClass="default-background "
      />  
        </Carousel.Item>
      </Carousel>
      <Info/>
      <Menu items={data.menu}/>
      
      <Contact/>
      
    </Layout>
  )
}
export const query = graphql`
  {
    img1: file(relativePath: { eq: "banner/banner.png" }) {
  childImageSharp {
    fluid {
      ...GatsbyImageSharpFluid
    }
  }
}
img2: file(relativePath: { eq: "banner/banner2.png" }) {
  childImageSharp {
    fluid {
      ...GatsbyImageSharpFluid
    }
  }
}

menu: allContentfulCoffee {
  edges {
    node {
      id
      title
      desription {
        desription
      }
      price
      category
      image {
        fixed(width: 50, height: 50) {
          ...GatsbyContentfulFixed_withWebp
        }
      }
    }
  }
}
}
`

export default IndexPage
