export const downloadFromLink = async (
  url: string,
  fileName: string,
  onDownload: (status: boolean) => void,
) => {
  onDownload(true)
  const response = await fetch(url)

  if (!response.ok) throw new Error('Failed to download file. Please try again.')

  const blob = await response.blob()

  const link = document.createElement('a')
  link.href = window.URL.createObjectURL(blob)
  link.download = fileName
  link.click()
  onDownload(false)
}
