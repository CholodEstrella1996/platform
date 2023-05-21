import { useRouter } from 'next/router'
import { useIntl } from 'react-intl'

import { Avatar } from 'components/atoms/Avatar'
import Dialog from 'components/atoms/Dialog'
import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import messages from 'components/modules/Dashboard/dashboard.messages'
import { DashboardStyles } from 'components/modules/Dashboard/dashboard.styles'
import { DEFAULT_ICON_IMG_PROPS } from 'constants/defaultStaticImages'
import { DashboardResponse } from 'services/models/dashboard.model'

const { colors } = theme

type Props = {
  recentlyAccessedApplications: DashboardResponse['recentlyAccessedApplications']
}

export const RecentAccessComponent = ({ recentlyAccessedApplications }: Props) => {
  const intl = useIntl()
  const router = useRouter()

  const redirectToDetail = (id: number, name: string) =>
    void router.push(`/laboratories/detail-laboratory/${id}/${name}`)

  return (
    <>
      <div className="recentAccess__container">
        <Typography variant="s1" color={colors.primary[500]}>
          {intl.formatMessage(messages.recentAccess.header)}
        </Typography>
        <div className="recentAccess__card">
          {recentlyAccessedApplications?.length ? (
            <div className="recentAccess__history">
              {recentlyAccessedApplications?.map(
                ({ id, name, type, color, iconUrl, colorLight }) => (
                  <div
                    onKeyDown={() => redirectToDetail(id, name)}
                    role="button"
                    tabIndex={0}
                    onClick={() => redirectToDetail(id, name)}
                    className="history__card"
                    key={id}>
                    <Avatar
                      image={iconUrl ?? DEFAULT_ICON_IMG_PROPS}
                      size="medium"
                      name={name}
                      color={colorLight}
                    />
                    <div className="history__detail">
                      <Typography variant="c2" color={color}>
                        {type.name}
                      </Typography>
                      <Typography variant="s2" color={colors.neutrals[500]}>
                        {name}
                      </Typography>
                    </div>
                  </div>
                ),
              )}
            </div>
          ) : (
            <Dialog message={intl.formatMessage(messages.recentAccess.empty)} showIcon={false} />
          )}
        </div>
      </div>
      <style jsx>{DashboardStyles}</style>
    </>
  )
}
