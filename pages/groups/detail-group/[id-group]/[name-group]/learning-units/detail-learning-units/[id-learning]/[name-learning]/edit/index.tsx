import type { NextPage } from 'next'
import { useRouter } from 'next/router'

import NewEditLearningRoute from 'components/modules/NewEditLearningRoute'

const NewEditLearningRoutePage: NextPage = () => {
  const router = useRouter()
  const id = router.query['id-learning']

  return <NewEditLearningRoute isEditable idLearning={Number(id)} />
}

export default NewEditLearningRoutePage
