import { useState } from 'react'

import BreadCrumbs from 'components/atoms/Breadcrumbs'
import HeaderTitle from 'components/atoms/HeaderTitle'
import ModalHtml from 'components/atoms/ModalHtml'
import { theme } from 'components/atoms/ThemeProvider'
import { useMediaQuery } from 'hooks/use-media-query'
import { PedagogicalMaterial } from 'services/models/applications.model'

import { ButtonProcedure } from '../ButtonProcedure'

type Props = {
  title: string
  procedures: PedagogicalMaterial[]
}

const Header = ({ title, procedures }: Props) => {
  const [open, setModalOpen] = useState(false)
  const { mediaQueries } = theme
  const isTablet = useMediaQuery(mediaQueries.tablet)

  const getProcedure = () => {
    let procedure

    if (Object.keys(procedures?.[0] || {})) {
      ;[procedure] = procedures
    }

    return procedure
  }

  const procedure = getProcedure()

  return (
    <>
      {!isTablet && <BreadCrumbs />}
      <HeaderTitle title={title}>
        {procedure && <ButtonProcedure setModalOpen={setModalOpen} />}
      </HeaderTitle>
      <ModalHtml
        open={open}
        contentClass="initial-background"
        html={procedure?.html || ''}
        setModalOpen={setModalOpen}
      />
    </>
  )
}

export default Header
