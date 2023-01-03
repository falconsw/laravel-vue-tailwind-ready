module.exports = {
  purge: [
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.vue',
  ],
  darkMode: "class", // false or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      accessibility: ['responsive', 'focus-within', 'focus'],
      alignContent: ['responsive'],
      alignItems: ['responsive'],
      alignSelf: ['responsive'],
      animation: ['responsive'],
      appearance: ['responsive'],
      backdropBlur: ['responsive'],
      backdropBrightness: ['responsive'],
      backdropContrast: ['responsive'],
      backdropDropShadow: ['responsive'],
      backdropFilter: ['responsive'],
      backdropGrayscale: ['responsive'],
      backdropHueRotate: ['responsive'],
      backdropInvert: ['responsive'],
      backdropSaturate: ['responsive'],
      backdropSepia: ['responsive'],
      backgroundAttachment: ['responsive'],
      backgroundBlendMode: ['responsive'],
      backgroundClip: ['responsive'],
      backgroundColor: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
      backgroundImage: ['responsive'],
      backgroundOpacity: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
      backgroundPosition: ['responsive'],
      backgroundRepeat: ['responsive'],
      backgroundSize: ['responsive'],
      backgroundOrigin: ['responsive'],
      blur: ['responsive'],
      borderCollapse: ['responsive'],
      borderColor: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
      borderOpacity: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
      borderRadius: ['responsive'],
      borderStyle: ['responsive'],
      borderWidth: ['responsive'],
      boxDecorationBreak: ['responsive'],
      boxShadow: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
      boxSizing: ['responsive'],
      brightness: ['responsive'],
      clear: ['responsive'],
      container: ['responsive'],
      contrast: ['responsive'],
      cursor: ['responsive'],
      display: ['responsive'],
      divideColor: ['responsive', 'dark'],
      divideOpacity: ['responsive', 'dark'],
      divideStyle: ['responsive'],
      divideWidth: ['responsive'],
      dropShadow: ['responsive'],
      fill: ['responsive'],
      filter: ['responsive'],
      flex: ['responsive'],
      flexDirection: ['responsive'],
      flexGrow: ['responsive'],
      flexShrink: ['responsive'],
      flexWrap: ['responsive'],
      float: ['responsive'],
      fontFamily: ['responsive'],
      fontSize: ['responsive'],
      fontSmoothing: ['responsive'],
      fontStyle: ['responsive'],
      fontVariantNumeric: ['responsive'],
      fontWeight: ['responsive'],
      gap: ['responsive'],
      gradientColorStops: ['responsive', 'dark', 'hover', 'focus'],
      grayscale: ['responsive'],
      gridAutoColumns: ['responsive'],
      gridAutoFlow: ['responsive'],
      gridAutoRows: ['responsive'],
      gridColumn: ['responsive'],
      gridColumnEnd: ['responsive'],
      gridColumnStart: ['responsive'],
      gridRow: ['responsive'],
      gridRowEnd: ['responsive'],
      gridRowStart: ['responsive'],
      gridTemplateColumns: ['responsive'],
      gridTemplateRows: ['responsive'],
      height: ['responsive'],
      hueRotate: ['responsive'],
      inset: ['responsive'],
      invert: ['responsive'],
      isolation: ['responsive'],
      justifyContent: ['responsive'],
      justifyItems: ['responsive'],
      justifySelf: ['responsive'],
      letterSpacing: ['responsive'],
      lineHeight: ['responsive'],
      listStylePosition: ['responsive'],
      listStyleType: ['responsive'],
      margin: ['responsive'],
      maxHeight: ['responsive'],
      maxWidth: ['responsive'],
      minHeight: ['responsive'],
      minWidth: ['responsive'],
      mixBlendMode: ['responsive'],
      objectFit: ['responsive'],
      objectPosition: ['responsive'],
      opacity: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
      order: ['responsive'],
      outline: ['responsive', 'focus-within', 'focus'],
      overflow: ['responsive'],
      overscrollBehavior: ['responsive'],
      padding: ['responsive'],
      placeContent: ['responsive'],
      placeItems: ['responsive'],
      placeSelf: ['responsive'],
      placeholderColor: ['responsive', 'dark', 'focus'],
      placeholderOpacity: ['responsive', 'dark', 'focus'],
      pointerEvents: ['responsive'],
      position: ['responsive'],
      resize: ['responsive'],
      ringColor: ['responsive', 'dark', 'focus-within', 'focus', 'hover'],
      ringOffsetColor: ['responsive', 'dark', 'focus-within', 'focus', 'hover'],
      ringOffsetWidth: ['responsive', 'focus-within', 'focus', 'hover'],
      ringOpacity: ['responsive', 'dark', 'focus-within', 'focus', 'hover'],
      ringWidth: ['responsive', 'focus-within', 'focus', 'hover'],
      rotate: ['responsive', 'hover', 'focus'],
      saturate: ['responsive'],
      scale: ['responsive', 'hover', 'focus'],
      sepia: ['responsive'],
      skew: ['responsive', 'hover', 'focus'],
      space: ['responsive'],
      stroke: ['responsive'],
      strokeWidth: ['responsive'],
      tableLayout: ['responsive'],
      textAlign: ['responsive'],
      textColor: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
      textDecoration: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
      textOpacity: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
      textOverflow: ['responsive'],
      textTransform: ['responsive'],
      transform: ['responsive'],
      transformOrigin: ['responsive'],
      transitionDelay: ['responsive'],
      transitionDuration: ['responsive'],
      transitionProperty: ['responsive'],
      transitionTimingFunction: ['responsive'],
      translate: ['responsive', 'hover', 'focus'],
      userSelect: ['responsive'],
      verticalAlign: ['responsive'],
      visibility: ['responsive'],
      whitespace: ['responsive'],
      width: ['responsive'],
      wordBreak: ['responsive'],
      zIndex: ['responsive', 'focus-within', 'focus']
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ]
}
