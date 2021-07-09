import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import siteUrl from '../../../utils/siteUrl';
import { unicodeUtil } from '../../../utils/unicode-util';

// Interface for props
interface IProps {
    title: string,
    slug: string,
    description: string,
    lang?: string,
    meta?: [],
    image?: string,
    slugForm?: string,
    script?: string,
    fbAppId?: string
}

const SEO = (props: IProps): JSX.Element => {

    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                        siteUrl
                    }
                }
            }
        `
    );

    const defaultImg = process.env.DEFAULT_LOGO;
    const meta = props.meta;
    let lang = props.lang;
    let title = props.title || site.siteMetadata.title;
    let metaDescription = props.description || site.siteMetadata.description;
    let author = site.siteMetadata.author;
    let siteUrlDynamics = props.slug || site.siteMetadata.siteUrl;
    let ogImageUrl = props.image || defaultImg;
    let script = props.script;
    let fbAppId = props.fbAppId;

    // Organization Schema
    const org = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Gana',
        alternateName: author,
        url: siteUrl,
        logo: defaultImg,
        // "contactPoint": {
        //   "@type": "ContactPoint",
        //   "telephone": process.env.COUNTRY_CONTACT,
        //   "contactType": "customer service",
        //   "contactOption": "TollFree",
        //   "areaServed": "CO",
        //   "availableLanguage": "es"
        // },
        sameAs: 'https://www.facebook.com/'
    };

    // WebSite Schema
    const website = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': siteUrl + '#website',
        headline: 'Gana',
        name: 'Gana',
        description: unicodeUtil(site.siteMetadata.description),
        url: siteUrl,
        potentialAction: {
            '@type': 'SearchAction',
            target: siteUrl + '?s={search_term_string}',
            'query-input': 'required name=search_term_string'
        }
    };

    let schemas = [];
    if (script) {
        schemas = [org, website, script];
    } else {
        schemas = [org, website];
    }

    const schemaOrgJSONLD = {
        type: 'application/ld+json',
        innerHTML: JSON.stringify(schemas)
    };

    return (
        <Helmet
            htmlAttributes={{ lang }}
            title={title}
            titleTemplate={`%s`}
            link={[
                {
                    rel: 'alternate',
                    href: props.slugForm ? props.slugForm : props.slug ? props.slug : siteUrl,
                    hrefLang: 'es-GT'
                }
            ]}
            meta={[
                {
                    name: `description`,
                    content: metaDescription
                },
                {
                    property: `image`,
                    content: ogImageUrl
                },
                {
                  property: `fb:app_id`,
                  content: fbAppId,
                },
                {
                    property: `og:title`,
                    content: title
                },
                {
                    property: `og:description`,
                    content: metaDescription
                },
                {
                    property: `og:image`,
                    content: ogImageUrl
                },
                {
                    property: `og:type`,
                    content: `website`
                },
                {
                    property: `og:url`,
                    content: siteUrlDynamics
                },
                {
                    name: `twitter:card`,
                    content: `summary`
                },
                {
                    name: `twitter:creator`,
                    content: site.siteMetadata.author
                },
                {
                    name: `twitter:title`,
                    content: title
                },
                {
                    name: `twitter:description`,
                    content: metaDescription
                },
                {
                    name: `twitter:image`,
                    content: ogImageUrl
                },
                {
                    name: 'google-site-verification',
                    content: process.env.GOOGLE_SITE_VERIFICATION
                }
            ].concat(meta)}
            script={[schemaOrgJSONLD]}
        />
    );
}

SEO.defaultProps = {
    lang: `es-CO`,
    meta: [],
    description: ``
};

export default SEO;
