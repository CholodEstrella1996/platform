import { useEffect, useState } from 'react'

import { FormProvider, useForm, useWatch } from 'react-hook-form'

import { Institutions } from 'services/models/institutions.model'
import institutionsService from 'services/modules/institutions'

import { InstitutionsComponent } from './institutions.component'
import { DataSearch } from './institutions.model'

// TODO: implementation -> delete

export const InstitutionsContainer = () => {
  const [institutionsList, setInstitutionsList] = useState<Institutions>()
  const methods = useForm<DataSearch>()
  const { control } = methods

  const pageNumber = useWatch({ control, name: 'pageNumber' })

  const getInstitutions = async () => {
    try {
      const response = await institutionsService.getInstitutions(10, pageNumber ?? 0)
      setInstitutionsList(response)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('getInstitutions error >>: ', error)
    }
  }

  useEffect(() => {
    void getInstitutions()
  }, [pageNumber])

  if (!institutionsList) return null
  return (
    <FormProvider {...methods}>
      <InstitutionsComponent {...institutionsList} />
    </FormProvider>
  )
}
