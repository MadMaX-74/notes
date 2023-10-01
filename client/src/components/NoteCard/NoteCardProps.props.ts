import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface NoteCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    id:string
    title: string
    text: string
}