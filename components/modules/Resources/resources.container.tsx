import { useEffect, useState } from 'react'

import { useKeycloak } from '@react-keycloak-fork/ssr'
import { useRouter } from 'next/router'
import { useIntl } from 'react-intl'

import { useNotification } from 'hooks/notification'
import { LaboratoryById, PedagogicalMaterial } from 'services/models/applications.model'
import applicationService from 'services/modules/applications'
import { extractPrevPathFromUrl } from 'utils/helpers/extractPrevPathFromUrl'

import ResourcesComponent from './resources.component'
import messages from './resources.messages'
import { ResourceMaterial } from './resources.model'

type Props = {
  id: number
}

const RESOURCE_TYPE = {
  guide: 'guide',
  tutorial: 'tutorial',
  webinar: 'webinar',
  procedure: 'procedure',
}

const ResourcesContainer = ({ id }: Props) => {
  const { onError, onWarning } = useNotification()
  const router = useRouter()
  const intl = useIntl()

  const [resourceData, setResourceData] = useState<LaboratoryById>()
  const [resourceMaterial, setResourceMaterial] = useState<ResourceMaterial>({
    guides: [],
    videos: [],
    webinars: [],
    procedures: [],
  })

  const { keycloak } = useKeycloak()

  const setSimulatorCookie = (token: string) => {
    document.cookie = `sessionSimulador=${token}; domain=.cloudlabs.media; path=/; max-age=86400;`
  }

  const clearSimulatorCookie = () => {
    document.cookie = 'sessionSimulador=; domain=.cloudlabs.media; path=/; max-age=0;'
  }

  const getProcedureHtml = async (procedure: PedagogicalMaterial) => {
    const html = await applicationService.getProcedureHtmlFromUrl(procedure)
    const procedureFormated = {
      ...procedure,
      html,
    }

    return procedureFormated
  }

  const getAllProceduresHtml = async () => {
    const proceduresPromises = resourceMaterial.procedures.map(getProcedureHtml)
    const procedures = await Promise.all(proceduresPromises)

    setResourceMaterial((prevState) => ({
      ...prevState,
      procedures,
    }))
  }

  const getResource = async () => {
    try {
      const data = await applicationService.getApplicationResource(id)

      if (Boolean(!data.pedagogicalMaterials.length) && Boolean(!data.application)) {
        onWarning(intl.formatMessage(messages.notLoaded))
        const prevUrl = extractPrevPathFromUrl(router.asPath, 'detail-resource')
        void router.push(prevUrl)
      }

      setResourceData(data)

      if (!data.pedagogicalMaterials) return

      data.pedagogicalMaterials.forEach((material: PedagogicalMaterial) => {
        const isGuide = material.type.name === RESOURCE_TYPE.guide
        const isTutorial = material.type.name === RESOURCE_TYPE.tutorial
        const isWebinar = material.type.name === RESOURCE_TYPE.webinar
        const isProcedure = material.type.name === RESOURCE_TYPE.procedure

        setResourceMaterial((prevState) => ({
          ...prevState,
          ...(isGuide && { guides: [...prevState.guides, material] }),
          ...(isTutorial && { videos: [...prevState.videos, material] }),
          ...(isWebinar && { webinars: [...prevState.webinars, material] }),
          ...(isProcedure && { procedures: [...prevState.procedures, material] }),
        }))
      })

      if (keycloak?.token) setSimulatorCookie(keycloak.token)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('getApplicationResource() --> error ', error)

      onError(intl.formatMessage(messages.errors.api))

      const prevUrl = extractPrevPathFromUrl(router.asPath, 'detail-resource')
      void router.push(prevUrl)
    }
  }

  const validProcedureHtml = () => {
    const hasProcedures = Object.keys(resourceMaterial?.procedures || {})?.length
    const hasHtml = resourceMaterial.procedures?.[0]?.html

    return hasProcedures && !hasHtml
  }

  useEffect(() => {
    void getResource()

    return clearSimulatorCookie
  }, [])

  useEffect(() => {
    const validProcedure = validProcedureHtml()

    // eslint-disable-next-line no-console
    if (validProcedure) getAllProceduresHtml().catch(console.error)
  }, [resourceMaterial])

  if (!resourceData || !resourceMaterial) return null
  return <ResourcesComponent resource={resourceData} resourceMaterial={resourceMaterial} />
}

export default ResourcesContainer
