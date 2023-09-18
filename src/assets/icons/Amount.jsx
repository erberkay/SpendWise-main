import * as React from "react"
import Svg, { Path } from "react-native-svg"
const AmountIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="none"
    {...props}
  >
    <Path
      fill="#2B3F6C"
      fillRule="evenodd"
      d="M3.25 6.5A4.75 4.75 0 0 1 8 1.75h8a4.75 4.75 0 0 1 4.75 4.75v12A4.75 4.75 0 0 1 16 23.25H8a4.75 4.75 0 0 1-4.75-4.75v-12Zm4 1c0-.966.784-1.75 1.75-1.75h6c.966 0 1.75.784 1.75 1.75v1A1.75 1.75 0 0 1 15 10.25H9A1.75 1.75 0 0 1 7.25 8.5v-1Zm2.5 11a.75.75 0 0 1-.75.75H8a.75.75 0 0 1 0-1.5h1a.75.75 0 0 1 .75.75ZM9 15.25a.75.75 0 0 0 0-1.5H8a.75.75 0 0 0 0 1.5h1Zm5.25 3.25a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75Zm.75-4.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5h-1Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default AmountIcon
