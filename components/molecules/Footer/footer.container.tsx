/* eslint-disable no-console */
import { useEffect, useState } from 'react'

import { FormProvider, useForm } from 'react-hook-form'

import { useAppContext } from 'context/appContext'
import { Language } from 'services/models/languages.model'
import languageService from 'services/modules/languages'
import { defaultLanguage } from 'utils/helpers/handleLanguage'

import { FooterComponent } from './footer.component'

type SelectProps = {
  languageCode: string
}

type NewLanguage = 'es' | 'en' | 'pt' | 'tr'

export const FooterContainer = () => {
  const [listLanguage, setListLanguage] = useState<Language[]>([])
  const { updateLanguage } = useAppContext()
  const methods = useForm<SelectProps>({
    mode: 'onChange',
    defaultValues: { languageCode: defaultLanguage() },
  })
  const { setValue, watch } = methods

  const getLanguage = async () => {
    try {
      const data = await languageService.getLanguages()
      setListLanguage(data)
      setValue('languageCode', defaultLanguage())
    } catch (err) {
      console.error('getFooterLanguages --> error\n', err)
    }
  }

  const changeLanguage = () => {
    const selectedLanguage = watch('languageCode')
    defaultLanguage(selectedLanguage.split('-')[0] as NewLanguage)
    if (updateLanguage) updateLanguage(selectedLanguage.split('-')[0] as NewLanguage)
  }
  useEffect(() => {
    if (!listLanguage.length) void getLanguage()
    changeLanguage()
  }, [watch('languageCode')])

  return (
    <FormProvider {...methods}>
      <FooterComponent listLanguage={listLanguage} />
    </FormProvider>
  )
}
