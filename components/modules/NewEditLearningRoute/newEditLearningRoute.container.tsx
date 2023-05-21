import { useLayoutEffect, useRef, useState } from 'react'

import { useRouter } from 'next/router'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { OptionProps } from 'components/atoms/Select/select.models'
import { TreeNode } from 'components/atoms/TreeLabs/treeLabs.model'
import { useNotification } from 'hooks/notification'
import { Items } from 'services/models/learning.model'
import groupService from 'services/modules/group'
import learningService from 'services/modules/learning-unit'
import subscriptionService from 'services/modules/subscriptions'
import { formatResponse, flatAndConcat } from 'utils/helpers/treeLabs'
import {
  formatGroupOptions,
  formatLearningRequest,
  formatSubscriptionOptions,
} from 'utils/valuesForm/new-edit-learning-units'

import NewEditLearningRoute from './newEditLearningRoute.component'
import messages from './newEditLearningRoute.messages'
import { FormProps, LabList, SelectReference } from './newEditLearningRoute.model'

const { getSubscriptions } = subscriptionService
const { getLearningUnitsById, getAreasTree } = learningService
const { getGroups, getGroupById } = groupService

type NewEditLearningProps = {
  isEditable: boolean
  idLearning?: number
}

const NewEditLearningRouteContainer = ({ isEditable, idLearning }: NewEditLearningProps) => {
  const [isSaving, setIsSaving] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [nodes, setNodes] = useState<TreeNode[]>([])
  const [laboratories, setLaboratories] = useState<LabList[]>([])
  const [groupOptions, setGroupOptions] = useState<OptionProps[]>([])
  const [subscriptions, setSubscriptions] = useState<OptionProps[]>([])
  const [currentSubscription, setCurrentSubscription] = useState<number>()
  const groupSelectRef = useRef<SelectReference>(null)

  const intl = useIntl()
  const router = useRouter()
  const methods = useForm<FormProps>({ mode: 'onSubmit' })
  const { onSuccess, onError, onWarning } = useNotification()

  const canEdit = isEditable && idLearning
  const idFromGroups = router.query['id-group']
  const historyIndex = router.asPath.indexOf('learning-units')
  const { handleSubmit, watch, setValue } = methods
  const subscription = watch('subscription')

  const setLaboratoryInOrder = (labs: LabList[]) => setLaboratories(labs)
  const setCurrentLabsTree = (selectedLabs: LabList[]) => {
    const labFields: string[] = selectedLabs.map(({ id }) => String(id))
    setValue('fields', labFields)
  }

  const getSelectedLabs = (items: Items[]) => {
    const selectedLabs: LabList[] = items.map((labs) => ({
      id: labs.productUnit.id,
      text: labs.productUnit.name,
    }))
    setLaboratories(selectedLabs)
    setCurrentLabsTree(selectedLabs)
  }

  const fetchSubscriptions = async () => {
    try {
      const response = await getSubscriptions()
      const options = formatSubscriptionOptions(response)
      setSubscriptions(options)
      if (!canEdit) setValue('subscription', options[0].value)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('fetchSubscription() --> error\n', error)
    }
  }

  const fetchGroups = async () => {
    setIsLoading((prev) => !prev)
    try {
      const response = await getGroups({ subscriptionId: subscription })
      setGroupOptions(formatGroupOptions(response))
      if (!canEdit && subscription && !idFromGroups) groupSelectRef.current?.clearValue()
      if (subscription !== currentSubscription) getSelectedLabs([])
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('getGroups() --> error\n', error)
    }
    setIsLoading((prev) => !prev)
  }

  const fetchAreasTree = async () => {
    const queryParams = watch('search')
    setIsLoading((prev) => !prev)
    try {
      const response = await getAreasTree(subscription, queryParams)
      const formattedResponse = {
        value: response.label,
        label: response.label,
        children: formatResponse(response.content),
      }

      setNodes([formattedResponse])
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('getAreaTree --> error\n', error)
      onError(intl.formatMessage(messages.notificationTexts.getLabsError))
    }
    setIsLoading((prev) => !prev)
  }

  const addLabs = async () => {
    const selectedLeafs = watch('fields')
    const flattened = flatAndConcat(nodes[0]?.children ?? [])
    if (!flattened.length) return

    const laboratoriesList = selectedLeafs?.map((leaf) => {
      const findId = flattened.find((node) => node.value === leaf)
      return {
        id: Number(findId?.value),
        text: String(findId?.label),
      }
    })

    setLaboratories(laboratoriesList ?? [])
  }

  const fetchLearningUnit = async (id: number) => {
    setIsLoading((prev) => !prev)
    try {
      const { name, subscriptionId, description, items, classroomId } = await getLearningUnitsById(
        id,
      )
      const values = { name, description, group: String(classroomId), subscription: subscriptionId }
      Object.entries(values).forEach(([key, value]) => setValue(key as keyof FormProps, value))
      getSelectedLabs(items)
      setCurrentSubscription(subscriptionId)
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('getLearningUnit Error --> ', err)
      onError(intl.formatMessage(messages.getRoute.error))
      void router.push(`/learning-units`)
    }
    setIsLoading((prev) => !prev)
  }

  const onSubmit: SubmitHandler<FormProps> = async (data) => {
    setIsSaving((prevState) => !prevState)
    if (!laboratories.length) {
      onWarning(intl.formatMessage(messages.notificationTexts.warning))
      return
    }
    const currentLeafsInOrder = laboratories.map(({ id }) => String(id))

    const routerPath = router.asPath.slice(0, historyIndex)

    const { group } = data
    const formattedRequest = formatLearningRequest(currentLeafsInOrder, data)
    try {
      const response = canEdit
        ? await learningService.updateLearningUnit(
            { ...formattedRequest, classroomId: Number(group) },
            idLearning,
          )
        : await learningService.createLearningUnit(formattedRequest, group)
      onSuccess(intl.formatMessage(messages.notificationTexts.newEdit.success, { isEditable }))
      void router.push(
        `${routerPath}learning-units/detail-learning-units/${response.id}/${response.name}`,
      )
    } catch {
      onError(intl.formatMessage(messages.notificationTexts.newEdit.error, { isEditable }))
    }
    setIsSaving((prevState) => !prevState)
  }

  const fetchLearningFromGroup = async () => {
    setIsLoading((prev) => !prev)
    try {
      const [groups, groupById, subs] = await Promise.all([
        getGroups({ subscriptionId: subscription }),
        getGroupById(Number(idFromGroups)),
        getSubscriptions(),
      ])

      setGroupOptions(formatGroupOptions(groups))
      setSubscriptions(formatSubscriptionOptions(subs))
      setValue('subscription', groupById.subscription.id)
      setValue('group', String(idFromGroups))
      if (canEdit) {
        const { name, description, items } = await getLearningUnitsById(idLearning)
        setValue('name', name)
        setValue('description', description)
        getSelectedLabs(items)
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('getGroupsFromGROUPS() --> error\n', error)
    }
    setIsLoading((prev) => !prev)
  }

  useLayoutEffect(() => {
    if (!subscriptions.length && !subscription && !idFromGroups) void fetchSubscriptions()
    if (subscription && !idFromGroups) void fetchGroups()
    if (canEdit && !idFromGroups && subscription !== currentSubscription) getSelectedLabs([])
    if (idFromGroups && !subscription) void fetchLearningFromGroup()
    if (canEdit && !subscription && !idFromGroups) void fetchLearningUnit(idLearning)
  }, [subscription])

  return (
    <FormProvider {...methods}>
      <NewEditLearningRoute
        isSaving={isSaving}
        isEditable={isEditable}
        onSubmit={handleSubmit(onSubmit)}
        onEdit={fetchAreasTree}
        nodes={nodes[0]?.children ?? []}
        groupOptions={groupOptions}
        subscriptionOptions={subscriptions}
        labsList={laboratories}
        addLabs={() => addLabs()}
        setLaboratoryInOrder={setLaboratoryInOrder}
        isLoading={isLoading}
        reference={groupSelectRef}
      />
    </FormProvider>
  )
}

export default NewEditLearningRouteContainer
