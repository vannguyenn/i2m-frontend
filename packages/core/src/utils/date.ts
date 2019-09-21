import * as moment from 'moment'
import { isEmpty } from 'lodash'

export const isBeforeDays = (date: string, numOfDay: number): boolean => {
  if (isEmpty(date)) {
    return false
  }
  const endDate = moment(date, 'YYYY-MM-DD')
  const currentDate = moment().startOf('day')
  const duration = moment.duration(endDate - currentDate).asDays()

  return duration <= numOfDay && duration > 0
}
