import Link from 'next/link'

export default function NavbarItem(props) {
    return (
        <>
             <Link href={`/${props.to}`} smooth={true} duration={1000} className="navbar-item has-text-white">
                {props.text}
            </Link>
        </>
    )
}