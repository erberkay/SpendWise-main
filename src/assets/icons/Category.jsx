import * as React from "react"
import Svg, { Path } from "react-native-svg"
const CategoryIcon = (props) => (
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
      d="M5 2.5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3v-14a3 3 0 0 0-3-3H5Zm2 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      clipRule="evenodd"
    />
    <Path
      fill="#2B3F6C"
      d="M13.5 16.16a.4.4 0 0 0 .652.31l5.883-4.778a3 3 0 0 0 .028-4.271l-2.841-2.842a2.998 2.998 0 0 0-2.704-.822c-.673.133-1.018.822-1.018 1.508V16.16ZM13.87 18.632a1 1 0 0 0-.37.776V21.5a1 1 0 0 0 1 1H19a3 3 0 0 0 3-3v-4.797a2.2 2.2 0 0 0-1.012-1.853l-7.118 5.782Z"
    />
  </Svg>
)
export default CategoryIcon
