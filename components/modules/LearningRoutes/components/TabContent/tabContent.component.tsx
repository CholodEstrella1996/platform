import { Plus, Search } from '@easy-eva-icons/react'
import { IconButton } from '@mui/material'
import { useRouter } from 'next/router'
import { useIntl } from 'react-intl'

import { Button } from 'components/atoms/Button'
import MoreMenu from 'components/atoms/MoreMenu'
import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import messagesRoute from 'components/modules/LearningRoutes/learningRoutes.messages'
import Filter from 'components/molecules/Filter'
import { InputProps } from 'components/molecules/Filter/filter.model'
import TableDataLearningRoutes from 'components/molecules/TableDataLearningRoutes'
import { GROUP_PERMISSIONS, LEARNING_UNIT_PERMISSIONS } from 'constants/permissions'
import { TIME_ZONE_UTC } from 'constants/timeZone'
import { useAppContext } from 'context/appContext'
import { useMediaQuery } from 'hooks/use-media-query'
import { historyPath } from 'utils/helpers/historyPath'

import { TabContentStyles, TabContentGlobalStyles } from './tabContent.styles'
import { LearningData, LearningTableProps } from '../../learningRoutes.model'

const { colors, mediaQueries } = theme
const { detailFromLearning } = LEARNING_UNIT_PERMISSIONS
const {
  learning: { detailFromGroup },
} = GROUP_PERMISSIONS

const TabContentComponent = ({
  data,
  pageChange,
  deleteRoute,
  onSearch,
  isLoading,
  idGroup,
  selectOptions,
}: LearningTableProps) => {
  const isTablet = useMediaQuery(mediaQueries.tablet)
  const intl = useIntl()
  const router = useRouter()
  const history = historyPath(router.asPath)

  const { permissions } = useAppContext()
  const [createFromGroupAuth] = [permissions[detailFromGroup.create]]
  const [createFromLearningAuth] = [permissions[detailFromLearning.create]]
  const idFromGroups = router.query['id-group']

  const navigatePage = () => void router.push(`${history}/new`)

  const searchInput: InputProps = {
    name: 'search',
    label: String(intl.formatMessage(messagesRoute.learningRoute.search.label)),
    placeholder: String(intl.formatMessage(messagesRoute.learningRoute.search.placeholder)),
    isClearable: true,
    icon: <Search />,
    iconPosition: 'left',
    size: 'small',
    visible: true,
  }

  const subscriptionSelect: InputProps = {
    name: 'subscription',
    label: String(intl.formatMessage(messagesRoute.learningRoute.select.label).toUpperCase()),
    placeholder: String(intl.formatMessage(messagesRoute.learningRoute.select.placeholder)),
    isClearable: true,
    size: 'small',
    options: selectOptions,
    visible: !idFromGroups,
  }

  const formattedData: LearningData[] = data.content.map((elem) => ({
    ...elem,
    classroom: elem?.classroom?.name ?? elem?.name,
    classroomId: elem?.classroom?.id ?? elem?.id,
    updatedAt: intl.formatDate(elem?.updatedAt, { timeZone: TIME_ZONE_UTC }),
    subscription: elem?.subscription ? elem?.subscription.code : '-',
    subscriptionId: elem?.subscription ? elem?.subscription.id : 0,
  }))

  return (
    <>
      <div className="tabPanel__card">
        <div className="tabPanel__card__header">
          <span>
            <Typography variant="h6" color={colors.primary[500]}>
              {intl.formatMessage(messagesRoute.learningRoute.header.title)}
            </Typography>
            <Typography variant="s2" color={colors.neutrals[400]}>
              {intl.formatMessage(messagesRoute.learningRoute.header.loaded, {
                quantity: data.totalElements,
              })}
            </Typography>
          </span>
          <div className="header__icons">
            {(createFromGroupAuth || createFromLearningAuth) &&
              (isTablet ? (
                <Button
                  icon={<Plus fontSize={24} />}
                  iconPosition="left"
                  size="medium"
                  onClick={() => void navigatePage()}>
                  {intl.formatMessage(messagesRoute.learningRoute.menu.new)}
                </Button>
              ) : (
                <MoreMenu>
                  <IconButton onClick={() => void navigatePage()} className="action__buttons">
                    <Plus fontSize={24} color={colors.neutrals[400]} />
                    <Typography variant="s1" color={colors.neutrals[400]}>
                      {intl.formatMessage(messagesRoute.learningRoute.menu.new)}
                    </Typography>
                  </IconButton>
                </MoreMenu>
              ))}
          </div>
        </div>
        <div className="tabPanel__card__body">
          <Filter
            input={searchInput}
            select={subscriptionSelect}
            onSearch={onSearch}
            showSelectInMobile
          />

          <div className="tabPanel__card__table">
            <TableDataLearningRoutes
              isLoading={isLoading}
              rows={formattedData}
              totalElements={data.totalElements}
              pageSize={data.size}
              activePage={data.number}
              pageChange={pageChange}
              deleteRoute={(id) => deleteRoute(id)}
              idGroup={idGroup}
            />
          </div>
        </div>
      </div>
      <style jsx>{TabContentStyles}</style>
      <style jsx global>
        {TabContentGlobalStyles}
      </style>
    </>
  )
}
export default TabContentComponent
