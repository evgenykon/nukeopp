import { MouseEventHandler } from "react";

interface IMapPageControls {
    flagNewButton: boolean;
    checkStr: string
}

class MapPageControls implements IMapPageControls {
    flagNewButton: boolean;
    checkStr: string;
    constructor(flagNewButton:boolean) {
        this.flagNewButton = flagNewButton;
        this.checkStr = 'contr';
    }
}


export {IMapPageControls, MapPageControls};