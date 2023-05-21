import DeleteIcon from '@mui/icons-material/Delete'
import { FieldValues, UseFormSetValue } from 'react-hook-form'

import { TextIcon } from 'components/atoms/TextIcon'

import { InputFileStyles, InputFileGlobalStyles } from '../../inputFile.styles'

type Props = {
  file: { name?: string; iconUrl?: string } | null
  removeFile: (value: null) => void
  isEditable?: boolean
  setValue: UseFormSetValue<FieldValues>
}

const FileList = ({ file, removeFile, isEditable, setValue }: Props) => (
  <>
    <div className="inputFile__content" style={{ display: `${!file?.iconUrl ? 'none' : ''} ` }}>
      <div className="inputFile__content--files">
        <div className="inputFile__content__name">
          <TextIcon
            className="text__clamp"
            size="small"
            icon={file?.iconUrl}
            text={file?.name ?? ''}
            id={file?.name ?? ''}
          />
        </div>
        {file?.name && isEditable && (
          <DeleteIcon
            className="inputFile__content--icon"
            onClick={() => {
              removeFile(null)
              setValue('avatarUrl', null)
              setValue('image', '/cloudlabsIcon.webp')
            }}
          />
        )}
      </div>
    </div>
    <style jsx>{InputFileStyles}</style>
    <style jsx global>
      {InputFileGlobalStyles}
    </style>
  </>
)
export default FileList
