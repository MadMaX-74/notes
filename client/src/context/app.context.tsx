import { fetchNotes } from "@/services/api";
import { NoteDocument } from "@/types/Note";
import { PropsWithChildren, createContext, useEffect, useState } from "react";

export interface NoteContext {
    notes: NoteDocument[] | [];
    loading: boolean;
    error: string;

}
export const AppContext = createContext<NoteContext>({
    notes: [],
    loading: true,
    error: ''
});
export const AppContextProvider = ({notes, loading, error, children}: PropsWithChildren<NoteContext>): JSX.Element => {
    const [notesState, setNotesState] = useState<NoteDocument[] | []>(notes);
    const [loadingNotes, setLoading] = useState<boolean>(loading)
    const [errorNotes, setNotesError] = useState<string>(error)
    const getNotes = async () => {
        try {
          const data: any = await fetchNotes()
          if (!data) {
            setNotesError('Notes not found')
            return
          }
          setNotesState(data)
          setLoading(false)
        } catch (e) {
          console.error(e)
          setNotesError('Find Notes Error')
        }
      }
      useEffect(() => {
        getNotes()
      }, [])

    return <AppContext.Provider value={{notes: notesState, loading: loadingNotes, error: errorNotes}}>
            {children}
        </AppContext.Provider>;
};