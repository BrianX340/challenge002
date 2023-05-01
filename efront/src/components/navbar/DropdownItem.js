import Link from 'next/link'

export default function DropdownItem(props) {
    return (
        <>
            <Link href={`/${props.to}`} smooth={true} duration={1000} className="navbar-item">
                {props.text}
            </Link>
        </>
    )
}