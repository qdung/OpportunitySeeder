import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const SearchIcon = (props: SvgProps) => (
  <Svg width={21} height={21} fill="none" {...props}>
    <Path
      d="M15.083 13.333h-.921l-.327-.315a7.584 7.584 0 0 0 1.727-6.23C15.013 3.545 12.307.955 9.04.558A7.589 7.589 0 0 0 .558 9.04c.397 3.267 2.987 5.973 6.23 6.522a7.584 7.584 0 0 0 6.23-1.727l.315.327v.921l4.959 4.959c.478.478 1.26.478 1.738 0a1.232 1.232 0 0 0 0-1.739l-4.947-4.97Zm-7 0a5.243 5.243 0 0 1-5.25-5.25 5.243 5.243 0 0 1 5.25-5.25 5.243 5.243 0 0 1 5.25 5.25 5.243 5.243 0 0 1-5.25 5.25Z"
      fill="#323232"
    />
  </Svg>
);

export default SearchIcon;
