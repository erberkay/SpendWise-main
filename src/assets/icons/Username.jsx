import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"
const UsernameIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={20}
    fill="none"
    {...props}
  >
    <Circle
      cx={4}
      cy={4}
      r={4}
      fill="#2B3F6C"
      stroke="#2B3F6C"
      strokeWidth={1.5}
      transform="matrix(-1 0 0 1 12 1.5)"
    />
    <Path
      fill="#2B3F6C"
      stroke="#2B3F6C"
      strokeWidth={1.5}
      d="M1 15.435c0-.86.54-1.628 1.351-1.918a16.794 16.794 0 0 1 11.298 0A2.036 2.036 0 0 1 15 15.435v1.315c0 1.188-1.052 2.1-2.227 1.932l-.955-.136a27.002 27.002 0 0 0-7.636 0l-.955.136A1.951 1.951 0 0 1 1 16.75v-1.315Z"
    />
  </Svg>
)
export default UsernameIcon
