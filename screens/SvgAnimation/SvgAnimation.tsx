import React, { useRef, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import Animated, { Easing, useAnimatedProps, useSharedValue, withTiming } from 'react-native-reanimated';
import { Gesture, GestureDetector, gestureHandlerRootHOC } from 'react-native-gesture-handler';

const AnimatedPath:any = Animated.createAnimatedComponent(Path);


const SvgAnimation = gestureHandlerRootHOC(() => {
  const ref1 = useRef<null | typeof AnimatedPath>(null);
  const ref2 = useRef<null | typeof AnimatedPath>(null);
  const ref3 = useRef<null | typeof AnimatedPath>(null);
  const ref4 = useRef<null | typeof AnimatedPath>(null);
  const ref5 = useRef<null | typeof AnimatedPath>(null);
  
  const animatedValue1 = useSharedValue(0);
  const animatedValue2 = useSharedValue(0);
  const animatedValue3 = useSharedValue(0);
  const animatedValue4 = useSharedValue(0);
  const animatedValue5 = useSharedValue(0);

  const [length1, setLength1] = useState(0);
  const [length2, setLength2] = useState(0);
  const [length3, setLength3] = useState(0);
  const [length4, setLength4] = useState(0);
  const [length5, setLength5] = useState(0);

  const gesture = Gesture.Pan().
    onTouchesDown(() => {
      animatedValue1.value = withTiming(0, {
        duration: 900,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      });
      animatedValue2.value = withTiming(0, {
        duration: 1200,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      });
      animatedValue3.value = withTiming(0, {
        duration: 800,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      });
      animatedValue4.value = withTiming(0, {
        duration: 1400,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      });
      animatedValue5.value = withTiming(0, {
        duration: 900,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      });
    })
    .onTouchesUp(() => {
      animatedValue1.value = withTiming(length1, {
        duration: 500,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      });
      animatedValue2.value = withTiming(length2, {
        duration: 800,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      });
      animatedValue3.value = withTiming(length3, {
        duration: 700,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      });
      animatedValue4.value = withTiming(length4, {
        duration: 1000,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      });
      animatedValue5.value = withTiming(length5, {
        duration: 600,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      });
    });

  const strokeAnimation1 = useAnimatedProps(() => ({
    strokeDashoffset: animatedValue1.value
  }))

  const strokeAnimation2 = useAnimatedProps(() => ({
    strokeDashoffset: animatedValue2.value
  }))

  const strokeAnimation3 = useAnimatedProps(() => ({
    strokeDashoffset: animatedValue3.value
  }))

  const strokeAnimation4 = useAnimatedProps(() => ({
    strokeDashoffset: animatedValue4.value
  }))

  const strokeAnimation5 = useAnimatedProps(() => ({
    strokeDashoffset: animatedValue5.value
  }))

  return (
    <GestureDetector gesture={gesture}>
      <View style={styles.container}>
        <StatusBar translucent backgroundColor="transparent" />
        <Svg height="100%" width="100%" viewBox="0 0 100 100" style={{position: 'absolute'}}>
          <Path
            d="M17.5329 41.9995C17.0853 42.0036 16.6446 41.8866 16.2555 41.6604C15.9702 41.4964 15.7197 41.276 15.5187 41.0119C15.3177 40.7478 15.1702 40.4454 15.085 40.1224C14.9997 39.7993 14.9783 39.4622 15.0221 39.1306C15.0659 38.799 15.1739 38.4797 15.3398 38.1913C18.5381 32.7351 28.2691 20 49.5026 20C58.7044 20 66.7748 22.4704 73.4783 27.3399C78.9957 31.3363 82.0878 35.86 83.5609 38.0387C83.7477 38.3133 83.8789 38.6234 83.9467 38.9506C84.0146 39.2779 84.0176 39.6157 83.9558 39.9441C83.894 40.2726 83.7685 40.5851 83.5867 40.8632C83.4049 41.1414 83.1705 41.3796 82.8973 41.5637C82.339 41.941 81.6589 42.0811 81.0011 41.9545C80.3434 41.8279 79.7597 41.4445 79.3739 40.8855C76.7081 36.9671 68.5796 25.0442 49.5026 25.0442C30.8818 25.0442 22.463 36.016 19.7209 40.721C19.5006 41.114 19.1816 41.4396 18.7969 41.6643C18.4123 41.8891 17.9759 42.0048 17.5329 41.9995Z"
            stroke="black"
            strokeWidth="0.3"
          />
          <Path 
            d="M59.8086 86.9998C59.5996 87.0022 59.3912 86.9798 59.1881 86.9332C43.988 83.3697 38.3122 68.9884 38.0814 68.3903L38.0454 68.2586C37.921 67.8434 34.8711 57.9817 39.5531 52.2056C41.6993 49.5717 44.9636 48.2206 49.274 48.2206C53.2816 48.2206 56.1727 49.3997 58.1601 51.8399C59.7971 53.8324 60.452 56.2897 61.0855 58.6572C62.4164 63.5873 63.3774 66.1763 68.9091 66.4428C71.3385 66.559 72.9346 65.2141 73.8399 64.0691C76.2873 60.9471 76.713 55.8575 74.868 51.3643C72.4975 45.565 64.0846 34.6311 49.2511 34.6311C42.9189 34.6311 37.1008 36.5569 32.4351 40.1763C28.5733 43.1743 25.5136 47.4072 24.0403 51.7578C21.308 59.8579 24.8915 72.5907 24.9259 72.7069C25.0096 73.0032 25.0297 73.3124 24.9851 73.6162C24.9405 73.92 24.8321 74.2123 24.6663 74.4759C24.5004 74.7394 24.2805 74.9688 24.0195 75.1507C23.7584 75.3325 23.4616 75.463 23.1464 75.5345C22.5097 75.6947 21.832 75.6126 21.2585 75.3056C20.6851 74.9986 20.2615 74.4912 20.0785 73.8921C19.9148 73.3111 16.0874 59.7309 19.2436 50.3696C22.6815 40.2259 33.2913 30 49.256 30C56.6343 30 63.605 32.3736 69.4231 36.856C73.9283 40.3421 77.6085 45.0243 79.5336 49.7049C81.9811 55.6808 81.3246 62.3881 77.8655 66.7697C75.5605 69.6918 72.2782 71.2195 68.6422 71.0537C59.1701 70.6044 57.4676 64.3465 56.2267 59.782C54.9498 55.0998 54.1329 52.8424 49.256 52.8424C46.5778 52.8424 44.6968 53.5396 43.5263 54.9836C41.9302 56.9591 41.8057 60.047 41.9825 62.2874C42.0986 63.8483 42.3783 65.3944 42.8174 66.9029C43.2071 67.8326 48.2803 79.6078 60.4307 82.4571C60.7447 82.5275 61.0409 82.6563 61.3019 82.8359C61.5629 83.0156 61.7836 83.2425 61.9511 83.5036C62.1187 83.7647 62.2297 84.0546 62.2779 84.3567C62.326 84.6587 62.3102 84.9668 62.2315 85.263C62.0832 85.7631 61.7661 86.2035 61.3287 86.5171C60.8912 86.8307 60.3574 87.0002 59.8086 86.9998V86.9998Z"
            stroke="black"
            strokeWidth="0.3"
          />
          <Path
            d="M39.9858 86C39.6415 86.0007 39.3006 85.9351 38.9834 85.8072C38.6663 85.6792 38.3793 85.4915 38.1396 85.2553C31.9925 79.0893 28.5153 72.1945 27.2068 63.5731V63.5273C26.4723 57.8198 27.5476 49.7391 32.8163 44.1834C36.7054 40.0838 42.1726 38 49.0377 38C57.1567 38 63.537 41.6079 67.5155 48.4174C70.4021 53.3644 70.9745 58.2941 70.9894 58.4964C71.0196 58.8085 70.9852 59.1231 70.888 59.4224C70.7909 59.7217 70.6329 59.9997 70.4231 60.2406C70.2134 60.4814 69.956 60.6804 69.6657 60.826C69.3754 60.9717 69.0579 61.0611 68.7313 61.0893C68.0725 61.1577 67.4119 60.9756 66.8923 60.5825C66.3726 60.1894 66.0356 59.6167 65.9539 58.9881C65.5181 56.0303 64.5166 53.1743 62.9994 50.5628C59.9159 45.3628 55.2245 42.7194 49.0195 42.7194C43.6598 42.7194 39.4663 44.2609 36.5813 47.3043C32.4226 51.6917 31.6187 58.4506 32.1894 62.9217C33.3357 70.5455 36.401 76.6103 41.8137 82.03C42.0396 82.2546 42.2159 82.5204 42.3322 82.8114C42.4486 83.1025 42.5024 83.4129 42.4907 83.7243C42.479 84.0356 42.4019 84.3415 42.264 84.6238C42.1261 84.9061 41.9302 85.1591 41.688 85.3676C41.2215 85.7717 40.6153 85.9969 39.9858 86V86Z"
            stroke="black"
            strokeWidth="0.3"
          />
          <Path
            d="M68.1164 79C62.6672 79 58.0345 77.5845 54.3274 74.7708C46.8795 69.1419 46.0445 59.9742 46.0077 59.5873C45.9552 58.9522 46.1738 58.3236 46.6154 57.8398C47.0571 57.3559 47.6855 57.0564 48.3626 57.0072C49.0396 56.958 49.7097 57.163 50.2256 57.5773C50.7414 57.9916 51.0607 58.5811 51.1132 59.2161C51.1316 59.3514 51.876 66.8504 57.617 71.1692C61.014 73.7139 65.5544 74.7236 71.1495 74.1339C71.8182 74.0578 72.4918 74.2331 73.0231 74.6215C73.5544 75.01 73.9001 75.5799 73.9848 76.2068C74.0214 76.5164 73.9919 76.8298 73.898 77.1287C73.8041 77.4275 73.6478 77.7059 73.438 77.9474C73.2282 78.189 72.9693 78.3889 72.6763 78.5356C72.3832 78.6823 72.062 78.7728 71.7313 78.8018C70.5314 78.9332 69.3244 78.9993 68.1164 79V79Z"
            stroke="black"
            strokeWidth="0.3"
          />
          <Path
            d="M72.4591 17.3315C70.3628 15.9901 62.9297 12 48.9529 12C34.2817 12 26.8304 16.408 25.1821 17.5283C25.0732 17.594 24.9713 17.6702 24.8779 17.7559C24.868 17.7653 24.8552 17.771 24.8415 17.7722C24.5783 17.9982 24.3671 18.2768 24.222 18.5894C24.0769 18.902 24.0012 19.2415 24 19.5851C24.0045 19.9072 24.0736 20.2253 24.2034 20.5211C24.3331 20.817 24.5209 21.0847 24.7561 21.309C24.9912 21.5333 25.269 21.7098 25.5736 21.8283C25.8782 21.9468 26.2036 22.005 26.5312 21.9997C27.0561 21.9993 27.5684 21.841 27.9993 21.546C28.0704 21.494 34.4834 16.86 48.9578 16.86C63.4323 16.86 69.88 21.4777 69.9495 21.5119C70.3896 21.8329 70.9242 22.0041 71.4721 21.9997C71.7999 22.0046 72.1255 21.9458 72.4302 21.8267C72.7348 21.7076 73.0125 21.5305 73.2474 21.3055C73.4823 21.0806 73.6697 20.8122 73.7988 20.5159C73.928 20.2195 73.9963 19.901 74 19.5786C74.0001 19.0957 73.8535 18.6237 73.579 18.2233C73.3044 17.8229 72.9145 17.5124 72.4591 17.3315V17.3315Z"
            stroke="black"
            strokeWidth="0.3"
          />
        </Svg>
        <Svg height="100%" width="100%" viewBox="0 0 100 100" style={{}}>
          <AnimatedPath
            animatedProps={strokeAnimation1}
            onLayout={() => {
              setLength1(ref1.current.getTotalLength());
              animatedValue1.value = ref1.current.getTotalLength();
            }}
            ref={ref1}
            d="M17.5329 41.9995C17.0853 42.0036 16.6446 41.8866 16.2555 41.6604C15.9702 41.4964 15.7197 41.276 15.5187 41.0119C15.3177 40.7478 15.1702 40.4454 15.085 40.1224C14.9997 39.7993 14.9783 39.4622 15.0221 39.1306C15.0659 38.799 15.1739 38.4797 15.3398 38.1913C18.5381 32.7351 28.2691 20 49.5026 20C58.7044 20 66.7748 22.4704 73.4783 27.3399C78.9957 31.3363 82.0878 35.86 83.5609 38.0387C83.7477 38.3133 83.8789 38.6234 83.9467 38.9506C84.0146 39.2779 84.0176 39.6157 83.9558 39.9441C83.894 40.2726 83.7685 40.5851 83.5867 40.8632C83.4049 41.1414 83.1705 41.3796 82.8973 41.5637C82.339 41.941 81.6589 42.0811 81.0011 41.9545C80.3434 41.8279 79.7597 41.4445 79.3739 40.8855C76.7081 36.9671 68.5796 25.0442 49.5026 25.0442C30.8818 25.0442 22.463 36.016 19.7209 40.721C19.5006 41.114 19.1816 41.4396 18.7969 41.6643C18.4123 41.8891 17.9759 42.0048 17.5329 41.9995Z"
            stroke="green"
            strokeWidth="0.9"
            strokeDasharray={length1}
          />
          <AnimatedPath
            ref={ref2}
            animatedProps={strokeAnimation2}
            onLayout={() => {
              setLength2(ref2.current.getTotalLength());
              animatedValue2.value = ref2.current.getTotalLength();
            }}
            d="M59.8086 86.9998C59.5996 87.0022 59.3912 86.9798 59.1881 86.9332C43.988 83.3697 38.3122 68.9884 38.0814 68.3903L38.0454 68.2586C37.921 67.8434 34.8711 57.9817 39.5531 52.2056C41.6993 49.5717 44.9636 48.2206 49.274 48.2206C53.2816 48.2206 56.1727 49.3997 58.1601 51.8399C59.7971 53.8324 60.452 56.2897 61.0855 58.6572C62.4164 63.5873 63.3774 66.1763 68.9091 66.4428C71.3385 66.559 72.9346 65.2141 73.8399 64.0691C76.2873 60.9471 76.713 55.8575 74.868 51.3643C72.4975 45.565 64.0846 34.6311 49.2511 34.6311C42.9189 34.6311 37.1008 36.5569 32.4351 40.1763C28.5733 43.1743 25.5136 47.4072 24.0403 51.7578C21.308 59.8579 24.8915 72.5907 24.9259 72.7069C25.0096 73.0032 25.0297 73.3124 24.9851 73.6162C24.9405 73.92 24.8321 74.2123 24.6663 74.4759C24.5004 74.7394 24.2805 74.9688 24.0195 75.1507C23.7584 75.3325 23.4616 75.463 23.1464 75.5345C22.5097 75.6947 21.832 75.6126 21.2585 75.3056C20.6851 74.9986 20.2615 74.4912 20.0785 73.8921C19.9148 73.3111 16.0874 59.7309 19.2436 50.3696C22.6815 40.2259 33.2913 30 49.256 30C56.6343 30 63.605 32.3736 69.4231 36.856C73.9283 40.3421 77.6085 45.0243 79.5336 49.7049C81.9811 55.6808 81.3246 62.3881 77.8655 66.7697C75.5605 69.6918 72.2782 71.2195 68.6422 71.0537C59.1701 70.6044 57.4676 64.3465 56.2267 59.782C54.9498 55.0998 54.1329 52.8424 49.256 52.8424C46.5778 52.8424 44.6968 53.5396 43.5263 54.9836C41.9302 56.9591 41.8057 60.047 41.9825 62.2874C42.0986 63.8483 42.3783 65.3944 42.8174 66.9029C43.2071 67.8326 48.2803 79.6078 60.4307 82.4571C60.7447 82.5275 61.0409 82.6563 61.3019 82.8359C61.5629 83.0156 61.7836 83.2425 61.9511 83.5036C62.1187 83.7647 62.2297 84.0546 62.2779 84.3567C62.326 84.6587 62.3102 84.9668 62.2315 85.263C62.0832 85.7631 61.7661 86.2035 61.3287 86.5171C60.8912 86.8307 60.3574 87.0002 59.8086 86.9998V86.9998Z"
            stroke="green"
            strokeWidth="0.9"
            strokeDasharray={length2}
          />
          <AnimatedPath
            ref={ref3}
            animatedProps={strokeAnimation3}
            onLayout={() => {
              setLength3(ref3.current.getTotalLength());
              animatedValue3.value = ref3.current.getTotalLength();
            }}
            d="M39.9858 86C39.6415 86.0007 39.3006 85.9351 38.9834 85.8072C38.6663 85.6792 38.3793 85.4915 38.1396 85.2553C31.9925 79.0893 28.5153 72.1945 27.2068 63.5731V63.5273C26.4723 57.8198 27.5476 49.7391 32.8163 44.1834C36.7054 40.0838 42.1726 38 49.0377 38C57.1567 38 63.537 41.6079 67.5155 48.4174C70.4021 53.3644 70.9745 58.2941 70.9894 58.4964C71.0196 58.8085 70.9852 59.1231 70.888 59.4224C70.7909 59.7217 70.6329 59.9997 70.4231 60.2406C70.2134 60.4814 69.956 60.6804 69.6657 60.826C69.3754 60.9717 69.0579 61.0611 68.7313 61.0893C68.0725 61.1577 67.4119 60.9756 66.8923 60.5825C66.3726 60.1894 66.0356 59.6167 65.9539 58.9881C65.5181 56.0303 64.5166 53.1743 62.9994 50.5628C59.9159 45.3628 55.2245 42.7194 49.0195 42.7194C43.6598 42.7194 39.4663 44.2609 36.5813 47.3043C32.4226 51.6917 31.6187 58.4506 32.1894 62.9217C33.3357 70.5455 36.401 76.6103 41.8137 82.03C42.0396 82.2546 42.2159 82.5204 42.3322 82.8114C42.4486 83.1025 42.5024 83.4129 42.4907 83.7243C42.479 84.0356 42.4019 84.3415 42.264 84.6238C42.1261 84.9061 41.9302 85.1591 41.688 85.3676C41.2215 85.7717 40.6153 85.9969 39.9858 86V86Z"
            stroke="green"
            strokeWidth="0.9"
            strokeDasharray={length3}
          />
          <AnimatedPath
            ref={ref4}
            animatedProps={strokeAnimation4}
            onLayout={() => {
              setLength4(ref4.current.getTotalLength());
              animatedValue4.value = ref4.current.getTotalLength();
            }}
            d="M68.1164 79C62.6672 79 58.0345 77.5845 54.3274 74.7708C46.8795 69.1419 46.0445 59.9742 46.0077 59.5873C45.9552 58.9522 46.1738 58.3236 46.6154 57.8398C47.0571 57.3559 47.6855 57.0564 48.3626 57.0072C49.0396 56.958 49.7097 57.163 50.2256 57.5773C50.7414 57.9916 51.0607 58.5811 51.1132 59.2161C51.1316 59.3514 51.876 66.8504 57.617 71.1692C61.014 73.7139 65.5544 74.7236 71.1495 74.1339C71.8182 74.0578 72.4918 74.2331 73.0231 74.6215C73.5544 75.01 73.9001 75.5799 73.9848 76.2068C74.0214 76.5164 73.9919 76.8298 73.898 77.1287C73.8041 77.4275 73.6478 77.7059 73.438 77.9474C73.2282 78.189 72.9693 78.3889 72.6763 78.5356C72.3832 78.6823 72.062 78.7728 71.7313 78.8018C70.5314 78.9332 69.3244 78.9993 68.1164 79V79Z"
            stroke="green"
            strokeWidth="0.9"
            strokeDasharray={length4}
            strokeDashoffset="1"
          />
          <AnimatedPath
            ref={ref5}
            animatedProps={strokeAnimation5}
            onLayout={() => {
              setLength5(ref5.current.getTotalLength());
              animatedValue5.value = ref5.current.getTotalLength();
            }}
            d="M72.4591 17.3315C70.3628 15.9901 62.9297 12 48.9529 12C34.2817 12 26.8304 16.408 25.1821 17.5283C25.0732 17.594 24.9713 17.6702 24.8779 17.7559C24.868 17.7653 24.8552 17.771 24.8415 17.7722C24.5783 17.9982 24.3671 18.2768 24.222 18.5894C24.0769 18.902 24.0012 19.2415 24 19.5851C24.0045 19.9072 24.0736 20.2253 24.2034 20.5211C24.3331 20.817 24.5209 21.0847 24.7561 21.309C24.9912 21.5333 25.269 21.7098 25.5736 21.8283C25.8782 21.9468 26.2036 22.005 26.5312 21.9997C27.0561 21.9993 27.5684 21.841 27.9993 21.546C28.0704 21.494 34.4834 16.86 48.9578 16.86C63.4323 16.86 69.88 21.4777 69.9495 21.5119C70.3896 21.8329 70.9242 22.0041 71.4721 21.9997C71.7999 22.0046 72.1255 21.9458 72.4302 21.8267C72.7348 21.7076 73.0125 21.5305 73.2474 21.3055C73.4823 21.0806 73.6697 20.8122 73.7988 20.5159C73.928 20.2195 73.9963 19.901 74 19.5786C74.0001 19.0957 73.8535 18.6237 73.579 18.2233C73.3044 17.8229 72.9145 17.5124 72.4591 17.3315V17.3315Z"
            stroke="green"
            strokeWidth="0.9"
            strokeDasharray={length5}
          />
        </Svg>
      </View>
    </GestureDetector>
  );
});

export default SvgAnimation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});