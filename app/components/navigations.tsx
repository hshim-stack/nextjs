"use client"; // this is a client side component 

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigations() {
    const path = usePathname();  // uses client side path 

    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">Home </Link>
                    {path == "/" ? "🔥" : ""}
                </li>
                <li>
                    <Link href="/about-us">About us</Link>
                    {path == "/about-us" ? "🔥" : ""}
                </li>

            </ul>
        </nav>
    );
}
