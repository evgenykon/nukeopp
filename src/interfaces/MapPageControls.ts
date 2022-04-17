import { MouseEventHandler } from "react";

interface IMapPageControls {
    flagNewButton: boolean;
    flagStartDialog: boolean;
    mainContainerClass: string;
}

class MapPageControls implements IMapPageControls {
    flagNewButton: boolean;
    flagStartDialog: boolean;
    mainContainerClass: string;
    constructor(flagNewButton:boolean) {
        this.flagNewButton = flagNewButton;
        this.flagStartDialog = false;
        this.mainContainerClass = '';
    }
}


export {IMapPageControls, MapPageControls};