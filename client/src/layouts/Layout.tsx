import NavigationMenu from "@/components/NavigationMenu/NavigationMenu";
import { LayoutProps } from "./Layout.props";
import styles from '@/styles/Layout.module.css'
import { FunctionComponent } from "react";

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

export const withLayout = <T extends Record<string, unknown>> (Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T) :JSX.Element {
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        )
    }
}