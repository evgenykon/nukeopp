import { MouseEventHandler } from "react";

interface BaseMapDialogProps {
    title: string;
    flagShowClose: boolean;
    onClose: MouseEventHandler
}

export default BaseMapDialogProps;