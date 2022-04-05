import React from 'react'
import { Carouselbar, Category, Footer } from "../../component";
import { useDocumentTitle } from '../../hooks';

export function Home() {
  useDocumentTitle("Home");

  return (
    <div>
      <Carouselbar/>
      <Category/>
      <Footer/>
    </div>
  )
}
