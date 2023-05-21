import { FormProvider, useForm } from 'react-hook-form'

import { DashboardComponent } from './dashboard.component'
import { Filters } from './dashboard.model'

export const DashboardContainer = () => {
  const methods = useForm<Filters>()

  return (
    <FormProvider {...methods}>
      <DashboardComponent />
    </FormProvider>
  )
}
