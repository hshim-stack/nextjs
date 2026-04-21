// app/layout.tsx
import { Metadata } from "next";
import Navigations from "./components/navigations";
import "./styles/global.css";

export const metadata: Metadata = {
    title: "Learn Next JS",
    description: "Learn Next JS",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <Navigations />
                {children}
            </body>
        </html>
    );
}
