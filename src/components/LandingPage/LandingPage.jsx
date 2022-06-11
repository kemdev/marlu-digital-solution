
import React, {useContext} from "react";
import Parallaximg from "./LandingPageComponents/Parallaximg";

import Section from '../Section'
import { MarluContext } from "../../components/Context";



export default function LandingPage() {
  const { defaultBackgroundColor, colorPalette } = useContext(MarluContext);


  return (
    <div>
      <Parallaximg />
      <Section>Section</Section>
      <Section bgColor={colorPalette.defaultColor} textColor='#fff' styles={{height: '100vh'}}>Section2</Section>
    </div>
  );

}
