import { FallbackProps } from 'react-error-boundary'

import { ErrorFallbackComponent } from './errorFallback.component'

export const ErrorFallbackContainer = (props: FallbackProps) => (
  <ErrorFallbackComponent {...props} />
)
