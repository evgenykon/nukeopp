import { MouseEventHandler } from "react";

export default interface BaseRoundPortraitProps {
    id: string,
    img: string,
    title: string,
    subTitle: string,
    onClick: Function
};