import React from "react"
import { graphql,useStaticQuery } from "gatsby"
import BackgroundPage from "../components/Globals/BackgroundPage"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from 'gatsby-image'
import Title from '../components/Globals/Title'
const AboutPage = () => {
    const data = useStaticQuery (graphql`
    {
      img1: file(relativePath: { eq: "banner/bradcam.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
    }
    img2: file(relativePath: { eq: "about/about_1.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
  }
  img3: file(relativePath: { eq: "about/about_2.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
  }
   
  }
  `)
    return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundPage 
    img={data.img1.childImageSharp.fluid}
    title="about page" 
    styleClass="default-background bradcam_area bradcam_bg_1"
    />     
     <div class="main_about_wrap">
    <div class="container">
        <div class="row">
            <div class="col-xl-12">
                <h3><Title title="Exercitation photo booth stumptown tote
                    bag todo"/> </h3>
                    <p>Omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi. Exercitation photo booth stumptown tote bag todo Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation photo booth et 8-bit kale chips proident chillwave deep vow laborum. Aliquip veniam delectus, marfa eiusmod pinterest.</p>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-lg-10">
                <div class="row">
                    <div class="col-xl-6 col-md-6">
                        <div class="about_thumb">
                            <Img fluid={data.img2.childImageSharp.fluid} alt=""/>
                        </div>
                    </div>
                    <div class="col-xl-6 col-md-6">
                        <div class="about_thumb">
                            <Img fluid={data.img3.childImageSharp.fluid} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</Layout>
  )
}


export default AboutPage
