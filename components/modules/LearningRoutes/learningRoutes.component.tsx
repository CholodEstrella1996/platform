import { useIntl } from 'react-intl'

import BreadCrumbs from 'components/atoms/Breadcrumbs'

import Header from './components/Header'
import TabContentComponent from './components/TabContent'
import messages from './learningRoutes.messages'
import { LearningRouteProps } from './learningRoutes.model'
import { LearningRouteStyles } from './learningRoutes.styles'

export const LearningRouteComponent = ({
  data,
  deleteRoute,
  onSearch,
  onClickHelper,
  idGroup,
  isLoading,
  selectOptions,
}: LearningRouteProps) => {
  const intl = useIntl()
  return (
    <>
      {idGroup && <BreadCrumbs />}
      <Header title={intl.formatMessage(messages.learningRoute.header.title)} />
      <TabContentComponent
        isLoading={isLoading}
        data={data}
        deleteRoute={deleteRoute}
        pageChange={(newPage: number) => void onClickHelper(newPage)}
        onSearch={onSearch}
        idGroup={idGroup}
        selectOptions={selectOptions}
      />
      <style jsx>{LearningRouteStyles}</style>
    </>
  )
}
