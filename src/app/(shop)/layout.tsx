import { TopMenu } from "@/components";

export default function ShopLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <>
            <TopMenu/>
            <main className="min-h-screen">{children}</main>
        </>
    );
}