// import { IFieldDetail, FieldType, VALIDATION_MESSAGE } from '@frontend/constants'
// import * as yup from 'yup'
// export const createPhoneSchema = (fieldDetail: IFieldDetail, options?: any): yup.StringSchema => {
//   return createInputSchema(fieldDetail, options).matches(/\d*/)
// }
// export const createEmailSchema = (fieldDetail: IFieldDetail, options?: any): yup.StringSchema => {
//   return createInputSchema(fieldDetail, options).email(VALIDATION_MESSAGE.EMAIL)
// }
// export const createInputSchema = (fieldDetail: IFieldDetail, options?: any): yup.StringSchema => {
//   let schema = yup.string()
//   const {
//     properties: { isRequired, maxLength },
//   } = fieldDetail
//   schema = isRequired ? schema.required(VALIDATION_MESSAGE.REQUIRED) : schema.nullable()
//   if (maxLength) {
//     schema = schema.max(fieldDetail.properties.maxLength, VALIDATION_MESSAGE.MAX_LENGTH(maxLength))
//   }
//   return schema
// }
// export const createDateSchema = (fieldDetail: IFieldDetail, options?: any): yup.DateSchema => {
//   let schema = yup.date()
//   schema = fieldDetail.properties.isRequired ? schema.required(VALIDATION_MESSAGE.REQUIRED) : schema.nullable(true)
//   return schema
// }
// export const createAttachmentSchema = (fieldDetail: IFieldDetail, options?: any): yup.StringSchema => {
//   let schema = yup.string()
//   if (fieldDetail.properties.isRequired) {
//     schema = schema.required(VALIDATION_MESSAGE.REQUIRED)
//   }
//   return schema
// }
// export const create = (fieldDetail: IFieldDetail, options?: any): yup.Schema<any> => {
//   switch (fieldDetail.fieldType) {
//     case FieldType.FT_INPUT:
//     case FieldType.FT_LOCATION:
//     case FieldType.FT_REFERENCE:
//       return createInputSchema(fieldDetail, options)
//     case FieldType.FT_TEXT_EMAIL:
//       return createEmailSchema(fieldDetail, options)
//     case FieldType.FT_TEXT_PHONE:
//       return createPhoneSchema(fieldDetail, options)
//     case FieldType.FT_DATE:
//       return createDateSchema(fieldDetail, options)
//     case FieldType.FT_ATTACHMENT:
//       return createAttachmentSchema(fieldDetail, options)
//     default:
//       return undefined
//   }
// }
//# sourceMappingURL=schema.js.map