import React from 'react'
import { useStaticQuery, graphql } from "gatsby"


const BioShare = ({ title, slug }) => {
    const data = useStaticQuery(graphql`
    query BioShareQuery {
      site {
        siteMetadata {
          socialShare {
            twitter {
              handle
              website
            }
            facebook
            github
          }
        }
      }
    }
  `)


const { socialShare } = data.site.siteMetadata

return(
        <div>
            <ul style={{'list-style': 'none'}}>
                <li>
                    <a style={{width: '20px', height: '20px'}} href={`https://twitter.com/share?text=${title} via @${socialShare.twitter.handle}&url=${socialShare.twitter.website}${slug}`} onclick={(e) => {window.open(this.href, 'twitter-share', 'width=550,height=235'); return false}}>
                    Share on Twitter
                    </a>
                </li>
                {/* <li>
                    <a href="https://news.ycombinator.com/submitlink?u=HTTP://YOUR_URL.COM&t=YOUR CONTENT" onclick="window.open(this.href, 'hn-share', 'width=550,height=350'); return false;">
                    Share on Hacker News
                    </a>
                </li>
                <li>
                    <a href="https://pinterest.com/pin/create/button?url=HTTPS://YOUR_WEBSITE.COM&description=SOME DESCRIPTION &media=https://YOUR_SITE.com/IMAGE.JPG">
                    Share on Pinterest
                    </a>
                </li> 
                <li>
                    <a href="https://www.facebook.com/sharer/sharer.php?u=HTTPS://YOUR_URL.COM" onclick="window.open(this.href, 'facebook-share','width=580,height=296'); return false;">
                     Share on Facebook
                    </a>
                </li>
                */}
            </ul>
        </div>
)
}

export default BioShare