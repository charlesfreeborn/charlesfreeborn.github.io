/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
            facebook
            github
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>
         Welcome to my digital garden where I share my learnings and cogitations on the modern web development - JavaScript and its ecosystem, React, Gatsby, JAMstack - all written by <strong>{author.name}</strong> {author.summary}
        {` `}
        <span style={{display: 'block', 'margin-right': '3px'}}>Follow me on:</span>
        <a href={`https://twitter.com/${social.twitter}`} target={`_blank`}>
            Twitter
        </a> 
        {/* <span style={{margin: '0 3px 0 3px'}}>|</span>
        <a href={`https://www.facebook.com/${social.facebook}`}>
            Facebook
        </a> */}
        <span style={{margin: '0 3px 0 3px'}}>|</span>
        <a href={`https://github.com/${social.github}`} target={`_blank`} >
             GitHub 
        </a>
        
      </p>
    </div>
  )
}

export default Bio
