import { createJSProps } from '../../utils/helpers'
import {
  createErrorMessageProps,
  getDefaultErrorMessageOptions,
} from './shared'
import fieldMessageStyles from '../FieldMessage/generated/fieldMessageCSS.module'
import styles from './generated/errorMessageCSS.module'
import type { ErrorMessageOptions } from './types'

export const ChakraErrorMessage = {
  baseStyle: styles.errorMessage,
}

export function getJSErrorMessageProps(options?: ErrorMessageOptions) {
  const defaultOptions = getDefaultErrorMessageOptions(options)
  const errorProps = createErrorMessageProps(defaultOptions)
  const jsStyles = {
    ...fieldMessageStyles.fieldMessageBase,
    ...styles.errorMessage,
  }

  return {
    ...errorProps,
    message: {
      ...errorProps.message,
      ...createJSProps(jsStyles),
    },
  }
}
