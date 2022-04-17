import { MouseEventHandler } from "react";

export default interface StartDialogProps {
    onDialogClose: MouseEventHandler;
    onDialogSubmit: Function;
};