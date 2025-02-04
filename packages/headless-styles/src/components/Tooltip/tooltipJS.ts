import { createJSProps } from '../../utils/helpers'
import type { Position } from '../types'
import { createTooltipProps, getDefaultTooltipOptions } from './shared'
import styles from './generated/tooltipCSS.module'
import positionStyles from './generated/tooltipPositioning.module'
import type { TooltipOptions } from './types'

type Side = 'top' | 'bottom' | 'left' | 'right'
type Alignment = 'Start' | 'Center' | 'End'
type Axis = 'horizontal' | 'vertical'

function getSide(position: Position): Side {
  if (position.startsWith('bottom')) {
    return 'bottom'
  } else if (position.startsWith('right')) {
    return 'right'
  } else if (position.startsWith('left')) {
    return 'left'
  }

  return 'top'
}

function getAlignment(position: Position): Alignment {
  if (position.indexOf('Start') > -1) {
    return 'Start'
  } else if (position.indexOf('End') > -1) {
    return 'End'
  }

  return 'Center'
}

function getAxis(side: Side): Axis {
  return side === 'top' || side === 'bottom' ? 'horizontal' : 'vertical'
}

function getPositionClasses(side: Side, axis: Axis, alignment: Alignment) {
  return {
    sideClass: `${side}Position` as keyof typeof positionStyles,
    alignmentClass: `${axis}${alignment}` as keyof typeof positionStyles,
    contentSideClass: `${side}PositionContent` as keyof typeof positionStyles,
    contentAlignmentClass:
      `${axis}${alignment}Content` as keyof typeof positionStyles,
  }
}

export function getTooltipPositionStyles(position: Position) {
  const side = getSide(position)
  const positionClasses = getPositionClasses(
    side,
    getAxis(side),
    getAlignment(position)
  )

  const sideStyles = positionStyles[positionClasses.sideClass]
  const alignmentStyles = positionStyles[positionClasses.alignmentClass]
  const contentSideStyles = positionStyles[positionClasses.contentSideClass]
  const contentAlignmentStyles =
    positionStyles[positionClasses.contentAlignmentClass]

  return {
    positionStyles: {
      ...sideStyles,
      ...alignmentStyles,
    },
    contentPositionStyles: {
      ...contentSideStyles,
      ...contentAlignmentStyles,
      '&::after': {
        ...(contentSideStyles[
          '&::after' as keyof typeof contentSideStyles
        ] as Record<string, string>),
        ...(contentAlignmentStyles[
          '&::after' as keyof typeof contentAlignmentStyles
        ] as Record<string, string>),
      },
    },
  }
}

export function getJSTooltipProps(options?: TooltipOptions) {
  const defaultOptions = getDefaultTooltipOptions(options)
  const props = createTooltipProps(defaultOptions)
  const tooltipPositionStyles = getTooltipPositionStyles(
    defaultOptions.position
  )
  const jsStyles = {
    wrapper: styles.tooltipWrapper,
    tooltip: {
      ...styles.tooltipBase,
      ...styles.tooltip,
      ...tooltipPositionStyles.positionStyles,
    },
    tooltipContent: {
      ...styles.tooltipContentBase,
      ...styles.tooltipContent,
      '&::after': {
        ...styles.tooltipContentBase['&::after'],
        ...styles.tooltipContent['&::after'],
        ...tooltipPositionStyles.contentPositionStyles['&::after'],
      },
    },
    trigger: styles.tooltipTrigger,
  }

  return {
    ...props,
    wrapper: {
      a11yProps: props.wrapper,
      ...createJSProps(jsStyles.wrapper),
    },
    tooltip: {
      a11yProps: props.tooltip,
      keyframes: {
        ...createJSProps(styles.keyframesFadeIn),
      },
      ...createJSProps(jsStyles.tooltip),
    },
    tooltipContent: {
      a11yProps: props.tooltipContent,
      ...createJSProps(jsStyles.tooltipContent),
    },
    trigger: {
      a11yProps: props.trigger,
      ...createJSProps(jsStyles.trigger),
    },
  }
}
