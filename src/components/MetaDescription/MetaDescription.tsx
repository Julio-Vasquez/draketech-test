import { Helmet } from 'react-helmet-async'

import { MetaDescriptionPropTypes, MetaDescriptionProps } from './types'

export const MetaDescription = ({
  title,
  description,
  keywords,
}: MetaDescriptionProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} data-rh="true" />
      <meta name="keywords" content={keywords.join(', ')} data-rh="true" />
    </Helmet>
  )
}

MetaDescription.propTypes = MetaDescriptionPropTypes
