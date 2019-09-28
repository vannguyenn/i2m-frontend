import { interfaces } from 'inversify'
import { container } from './container'
import { STORE, FIELD, SERVICE } from './constants'

export const useField = <T>(name: string) => {
  try {
    return container.getAllNamed<T>(FIELD, name).pop()
  } catch (error) {
    return undefined
  }
}

export const useStore = <T>(identifier: interfaces.ServiceIdentifier<T>) => {
  try {
    return container.getAllNamed<T>(identifier, STORE).pop()
  } catch (error) {
    return undefined
  }
}

export const useService = <T>(identifier: interfaces.ServiceIdentifier<T>) => {
  try {
    return container.getAllNamed<T>(identifier, SERVICE).pop()
  } catch (error) {
    return undefined
  }
}

export const useInstance = <T>(identifier: interfaces.ServiceIdentifier<T>) => {
  try {
    return container.get<T>(identifier)
  } catch (error) {
    return undefined
  }
}
