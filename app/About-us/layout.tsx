
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us",
    description: "About Us",
};

export default function AboutUsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            {children}
            <h1>About Us Layout</h1>
        </div>
    );
}