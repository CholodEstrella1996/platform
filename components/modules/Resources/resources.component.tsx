import { ReactNode, useEffect, useState } from 'react'

import { DownloadOutlined } from '@mui/icons-material'
import { Box, Tab, Tabs, tabsClasses } from '@mui/material'
import { useIntl } from 'react-intl'

import { Button } from 'components/atoms/Button'
import { PdfViewer } from 'components/atoms/PdfViewer'
import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import { Video } from 'components/atoms/Video'
import messages from 'components/modules/Resources/resources.messages'
import { useMediaQuery } from 'hooks/use-media-query'
import { LaboratoryById } from 'services/models/applications.model'

import HeaderResources from './components/Header'
import { ResourceMaterial } from './resources.model'
import { ResourcesStyles } from './resources.styles'

type TabPanelProps = {
  children?: ReactNode
  index: number
  value: number
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props

  const [firstLoad, setFirstLoad] = useState(true)

  useEffect(() => {
    if (value === index) setFirstLoad(false)
  }, [value, index])

  if (firstLoad) return null

  const boxStyles = {
    pt: 5,
    opacity: value === index ? 1 : 0,
  }

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      <Box sx={boxStyles}>{children}</Box>
    </div>
  )
}

const a11yProps = (index: number) => ({
  id: `simple-tab-${index}`,
  'aria-controls': `simple-tabpanel-${index}`,
})

type Props = {
  resource: LaboratoryById
  resourceMaterial: ResourceMaterial
}

const ResourcesComponent = ({ resource, resourceMaterial }: Props) => {
  const { application, name, learningUnits } = resource
  const { guides, videos, webinars, procedures } = resourceMaterial
  const { colors, mediaQueries } = theme
  const [value, setValue] = useState(0)
  const isTablet = useMediaQuery(mediaQueries.tablet)
  const intl = useIntl()
  const webinarsLength = guides.length + videos.length + (application ? 1 : 0)
  const videosLength = guides.length + (application ? 1 : 0)
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  const downloadApp = window.navigator.userAgent.includes('iPhone')
    ? application.appleUrl ?? '-'
    : `intent://#Intent;scheme=${application?.androidPackageName ?? '-'};S.browser_fallback_url=${
        application?.downloadable?.url ?? '-'
      };end;/`

  return (
    <>
      <HeaderResources title={name} procedures={procedures} />
      <Box sx={{ width: '100%' }} className="resources-container">
        <Box
          sx={{
            background: `${colors.neutrals.white}`,
            overflow: 'hidden',
            borderRadius: '1rem',
          }}>
          <div className="tabs-container">
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              allowScrollButtonsMobile
              sx={{
                [`& .${tabsClasses.scrollButtons}`]: {
                  '&.Mui-disabled': { opacity: 0.3 },
                },
              }}>
              {application && (
                <Tab
                  label={intl.formatMessage(messages.tabs.simulator)}
                  {...a11yProps(0)}
                  className="tab__items"
                />
              )}
              {learningUnits &&
                learningUnits.map((learningUnit, index) => (
                  <Tab
                    key={learningUnit.id}
                    label={`${intl.formatMessage(messages.tabs.learningUnit)} ${
                      learningUnits.length > 1 ? index + 1 : ''
                    }`}
                    {...a11yProps(1 + index)}
                    className="tab__items"
                  />
                ))}
              {guides &&
                guides.map((guide, index) => (
                  <Tab
                    key={guide.id}
                    label={`${intl.formatMessage(messages.tabs.guide)} ${
                      guides.length > 1 ? index + 1 : ''
                    }`}
                    {...a11yProps(1 + index)}
                    className="tab__items"
                  />
                ))}
              {videos &&
                videos.map((video, index) => (
                  <Tab
                    key={video.id}
                    label={`${intl.formatMessage(messages.tabs.video)} ${
                      videos.length > 1 ? index + 1 : ''
                    } `}
                    {...a11yProps(guides.length + index + 1)}
                    className="tab__items"
                  />
                ))}
              {webinars &&
                webinars.map((webinar, index) => (
                  <Tab
                    key={webinar.id}
                    label={`${intl.formatMessage(messages.tabs.webinar)} ${
                      webinars.length > 1 ? index + 1 : ''
                    }`}
                    {...a11yProps(videos.length + index + (application ? 1 : 0))}
                    className="tab__items"
                  />
                ))}
            </Tabs>
          </div>
        </Box>
        {application && (
          <TabPanel value={value} index={0}>
            {isTablet ? (
              <iframe
                title={application.downloadable.name}
                className="resources__simulator"
                src={application.downloadable.url}
                frameBorder="0"
                scrolling="no"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            ) : (
              <div className="card-download-app">
                <Typography className="card__title" variant="h6" color={colors.neutrals[700]}>
                  {`${intl.formatMessage(messages.downloadApp.title)}`}
                </Typography>
                <Typography
                  className="card__description"
                  variant="h6"
                  color={colors.neutrals[300]}>{`${intl.formatMessage(
                  messages.downloadApp.description,
                )}`}</Typography>
                <a className="button__download" href={downloadApp} rel="noreferrer">
                  <Button icon={<DownloadOutlined />} iconPosition="left" size="medium">
                    {`${intl.formatMessage(messages.downloadApp.button)}`}
                  </Button>
                </a>
              </div>
            )}
          </TabPanel>
        )}
        {guides &&
          guides.map((guide, index) => (
            <TabPanel value={value} index={learningUnits.length + 1 + index} key={guide.id}>
              {guide?.content.url && (
                <PdfViewer
                  src={guide.content.url}
                  button={{
                    icon: <DownloadOutlined />,
                    text: intl.formatMessage(messages.downloadApp.button),
                  }}
                />
              )}
            </TabPanel>
          ))}
        {videos &&
          videos.map((video, index) => (
            <TabPanel value={value} index={videosLength + index} key={video.id}>
              {video?.content?.url && <Video src={video.content.url} type="withControls" />}
            </TabPanel>
          ))}
        {webinars &&
          webinars.map((webinar, index) => (
            <TabPanel value={value} index={webinarsLength + index} key={webinar.id}>
              {webinar?.content?.url && <Video src={webinar.content.url} type="withControls" />}
            </TabPanel>
          ))}
      </Box>
      <style jsx>{ResourcesStyles}</style>
    </>
  )
}

export default ResourcesComponent
