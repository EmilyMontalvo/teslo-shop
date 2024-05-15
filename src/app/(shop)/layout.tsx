import { Sidebar, TopMenu } from "@/components";

export default function ShopLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <>
            <TopMenu/>
            <Sidebar/>
            <main className="min-h-screen px:0 sm:px-10">{children}</main>
        </>
    );
}