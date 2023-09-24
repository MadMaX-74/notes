import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface CreateModalProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    closeModal: () => void;
    updateCounter: () => void;
}