import React from "react";
import styled from "styled-components/native";
import { Text, Image, View } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import { Spacer } from "../../../components/spacer/spacer.component";

import star from "../../../../assets/star";
import open from "../../../../assets/open";

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Title = styled(Text)`
  color: ${(props) => props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.title};
`;

const Address = styled(Text)`
  color: ${(props) => props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Rating = styled.View`
  flex-direction: row;
`;

const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

const SectionEnd = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: flex-end;
`;

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = ["https://picsum.photos/700"],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Section>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="label" style={{ color: "red" }}>
                CLOSED TEMPORARILY
              </Text>
            )}
            <Spacer variant="left.large" />
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            <Spacer variant="left.large" />
            <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
