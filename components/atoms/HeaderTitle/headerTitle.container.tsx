import { HeaderTitleComponent } from './headerTitle.component'

type TitleProps = {
  title: string
  subtitle?: string
  children?: React.ReactNode
}
const HeaderTitleContainer = ({ title, subtitle, children }: TitleProps) => (
  <HeaderTitleComponent title={title} subtitle={subtitle}>
    {children}
  </HeaderTitleComponent>
)

export default HeaderTitleContainer
