import { SyntheticEvent, useState } from 'react'

import { Box, Tab, Tabs, tabsClasses } from '@mui/material'
import { useRouter } from 'next/router'
import { useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import BreadCrumbs from 'components/atoms/Breadcrumbs'
import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import messages from 'components/modules/Invites/invite.messages'
import messagesMyInstitution from 'components/modules/MyInstitution/myInstitution.messages'
import { PROFILES } from 'constants/profiles'
import { useMediaQuery } from 'hooks/use-media-query'

import Header from './components/Header'
import TabContent from './components/TabContent'
import { MyInstitutionProps } from './myInstitution.model'
import { MyInstitutionStyles } from './myInstitution.styles'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box className="tab__panel">
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

export const MyInstitutionComponent = ({
  role,
  data,
  deleteUser,
  onSearch,
  listStatus,
  subscriptionList,
  isLoading,
  isDownloading,
  onDownload,
  isOrganizationId,
}: MyInstitutionProps) => {
  const [value, setValue] = useState(0)
  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }
  const intl = useIntl()
  const { reset } = useFormContext()
  const isTablet = useMediaQuery(theme.mediaQueries.tablet)
  const router = useRouter()
  const showBreadcrumbs = router.query['id-institution']
  const handleDownload = (state: boolean) => {
    void onDownload(state)
  }

  return (
    <>
      {showBreadcrumbs && <BreadCrumbs />}
      <div className="tab">
        <Header title={intl.formatMessage(messagesMyInstitution.title, { isOrganizationId })} />
        <Box className="tab__container">
          <Box className="tab__nav">
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              variant={!isTablet ? 'scrollable' : 'fullWidth'}
              scrollButtons
              allowScrollButtonsMobile
              sx={{
                [`& .${tabsClasses.scrollButtons}`]: {
                  '&.Mui-disabled': { opacity: 0.3 },
                },
              }}>
              <Tab
                onClick={() => {
                  role('organization-student', 0)
                  reset()
                }}
                label={intl.formatMessage(messages.invite.profiles.student)}
                {...a11yProps(0)}
                className="tab__items"
              />
              <Tab
                onClick={() => {
                  role('organization-teacher', 0)
                  reset()
                }}
                label={intl.formatMessage(messages.invite.profiles.teacher)}
                {...a11yProps(1)}
                className="tab__items"
              />
              <Tab
                onClick={() => {
                  role('organization-director', 0)
                  reset()
                }}
                label={intl.formatMessage(messages.invite.profiles.director)}
                {...a11yProps(2)}
                className="tab__items"
              />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <TabContent
              listStatus={listStatus}
              subscriptionList={subscriptionList}
              data={data}
              pageChange={(newPage: number) => {
                role('organization-student', newPage)
              }}
              profile={Object.keys(PROFILES)[0]}
              deleteUser={deleteUser}
              onSearch={onSearch}
              isLoading={isLoading}
              isDownloading={isDownloading}
              onDownload={(state: boolean) => void handleDownload(state)}
            />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <TabContent
              listStatus={listStatus}
              subscriptionList={subscriptionList}
              data={data}
              pageChange={(newPage: number) => {
                role('organization-teacher', newPage)
              }}
              profile={Object.keys(PROFILES)[1]}
              deleteUser={deleteUser}
              onSearch={onSearch}
              isLoading={isLoading}
              isDownloading={isDownloading}
              onDownload={(state: boolean) => void handleDownload(state)}
            />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <TabContent
              listStatus={listStatus}
              subscriptionList={subscriptionList}
              data={data}
              pageChange={(newPage: number) => {
                role('organization-director', newPage)
              }}
              profile={Object.keys(PROFILES)[2]}
              deleteUser={deleteUser}
              onSearch={onSearch}
              isLoading={isLoading}
              isDownloading={isDownloading}
              onDownload={(state: boolean) => void handleDownload(state)}
            />
          </TabPanel>
        </Box>
      </div>
      <style jsx>{MyInstitutionStyles}</style>
    </>
  )
}
