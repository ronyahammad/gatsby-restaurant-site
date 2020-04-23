import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'
import Title from '../Globals/Title'
import Svg1 from '../../images/svg_icon/salad.svg'
import Svg2 from '../../images/svg_icon/tray.svg'

const Info=()=>{
    const data =useStaticQuery( graphql`
  {
    
img5: file(relativePath: { eq: "about/big.png" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
}
img6: file(relativePath: { eq: "about/small.png" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
}
}
`)
    return(

        <section className="py-5">
            <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="about_info_wrap">
                    <Title title="Sed ut perspiciatis unde
                     omnis iste natus"/> 
                            <span className="long_dash"></span>
                        <p>Omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi. Exercitation photo booth stumptown tote bag todo Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation photo booth et 8-bit kale chips proident chillwave deep vow laborum. Aliquip veniam delectus, marfa eiusmod pinterest.</p>
                        <ul class="food_list">
                            <li>
                                <img src={Svg1} alt=""/>
                                <span>Fresh Ingredients</span>
                            </li>
                            <li>
                                <img src={Svg2} alt=""/>
                                <span>Expert cooker</span>
                                </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="about_img">
                        <div class="img_1">
                            <Img fluid={data.img5.childImageSharp.fluid} alt=""/>
                        </div>
                        <div class="small_img">
                            <Img fluid={data.img6.childImageSharp.fluid} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

</section>
    )
}
 

export default Info

