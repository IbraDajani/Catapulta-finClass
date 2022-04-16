import React, { useCallback, useState } from "react";
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  useWindowDimensions,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTheme } from "styled-components";
import finClassIcon from "../../../assets/icons/logo/Vector.png";
import Banner from "./LocalComponents/Banner";
import Steps from "./LocalComponents/Steps";
import { data } from "./mocks";

import {
  Container,
  BannerContainer,
  Content,
  FinclassIcon,
  IconFin,
} from "./styles";

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
      {/* <Content> */}
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
      {/* </Content> */}
    </Container>
  );
};

export default Home;
