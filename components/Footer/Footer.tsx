import React from "react";
import { useState } from "react";
import Presentation from "./Presentation";

interface FooterInfoProps {

}

function Footer() {
  const [headerInfo, _] = useState<FooterInfoProps>({});
  return <Presentation/>;
}

export default Footer;