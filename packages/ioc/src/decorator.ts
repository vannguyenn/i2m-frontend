import { interfaces } from 'inversify'
import { fluentProvide } from './container'
import { STORE, SERVICE, FIELD, SCOPE } from './constants'

const createDecorator = <T>(identifier: interfaces.ServiceIdentifier<T>, name: string, scope?: SCOPE) => {
  const decorator = fluentProvide(identifier)

  if (scope === SCOPE.SINGLETON) {
    return decorator
      .inSingletonScope()
      .whenTargetNamed(name)
      .done()
  }

  return decorator.whenTargetNamed(name).done()
}

export const Field = <T>(name: string, scope: SCOPE = SCOPE.SINGLETON) => {
  return createDecorator(FIELD, name, scope)
}

export const Store = <T>(identifier: interfaces.ServiceIdentifier<T>, scope: SCOPE = SCOPE.SINGLETON) => {
  return createDecorator(identifier, STORE, scope)
}

export const Service = <T>(identifier: interfaces.ServiceIdentifier<T>, scope: SCOPE = SCOPE.SINGLETON) => {
  return createDecorator(identifier, SERVICE, scope)
}

export const singleton = <T>(identifier: interfaces.ServiceIdentifier<T>) => {
  return fluentProvide(identifier)
    .inSingletonScope()
    .done()
}
