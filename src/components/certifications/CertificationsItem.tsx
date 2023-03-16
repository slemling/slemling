import { Stack } from '../shared/stack/Stack'
import { PropsWithChildren } from 'react'
import { Heading } from '../shared/heading/Heading'

export type CertificationsItemProps = PropsWithChildren & {
  title: string
  subtitle?: string
  authority: string
  date: string
}

export const CertificationsItem = ({
  title,
  subtitle,
  authority,
  date,
  ...props
}: CertificationsItemProps) => {
  return (
    <Stack
      direction="column"
      gap="2px"
      css={{
        pageBreakInside: 'avoid',
      }}
    >
      <Heading size="sm">{title}</Heading>
      {subtitle && <Heading size="xs">{subtitle}</Heading>}
      <Heading size="xs">
        {authority} | {date}
      </Heading>
    </Stack>
  )
}