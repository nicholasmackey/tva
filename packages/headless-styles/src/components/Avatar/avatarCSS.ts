import { createClassNameProp } from '../../utils/helpers'
import {
  createAvatarSelectorClasses,
  getDefaultAvatarOptions,
  createAvatarProps,
} from './shared'
import type { AvatarOptions } from './types'
import styles from './avatarCSS.module.css'

type StyleKey = keyof typeof styles

const AVATAR = 'ps-avatar'

export function getAvatarProps(options?: AvatarOptions) {
  const defaultOptions = getDefaultAvatarOptions(options)
  const { labelClass, sentimentClass, sizeClass } = createAvatarSelectorClasses(
    defaultOptions.sentiment,
    defaultOptions.size
  )
  const props = createAvatarProps(defaultOptions)

  return {
    ...props,
    wrapper: {
      ...props.wrapper,
      ...createClassNameProp(
        `${AVATAR} ${styles[sentimentClass as StyleKey]} ${
          styles[sizeClass as StyleKey]
        }`
      ),
    },
    image: {
      ...props.image,
      ...createClassNameProp(`${AVATAR}-image ${styles.avatarImage}`),
    },
    label: {
      ...props.label,
      ...createClassNameProp(
        `${AVATAR}-label ${styles.avatarLabel} ${
          styles[labelClass as StyleKey]
        }`
      ),
    },
  }
}
