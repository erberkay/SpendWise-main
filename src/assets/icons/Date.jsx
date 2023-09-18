import * as React from "react"
import Svg, { Path } from "react-native-svg"
const DateIcon = (props) => (
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
      d="M2.298 8.25c.368-2.821 2.78-5 5.702-5h8a5.751 5.751 0 0 1 5.701 5H2.299Zm-.048 1.5V17A5.75 5.75 0 0 0 8 22.75h8A5.75 5.75 0 0 0 21.75 17V9.75H2.25Zm4.25 4a.75.75 0 0 1 0-1.5h1a.75.75 0 0 1 0 1.5h-1Zm4.25-.75c0 .414.336.75.75.75h1a.75.75 0 0 0 0-1.5h-1a.75.75 0 0 0-.75.75Zm5.75.75a.75.75 0 0 1 0-1.5h1a.75.75 0 0 1 0 1.5h-1ZM5.75 17c0 .414.336.75.75.75h1a.75.75 0 0 0 0-1.5h-1a.75.75 0 0 0-.75.75Zm5.75.75a.75.75 0 0 1 0-1.5h1a.75.75 0 0 1 0 1.5h-1Zm4.25-.75c0 .414.336.75.75.75h1a.75.75 0 0 0 0-1.5h-1a.75.75 0 0 0-.75.75Zm.75-15.25a.75.75 0 0 0-.75.75v3a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-.75-.75Zm-9 0a.75.75 0 0 0-.75.75v3a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-.75-.75Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default DateIcon
