import { useIntl } from 'react-intl'

import Dialog from 'components/atoms/Dialog'
import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import { ROLES } from 'constants/roles'

import DetailCard from './components/DetailCard'
import Header from './components/Header'
import UserCard from './components/UserCard'
import messages from './detailGroup.messages'
import { Group } from './detailGroup.model'
import { DetailGroupStyles } from './detailGroup.styles'

const {
  organization: { student, teacher },
} = ROLES

type Props = {
  onDelete: (id: number) => void
  idGroup: number
  detailGroup: Group
  onDeleteUser: (id: number) => void
}

export const DetailGroupComponent = ({ onDelete, idGroup, detailGroup, onDeleteUser }: Props) => {
  const {
    name: groupName,
    description,
    studentCount,
    learningUnitCount = 0,
    roles,
    subscription,
  } = detailGroup
  const { colors } = theme
  const intl = useIntl()

  const students = roles.find((item) => item.name === student)
  const teachers = roles.find((item) => item.name === teacher)

  return (
    <>
      <Header
        groupName={groupName}
        id={idGroup}
        onDelete={onDelete}
        subscription={subscription.code}
      />
      <div className="detail__content">
        <Typography variant="p1" color={colors.neutrals[400]}>
          {description}
        </Typography>
        <div className="detail__cards">
          <DetailCard
            subtitle={intl.formatMessage(messages.student.quantity, {
              isPlural: studentCount !== 1,
            })}
            quantity={studentCount}
          />
          <DetailCard
            subtitle={intl.formatMessage(messages.learning.quantity, {
              isPlural: learningUnitCount !== 1,
            })}
            quantity={learningUnitCount}
            redirect
          />
        </div>
      </div>

      <section className="detail__list">
        <div className="list">
          <Typography variant="h6" color={colors.neutrals[400]}>
            {intl.formatMessage(messages.student.list)}
          </Typography>
          <div className="list__content">
            {students?.members.length ? (
              students.members.map(({ id, name, avatarUrl, email, invited }) => (
                <UserCard
                  key={id}
                  id={id}
                  name={name}
                  avatarUrl={avatarUrl}
                  email={email}
                  invited={invited}
                  onDeleteUser={onDeleteUser}
                />
              ))
            ) : (
              <Dialog message={intl.formatMessage(messages.empty)} />
            )}
          </div>
        </div>
        <div className="list">
          <Typography variant="h6" color={colors.neutrals[400]}>
            {intl.formatMessage(messages.teacher.list)}
          </Typography>
          <div className="list__content">
            {teachers?.members.length ? (
              teachers.members.map(({ id, name, avatarUrl, email, invited }) => (
                <UserCard
                  key={id}
                  id={id}
                  name={name}
                  avatarUrl={avatarUrl}
                  email={email}
                  onDeleteUser={onDeleteUser}
                  invited={invited}
                />
              ))
            ) : (
              <Dialog message={intl.formatMessage(messages.empty)} />
            )}
          </div>
        </div>
      </section>
      <style jsx>{DetailGroupStyles}</style>
    </>
  )
}
