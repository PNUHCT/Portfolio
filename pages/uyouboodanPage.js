import React, { useRef, useState } from "react";
import { BackHandler, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { useFocusEffect } from "@react-navigation/native";
import { WebView } from "react-native-webview";


const INJECTED_JAVASCRIPT = `(function() {
    AsyncStorage.setItem("memberCode", 1);
    AsyncStorage.setItem("isApp", true);
  })();`;

export default function uyouboodan({ url }) {
    const navigation = useNavigation();
    const webView = useRef(null);
    const [canGoBack, setCanGoBack] = useState(false);

    // Android's hardware back setting
    useFocusEffect(
        React.useCallback(() => {
            const onBackPress = () => {
                if (webView.current && canGoBack) {
                    webView.current.goBack();
                    return true;
                } else {
                    return false;
                }
            };
            BackHandler.addEventListener("hardwareBackPress", onBackPress);
            return() =>
                BackHandler.removeEventListener("hardwareBackPress", onBackPress);
        }, [canGoBack])
    );

    // Android's software back setting
    const backPress = (navState) => {
        const { canGoBack } = navState;

        if (canGoBack) {
            navigation.setParams({
                isCanBack: {
                    title: "",
                    onPress: () => webView.current.goBack(),
                },
            });
        } else {
            navigation.setParams({
                isCanBack: null,
            });
        }
    };

    // 실질적인 화면이 렌더링 되는 코드
    return (
            <div>
                <iframe src = "https://bit.ly/uyouboodan" 
                        width="100%" 
                        height="600"
                />
            </div>
    )


    /**
    * 웹뷰 사용시 코드
    */
    // return (
        // <WebView
        //     source={{
        //         uri: "https://bit.ly/uyouboodan",
        //     }}
        //     ref={webView}
        //     onNavigationStateChange={(navState) => {
        //         setCanGoBack(navState.canGoBack);
        //         backPress(navState);
        //     }}
        //     injectedJavaScript={INJECTED_JAVASCRIPT}
        //     onMessage={(event) => { }}
        // />   
    // )
}