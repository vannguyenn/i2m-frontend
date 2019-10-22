import * as React from 'react'
import { Upload as AntUpload } from 'antd'
import 'antd/lib/upload/style/index.css'
import { UploadProps } from 'antd/lib/upload'

export const Upload: React.FunctionComponent<UploadProps> = props => {
  return <AntUpload {...props} />
}
