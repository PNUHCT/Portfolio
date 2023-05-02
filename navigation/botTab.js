import React, {useEffect, useState} from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import uyouboodan from '../pages/uyouboodanPage';
import bobaebilim from "../pages/bobaebilimPage";
import blog from "../pages/blogPage";
import profile from "../pages/profilePage";
import profile2 from "../pages/profilePage2";
import testPage from "../reference/mainPage";

/**
 * BotTab + Stack Navigator 라이브러리 선언
 */
const tabStack = createBottomTabNavigator();
const webViewStack = createStackNavigator();
const FBStack = createStackNavigator();

/**
 * 추가할 스크린 선언부
 */

/**
 * 1. webView 사용시
 */
const uyouboodanStackScreen = () => {
    return (
        <webViewStack.Navigator>
            <webViewStack.Screen
                name = "uyouboodan"
                component = {uyouboodan}
                options = {{ headerShown: false }}
            />
        </webViewStack.Navigator>
    );
};

const bobaebilimStackScreen = () => {
    return (
        <webViewStack.Navigator>
            <webViewStack.Screen
                name = "BoBaeBilim"
                component = {bobaebilim}
                options = {{ headerShown: false }}
            />
        </webViewStack.Navigator>
    );
};

const blogStackScreen = () => {
    return (
        <webViewStack.Navigator>
            <webViewStack.Screen
                name = "Blog"
                component = {blog}
                options = {{ headerShown: false }}
            />
        </webViewStack.Navigator>
    );
};


/**
 * 직접 렌더링 할 페이지
 */
const profileStackScreen = () => {
    return (
        <webViewStack.Navigator>
            <webViewStack.Screen
                name = "Profile"
                component = {profile}
                options = {{ headerShown: false }}
            />
        </webViewStack.Navigator>
    );
};



/**
 * 실질적인 Bot-Tab 레이아웃 (StackNavigation 동시적용 됨)
 * 화면 추가시, TabStack.Screen 태그를 사용해 추가. component 부분에 선언해둔 원하는 Screen의 변수명을 입력
 * <TabStack.Screen name = "설정할_스크린_이름"
                            component = { 선언해둔_스크린_변수명 }
                            options = {{ tabBarLabel : "원하는_탭바_라벨명", tabBarIcon : ({ color, size }) => 
                                (<MaterialCommunityIcons name = "account" color = { color } size = { size } />)
                            }}/>
 */
const tabStackScreen = () => {
    return (
        <tabStack.Navigator screenOptions = {{ tabBarActiveTintColor: '#eb4b4b', headerShown: false }}
                                                backBehavior = "history"
                                                initialRouteName = "프로필"
                                                sceneContainerStyle = {{ marginTop : 0 }}>
            <tabStack.Screen name = "프로필"
                            component = {profileStackScreen}
                            options = {{ tabBarLabel : "프로필", tabBarIcon : ({ color, size }) => 
                                        (<MaterialCommunityIcons name = "account" color = { color } size = { size } />)
                            }}
            />            
            <tabStack.Screen name = "우유부단"
                            component = {uyouboodanStackScreen}
                            options = {{ tabBarLabel : "우유부단", tabBarIcon : ({ color, size }) => 
                                        (<MaterialCommunityIcons name = "vote" color = { color } size = { size } />)
                            }}
            />
            <tabStack.Screen name = "보배빌림"
                            component = {bobaebilimStackScreen}
                            options = {{ tabBarLabel : "보배빌림", tabBarIcon : ({ color, size }) => 
                                        (<MaterialCommunityIcons name = "battery" color = { color } size = { size } />)
                            }}
            />
            <tabStack.Screen name = "블로그"
                            component = {blogStackScreen}
                            options = {{ tabBarLabel : "블로그", tabBarIcon : ({ color, size }) => 
                                        (<MaterialCommunityIcons name = "island" color = { color } size = { size } />)
                            }}
            />
        </tabStack.Navigator>
    );
};
                            
export default tabStackScreen;