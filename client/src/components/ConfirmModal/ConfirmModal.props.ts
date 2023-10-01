import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ConfirmModalProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    id: string;
    closeModal: () => void;
    updateNoteList: (id: string) => void;
}