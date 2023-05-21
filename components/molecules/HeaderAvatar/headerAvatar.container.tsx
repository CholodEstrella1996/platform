import HeaderAvatarComponent from './headerAvatar.component'

type Props = {
  id: number
  name: string
  title: string
  avatarUrl: string
  bgColor?: string
  buttonText: string
  price?: number
  isLearningUnit?: boolean
}

const HeaderAvatarContainer = (props: Props) => <HeaderAvatarComponent {...props} />

export default HeaderAvatarContainer
