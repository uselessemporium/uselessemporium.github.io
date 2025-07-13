


export const BodyContainerComponent: React.FC<React.PropsWithChildren> = ({children,}) => {
    /*
    This component contains the entirety of the page.
    */
    return <>
        <div className="flex items-center justify-center flex-grow p-4">
        {children}
        </div>
    </>
}