import * as React from "react"
import Svg, { Path } from "react-native-svg"
const PasswordIcon = (props) => (
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
      d="M3 13.5a4.75 4.75 0 0 1 4.75-4.75h8a4.75 4.75 0 0 1 4.75 4.75v4a4.75 4.75 0 0 1-4.75 4.75h-8A4.75 4.75 0 0 1 3 17.5v-4Zm9.5 1a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0v-2Z"
      clipRule="evenodd"
    />
    <Path
      fill="#2B3F6C"
      d="M14.667 5.642a.75.75 0 0 0 1.23-.857l-1.23.857ZM8.278 4.55a.75.75 0 1 0 1.175.932l-1.175-.932ZM8.75 9.5v-2h-1.5v2h1.5Zm0-2A3.25 3.25 0 0 1 12 4.25v-1.5A4.75 4.75 0 0 0 7.25 7.5h1.5Zm7.148-2.715a4.75 4.75 0 0 0-2.307-1.76l-.503 1.413a3.25 3.25 0 0 1 1.579 1.204l1.23-.857Zm-2.307-1.76a4.75 4.75 0 0 0-2.901-.09l.414 1.441a3.25 3.25 0 0 1 1.984.062l.503-1.414Zm-2.901-.09a4.75 4.75 0 0 0-2.412 1.614l1.175.932a3.25 3.25 0 0 1 1.65-1.105l-.413-1.442Z"
    />
  </Svg>
)
export default PasswordIcon
