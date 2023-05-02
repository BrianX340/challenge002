export default function Modal({ children }) {
    return (
        <>
            <div className="modal is-active">
                <div className="modal-background"></div>
                <div className="modal-card">
                    {children}
                </div>
            </div>
        </>
    )
}