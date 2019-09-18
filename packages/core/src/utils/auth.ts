import * as nextCookie from 'next-cookies'
import { NextContext } from 'next'
import { PATHS, KEYS } from '@frontend/constants'
import { redirect } from './redirect'

export const getToken = (ctx: NextContext) => {
  const { [KEYS.ACCESS_TOKEN]: token } = nextCookie(ctx)
  return token
}

export const auth = (ctx: NextContext, url = PATHS.login) => {
  const token = getToken(ctx)

  if (!token) {
    const pathname = ctx.pathname || ''
    if (!pathname.startsWith(url)) {
      redirect(ctx, url)
    }
  }
}
