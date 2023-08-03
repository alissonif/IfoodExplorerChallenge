import { useEffect, useState } from "react";
import { Content, RightArrowButton, LeftArrowButton } from "./styles";

import { Header } from '../../../Components/Header'
import { Section } from "../../../components/Section";
import { Footer } from "../../../Components/Footer";

import logoFRUTAS from "../../../assets/logoFRUTAS.svg";

import Carousel from "react-elastic-carousel";
import Item from "../../../Components/Card/card";
import { Card } from "../../../Components/Card";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

export function Home() {
  return (
    <>
      <Header />
      <Content >
        <div className="logo">
          <img src={logoFRUTAS} alt="" />
          <div className="paragrafo">
            <h2>Sabores inigualáveis</h2>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </div>
        <Section title='Refeições' className="seta">
          <div className="seta"></div>
          <Carousel breakPoints={breakPoints} pagination={false} renderArrow={({ type, onClick }) => {
            const arrowIcon = type === 'NEXT' ? '❯' : '❮';
            return type === 'NEXT' ? (
              <RightArrowButton onClick={onClick}>{arrowIcon}</RightArrowButton>
            ) : (
              <LeftArrowButton onClick={onClick}>{arrowIcon}</LeftArrowButton>
            );

          }}>
            <Item><Card /></Item>
            <Item><Card /></Item>
            <Item><Card /></Item>
            <Item><Card /></Item>
            <Item><Card /></Item>
            <Item><Card /></Item>
          </Carousel>
        </Section>
        <Section title='Sobremesas' className="seta">
          <div className="seta"></div>
          <Carousel breakPoints={breakPoints} pagination={false} renderArrow={({ type, onClick }) => {
            const arrowIcon = type === 'NEXT' ? '❯' : '❮';
            return type === 'NEXT' ? (
              <RightArrowButton onClick={onClick}>{arrowIcon}</RightArrowButton>
            ) : (
              <LeftArrowButton onClick={onClick}>{arrowIcon}</LeftArrowButton>
            );

          }}>
            {/* <Item>{dish.map((item, id) => <Card key={id} data={item} />)}</Item> */}
            <Item><Card /></Item>
            <Item><Card /></Item>
            <Item><Card /></Item>
            <Item><Card /></Item>
            <Item><Card /></Item>
          </Carousel>
        </Section>
        <Section title='Bebidas' className="seta">
          <div className="seta"></div>
          <Carousel breakPoints={breakPoints} pagination={false} renderArrow={({ type, onClick }) => {
            const arrowIcon = type === 'NEXT' ? '❯' : '❮';
            return type === 'NEXT' ? (
              <RightArrowButton onClick={onClick}>{arrowIcon}</RightArrowButton>
            ) : (
              <LeftArrowButton onClick={onClick}>{arrowIcon}</LeftArrowButton>
            );

          }}>
            <Item><Card /></Item>
            <Item><Card /></Item>
            <Item><Card /></Item>
            <Item><Card /></Item>
            <Item><Card /></Item>
            <Item><Card /></Item>
          </Carousel>
        </Section>
      </Content>
      <Footer />
    </>
  )
}
