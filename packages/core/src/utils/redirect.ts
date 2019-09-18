import Router from 'next/router'
import { NextContext } from 'next'

export const redirect = (ctx: NextContext, url: string) => {
  if (ctx && ctx.req) {
    ctx.res.writeHead(302, { Location: url, previousUrl: ctx.pathname })
    ctx.res.end()
  } else {
    Router.push(url)
  }
}
