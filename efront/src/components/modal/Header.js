export default function Header({ children, setShowModal }) {
    return (
        <>
            <header className="modal-card-head">
                <p className="modal-card-title">{children}</p>
                <button
                    onClick={() => setShowModal(false)}
                    className="delete" aria-label="close"></button>
            </header>
        </>
    )
}