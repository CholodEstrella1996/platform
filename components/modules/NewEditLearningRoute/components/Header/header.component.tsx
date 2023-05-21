import BreadCrumbs from 'components/atoms/Breadcrumbs'
import HeaderTitle from 'components/atoms/HeaderTitle'

type Props = {
  title: string
}

const Header = ({ title }: Props) => (
  <>
    <BreadCrumbs />
    <HeaderTitle title={title} />
  </>
)

export default Header
