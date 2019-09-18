import generate from 'nanoid/generate'

const defaultStringTemplate = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

export const generateString = (stringTemplate?: string) => generate(stringTemplate || defaultStringTemplate, 21)
