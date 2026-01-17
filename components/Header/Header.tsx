import React from "react";
import { useState } from "react";
import Presentation from "./Presentation";

interface HeaderInfoProps {

}

function Header() {
  const [headerInfo, _] = useState<HeaderInfoProps>({});
  return <Presentation/>;
}

export default Header;