import { createClassNameProp } from '../../utils/helpers'
import { getDefaultFormControlOptions } from './shared'
import styles from './formControlCSS.module.css'
import type { FormControlOptions } from './types'

const FORM_CONTROL = 'ps-form-control'

export function getFormControlProps(options?: FormControlOptions) {
  const { groupType, ...fieldOptions } = getDefaultFormControlOptions(options)
  const role = {
    role: groupType,
  }

  return {
    control: {
      ...role,
      'data-disabled': fieldOptions.disabled,
      ...createClassNameProp(`${FORM_CONTROL} ${styles.formControlBase}`),
    },
    fieldOptions,
  }
}
