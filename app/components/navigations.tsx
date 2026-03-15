"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigations() {
    const path = usePathname();  // uses client side path 

    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">Home </Link>
                    {path == "/" ? "🔥" : ""} // depend on which page we are in, we will see a fire emoji
                </li>
                <li>
                    <Link href="/about-us">About us</Link>
                    {path == "/about-us" ? "🔥" : ""}
                </li>
            </ul>
        </nav>
    );
}