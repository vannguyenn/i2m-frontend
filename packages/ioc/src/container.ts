import { Container } from 'inversify'
import { makeProvideDecorator, makeFluentProvideDecorator } from 'inversify-binding-decorators'
import 'reflect-metadata'

export const container = new Container()

export const provide = makeProvideDecorator(container)
export const fluentProvide = makeFluentProvideDecorator(container)
