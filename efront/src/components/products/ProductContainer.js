export default function ProductContainer(props) {
    return (
        <>
            <div className={`productContainer p-6 ${props.className}`} style={{ height: '100%' }}>
                {props.children}
            </div>
        </>
    )
}