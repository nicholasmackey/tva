const { MOBILE_BUILD_PATH } = require('../vars.cjs')
const { getDefaultFileConfig } = require('../configOptions/baseOptions.cjs')
// const { mobileTransforms } = require('../configOptions/transforms.cjs')
const { mobileFormats } = require('../configOptions/formats.cjs')

function getMobileConfig(theme) {
  return {
    android: {
      // 'compose' group is buggy, so we are just mimicking it
      transforms: ['attribute/ps-cti', 'name/cti/camel', 'color/ps-compose'],
      buildPath: `${MOBILE_BUILD_PATH}compose/`,
      files: [
        {
          ...getDefaultFileConfig(theme),
          destination: 'StyleDictionaryColor.kt',
          format: mobileFormats.androidCompose,
          className: 'StyleDictionaryColor',
          packageName: 'com.pluralsight.android.learner',
        },
      ],
    },
    ios: {
      // no transform group for iOS Asset catalogs
      transforms: ['attribute/ps-cti', 'color/ps-rgb', 'name/cti/camel'],
      buildPath: `${MOBILE_BUILD_PATH}iOS/Assets.xcassets/`,
      actions: ['create_colorsets'],
    },
  }
}

module.exports = {
  getMobileConfig,
}
