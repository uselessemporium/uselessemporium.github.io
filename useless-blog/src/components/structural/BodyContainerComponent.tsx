


export const BodyContainerComponent: React.FC<React.PropsWithChildren> = ({children,}) => {
    /*
    This component contains the entirety of the page.
    */
    return(
        <main className="flex-grow p-4 flex flex-col items-start">
        {children}
        </main>
    );
}