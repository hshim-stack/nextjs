// app/layout.tsx

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "My App",
    description: "My App Description",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
