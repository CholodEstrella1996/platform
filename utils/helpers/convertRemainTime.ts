const convertRemainTime = (timeString: string) => {
  const time = timeString.includes('.')
    ? timeString.split('.')[1].split(':')
    : timeString.split(':')

  const timeDay = timeString.includes('.') ? timeString.split('.')[0] : '00'

  return `${timeDay}d ${time[0]}h ${time[1]}m`
}

export { convertRemainTime }
