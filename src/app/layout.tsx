import type { Metadata } from "next";
import "../shared/styles/index.css";

export const metadata: Metadata = {
    title: "amoCRM test task",
    description: "test task",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
            <body>{children}</body>
        </html>
    );
}
