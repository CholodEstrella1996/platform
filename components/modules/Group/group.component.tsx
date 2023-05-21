import Link from 'next/link'
import { useRouter } from 'next/router'
import { useIntl } from 'react-intl'

import BreadCrumbs from 'components/atoms/Breadcrumbs'
import Dialog from 'components/atoms/Dialog'
import Select from 'components/atoms/Select'
import { theme } from 'components/atoms/ThemeProvider'
import { useMediaQuery } from 'hooks/use-media-query'
import { historyPath } from 'utils/helpers/historyPath'

import Header from './components/Header'
import messages from './group.messages'
import { GroupsProps } from './group.model'
import { GroupStyles } from './group.styles'
import CardComponent from '../../molecules/Card'

const { mediaQueries } = theme

export const GroupsComponent = ({
  listGroups,
  subscriptionList,
  viewSubscriptions,
}: GroupsProps) => {
  const intl = useIntl()
  const isTablet = useMediaQuery(mediaQueries.tablet)
  const router = useRouter()
  const currentPath = historyPath(router.asPath)
  const showBreadcrumbs = router.query['id-institution']

  return (
    <>
      {showBreadcrumbs && <BreadCrumbs />}
      <div className="group__list">
        <Header
          title={intl.formatMessage(messages.title)}
          selectOptions={subscriptionList}
          showSelect={viewSubscriptions}
        />
        {!isTablet && viewSubscriptions && (
          <Select
            name="subscription"
            label={intl.formatMessage(messages.select.label)}
            options={subscriptionList}
            placeholder={intl.formatMessage(messages.select.placeholder)}
            isClearable
          />
        )}
        {listGroups.length ? (
          <section className="groups__content">
            {listGroups.map(({ name, id, subscription }) => (
              <Link href={`${currentPath}/detail-group/${id}/${name}`} key={id} passHref>
                <a>
                  <CardComponent
                    key={id}
                    name={name}
                    {...(viewSubscriptions && subscription && { type: subscription.code })}
                  />
                </a>
              </Link>
            ))}
          </section>
        ) : (
          <Dialog message={intl.formatMessage(messages.empty)} />
        )}
      </div>
      <style jsx>{GroupStyles}</style>
    </>
  )
}
