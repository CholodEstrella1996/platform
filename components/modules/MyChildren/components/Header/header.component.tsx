import HeaderTitle from 'components/atoms/HeaderTitle'

type Props = {
  title: string
}

const Header = ({ title }: Props) => <HeaderTitle title={title} />

export default Header
