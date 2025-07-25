import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { graphql, Link as GatsbyLink } from 'gatsby'
import { Footer } from '../components/shared/footer/Footer'
import { Heading } from '../components/shared/heading/Heading'
import { Link } from '../components/shared/link/Link'
import { Stack } from '../components/shared/stack/Stack'
import { Text } from '../components/shared/text/Text'
import { contact, profile } from '../data/profile-de'
import { settings } from '../data/settings'
import React from 'react'
import { Helmet } from 'react-helmet'

const Imprint = () => {
  const { company, vatId } = profile.personal
  const { address, phone, email } = contact
  return (
    <React.Fragment>
      <Helmet title={`Imprint`} htmlAttributes={{ lang: 'en-GB' }} />
      <Stack
        as="main"
        direction="column"
        justify="space-between"
        gap="16px"
        css={{
          paddingTop: '3rem',
          marginInline: '4rem',
          height: 'calc(100vh - 5.5rem)',
        }}
      >
        <Stack direction="column" gap="16px">
          <Link as={GatsbyLink} to="/">
            <Stack gap="8px" align="center">
              <FontAwesomeIcon size="lg" color="grey" icon={faChevronLeft} />
              <Text css={{ fontSize: '16px' }}>Back</Text>
            </Stack>
          </Link>
          <Heading
            size="md"
            as="h1"
            css={{ fontWeight: 800, fontSize: '20px' }}
          >
            Imprint
          </Heading>

          <Text>
            {company ? (
              <>
                {company}
                <br />
              </>
            ) : undefined}
            {address.line1 && (
              <>
                {address.line1}
                <br />
              </>
            )}
            {address.line2 && (
              <>
                {address.line2}
                <br />
              </>
            )}
            {address.line3}
          </Text>
          <Heading size="sm" as="h2">
            Contact
          </Heading>
          <Text>
            {phone}
            <br />
            {email}
          </Text>
          {vatId && (
            <>
              <Heading size="sm" as="h2">
                VAT ID
              </Heading>
              <Text>
                VAT identification number:
                <br />
                {vatId}
              </Text>
            </>
          )}
          <Heading size="sm" as="h2">
            Editorial responsibility
          </Heading>
          <Text>
            {company ? (
              <>
                {company}
                <br />
              </>
            ) : undefined}
            {address.line1 && (
              <>
                {address.line1}
                <br />
              </>
            )}
            {address.line2 && (
              <>
                {address.line2}
                <br />
              </>
            )}
            {address.line3}
          </Text>
          <Heading size="sm" as="h2">
            Consumer dispute resolution / Universal arbitration board
          </Heading>
          <Text>
            We are not willing or obligated to participate in dispute resolution
            proceedings before a consumer arbitration board.
          </Text>
          <Text>
            Source:
            <Text as="a" href="https://www.e-recht24.de">
              eRecht24
            </Text>
          </Text>
        </Stack>
        <Footer css={{ marginTop: '2rem', paddingBottom: '2.5rem' }}>
          <Link as={GatsbyLink} to="/">
            CV
          </Link>
          <Link as={GatsbyLink} to={`/privacy-en`}>
            Privacy
          </Link>
          {settings.useLocalization && (
            <Link as={GatsbyLink} to="/imprint-de">
              Deutsche Version
            </Link>
          )}
        </Footer>
      </Stack>
    </React.Fragment>
  )
}
export default Imprint

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
