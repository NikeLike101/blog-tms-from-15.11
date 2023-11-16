import {black, blue30, gray, pink, white, white60, white90} from "./colorConstants";

type ThemeColorType = {
    cardText: string,
    backgroundColor: string,
    buttonBg: string,
    titleColor: string,
    inputBg: string
    inputBgHovered: string
}

type ThemeColors = {
    dark: ThemeColorType,
     light: ThemeColorType
}

export const colors:ThemeColors  = {
    light: {
        cardText: gray,
        backgroundColor: white90,
        buttonBg: pink,
        titleColor: black,
        inputBg: white60,
        inputBgHovered: white
    },
    dark: {
        cardText: white90,
        backgroundColor: black,
        buttonBg: white90,
        titleColor: white,
        inputBg: gray,
        inputBgHovered: blue30
    },


}