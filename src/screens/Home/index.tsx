import React, { useCallback, useState } from "react";
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTheme } from "styled-components";
import finClassIcon from "../../../assets/icons/logo/Vector.png";
import finClassesIcon from "../../../assets/icons/finclasses/finclasses.png";
import finSeriesIcon from "../../../assets/icons/finseries/finseries.png";
import finBooksIcon from "../../../assets/icons/finbooks/finbooks.png";
import Separator from "../../components/Separator";
import Text from "../../components/Text";
import Banner from "./LocalComponents/Banner";
import LastWatched from "./LocalComponents/LastWatched";
import Section from "./LocalComponents/Section";
import Steps from "./LocalComponents/Steps";
import { data, dataTwo } from "./mocks";

import {
  Container,
  BannerContainer,
  Content,
  FinclassIcon,
  IconFin,
} from "./styles";
import Card from "./LocalComponents/Card";

const Home: React.FC = () => {
  /**
   * Hooks
   */

  const { top } = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const { colors } = useTheme();

  /**
   * States
   */

  const [sliderPage, setSliderPage] = useState(0);

  /**
   * Callbacks
   */

  const setSliderPageEvent = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const { x } = event.nativeEvent.contentOffset;
      const indexOfNextScreen = Math.ceil(x / width);
      if (indexOfNextScreen !== sliderPage) setSliderPage(indexOfNextScreen);
    },
    [sliderPage]
  );

  return (
    <Container>
      <ScrollView>
        <BannerContainer>
          <FinclassIcon top={top} source={finClassIcon} />
          <ScrollView
            onScroll={(e) => setSliderPageEvent(e)}
            decelerationRate={"fast"}
            snapToInterval={width}
            snapToAlignment={"center"}
            bounces={false}
            alwaysBounceHorizontal={false}
            pagingEnabled
            scrollEventThrottle={8}
            horizontal
          >
            <Banner
              source={data[0].image}
              description={data[0].description}
              presenter={data[0].title}
            />

            <Banner
              source={data[1].image}
              description={data[1].description}
              presenter={data[1].title}
            />

            <Banner
              source={data[2].image}
              description={data[2].description}
              presenter={data[2].title}
            />
          </ScrollView>
          <Steps index={sliderPage} />
        </BannerContainer>
        <Separator height={45} />
        <Content>
          <Section
            leftNode={
              <Text color={colors.placeholder.main} type="bold" size={16}>
                Continue de onde parou
              </Text>
            }
          />
          <Separator height={15} />
          <LastWatched />
        </Content>
        <Separator height={30} />
        <Content>
          <Section
            leftNode={<IconFin source={finClassesIcon} resizeMode="contain" />}
          />
        </Content>
        <Separator height={30} />
        <FlatList
          style={{
            marginLeft: 20,
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={dataTwo}
          ItemSeparatorComponent={() => <Separator width={15} />}
          keyExtractor={(item) =>
            `${item.description}+${item.image}-finclasses`
          }
          renderItem={({ item }) => (
            <Card
              source={item.image}
              title={item.title}
              description={item.description}
            />
          )}
        />
        <Separator height={30} />
        <Content>
          <Section
            leftNode={<IconFin source={finSeriesIcon} resizeMode="contain" />}
          />
        </Content>
        <Separator height={30} />
        <FlatList
          style={{
            marginLeft: 20,
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data.reverse()}
          ItemSeparatorComponent={() => <Separator width={15} />}
          keyExtractor={(item) =>
            `${item.description}+${item.image}-finclasses`
          }
          renderItem={({ item }) => (
            <Card
              source={item.image}
              title={item.title}
              description={item.description}
            />
          )}
        />
        <Separator height={30} />
        <Content>
          <Section
            leftNode={<IconFin source={finBooksIcon} resizeMode="contain" />}
          />
        </Content>
        <Separator height={30} />
        <FlatList
          style={{
            marginLeft: 20,
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={dataTwo}
          ItemSeparatorComponent={() => <Separator width={15} />}
          keyExtractor={(item) =>
            `${item.description}+${item.image}-finclasses`
          }
          renderItem={({ item }) => (
            <Card
              source={item.image}
              title={item.title}
              description={item.description}
            />
          )}
        />
      </ScrollView>
    </Container>
  );
};

export default Home;
