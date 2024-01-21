
import { Hero } from "../components/Hero/Hero";
import { Navbar } from "../components/Navbar/Navbar";
import Services from "../components/Services/Services";
import {Philosophy} from "../components/Philosophy/Philosophy";
import { Test } from "../components/test/Test";

import React from 'react'

export const Homepage = () => {
  return (
    <div>
    <Hero /> 
    <Philosophy />
    <Test />
    <Services />
    </div>
  )
}
