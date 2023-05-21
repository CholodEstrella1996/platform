import { useEffect, useState } from 'react'

import { useIntl } from 'react-intl'

import { useNotification } from 'hooks/notification'
import { cookieService } from 'services/modules/cookie'

import { CardCookieComponent } from './cardCookie.component'
import messages from './cardCookie.messages'

type Props = {
  onClose: () => void | Promise<void>
}

export const CardCookieContainer = ({ onClose }: Props) => {
  const intl = useIntl()
  const [modalHtml, setModalHtml] = useState<string>()
  const { onError } = useNotification()

  const getDetailsCookies = async () => {
    try {
      const data = await cookieService.getDetailsCookies()
      setModalHtml(data.url)
    } catch (error) {
      void onClose()
      // eslint-disable-next-line no-console
      console.error('getCookie --> error\n', error)
      onError(intl.formatMessage(messages.content.error))
    }
  }

  useEffect(() => {
    void getDetailsCookies()
  }, [])

  if (!modalHtml) return null
  return <CardCookieComponent url={modalHtml} onClose={onClose} />
}
