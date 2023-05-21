import React from 'react'

import { useFormContext, useWatch } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { Avatar } from 'components/atoms/Avatar'
import Chip from 'components/atoms/Chip'
import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import ChangeSubscription from 'components/molecules/ChangeSubscription'
import { DEFAULT_ICON_IMG_PROPS } from 'constants/defaultStaticImages'
import { MY_INSTITUTION_PERMISSIONS, SUBSCRIPTION_PERMISSIONS } from 'constants/permissions'
import { ROLES } from 'constants/roles'
import { useAppContext } from 'context/appContext'
import { useMediaQuery } from 'hooks/use-media-query'

import { ClientInformation } from './components/ClientInformation'
import Header from './components/Header'
import { OnSubmitForm } from './components/OnSubmit'
import messages from './detailEditClient.messages'
import { ClientProps, ClientInputForm } from './detailEditClient.model'
import { DetailEditUserGlobalStyles, DetailEditUserLocalStyles } from './detailEditClient.styles'

const { view } = SUBSCRIPTION_PERMISSIONS
const {
  member: { subscription },
} = MY_INSTITUTION_PERMISSIONS
const { colors, mediaQueries } = theme
const { organization, family } = ROLES
export const DetailUserComponent = ({
  client,
  clientId,
  onDelete,
  onSubmit,
  isEditable,
  isLoading,
  isLoggedUser,
  options,
}: ClientProps) => {
  const {
    status,
    role,
    user: { firstName, surname, email, avatarUrl },
    subscriptions,
  } = client
  const isTablet = useMediaQuery(mediaQueries.tablet)
  const intl = useIntl()
  const methods = useFormContext<ClientInputForm>()
  const { profile, permissions } = useAppContext()
  const { control } = methods

  const [subscriptionViewAuth, subscriptionUpdateAuth, mySubscriptionViewAuth] = [
    permissions[subscription.view],
    permissions[subscription.update],
    permissions[view],
  ]
  const memberImage = useWatch({ control, name: 'image', defaultValue: avatarUrl })

  const currentAvatar =
    (typeof memberImage === 'string' && memberImage !== '' && memberImage) ||
    (typeof avatarUrl === 'string' && avatarUrl !== '' && avatarUrl)

  const childRole = role?.at(0)?.name === family.child
  const userRole = childRole ? intl.formatMessage(messages.childRole) : role?.at(0)?.displayName

  const canSeeSubscription = [
    organization.teacher,
    organization.director,
    organization.student,
    family.child,
  ].includes(profile)
  const isManager = profile.includes(organization.manager)
  const isParent = profile.includes(family.parent)
  const showSubscription =
    ((isManager && !isLoggedUser) ||
      (canSeeSubscription && isLoggedUser) ||
      (isParent && !isLoggedUser)) &&
    (subscriptionViewAuth || mySubscriptionViewAuth)
  const editSubscription = subscriptionUpdateAuth && isEditable && !isLoggedUser && isManager
  const title = isEditable
    ? intl.formatMessage(messages.navigation.editTitle, { isLoggedUser })
    : intl.formatMessage(messages.navigation.detailTitle, { isLoggedUser })

  return (
    <>
      <Header
        onDelete={onDelete}
        email={email}
        isEditable={isEditable}
        isSaving={isLoading}
        isLoggedUser={isLoggedUser}
        clientId={clientId}
        onSubmit={onSubmit}
        title={title}
        client={client}
      />

      <section className="userInfo__container">
        <div className="user__avatar">
          <section className="usernameAndAvatar">
            <div className="avatar-container">
              <Avatar
                name={status?.name ?? ''}
                size="fill"
                image={currentAvatar || DEFAULT_ICON_IMG_PROPS.image}
              />
            </div>

            {(firstName || surname) && (
              <div className="user__avatar--text">
                <Typography
                  variant={isTablet ? 'h5' : 's1'}
                  weight="bold"
                  color={colors.neutrals[500]}>
                  {firstName && firstName} {surname && surname}
                </Typography>
                <Typography
                  variant={isTablet ? 's1' : 's2'}
                  color={colors.neutrals[300]}
                  className={childRole ? '' : 'user__role'}>
                  {userRole}
                </Typography>
              </div>
            )}
          </section>

          {!isLoggedUser && (
            <Chip title={status?.displayName} status={status?.name} fullWidth={!isTablet} />
          )}

          {showSubscription && (
            <div className="subscription__modal">
              <ChangeSubscription
                showButton={Boolean(editSubscription)}
                userSubscription={subscriptions?.at(0)}
                canSelectEmptyInvites
              />
            </div>
          )}
        </div>

        <ClientInformation
          isEditable={isEditable}
          isLoading={isLoading}
          options={options}
          avatarUrl={avatarUrl}
        />
      </section>

      {!isTablet && isEditable && (
        <OnSubmitForm onSubmit={onSubmit} isLoading={isLoading} clientId={clientId} />
      )}

      <style jsx>{DetailEditUserLocalStyles}</style>
      <style jsx global>
        {DetailEditUserGlobalStyles}
      </style>
    </>
  )
}
