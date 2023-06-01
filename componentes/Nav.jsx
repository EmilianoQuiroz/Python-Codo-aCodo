import Link from "next/link";

export default function Nav() {
  return (
    <>
        <nav>
          <Link href="/">Inicio</Link>
          <Link href="/about">About</Link>
          <Link href="/quienesSomos">Quienes somos</Link>
        </nav>
    </>
  )
}
