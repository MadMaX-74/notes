import NavigationMenu from "@/components/NavigationMenu/NavigationMenu";
import { LayoutProps } from "./Layout.props";
import styles from '@/styles/Layout.module.css'
import { FunctionComponent } from "react";
import { AppContextProvider, NoteContext } from "@/context/app.context";

function Layout({children} :LayoutProps) :JSX.Element{
    return (
        <div className={styles.app}>
            <NavigationMenu />
            <div className={styles.body}>
                {children}
            </div>
        </div>
    );
}

export const withLayout = <T extends Record<string, unknown> & NoteContext> (Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T) :JSX.Element {
        return (
            <AppContextProvider notes={props.notes} loading={props.loading} error={props.error}>
                <Layout>
                    <Component {...props} />
                </Layout>
            </AppContextProvider>
        )
    }
}