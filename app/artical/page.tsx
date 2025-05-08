import Link from "next/link";
// metadata patter add in layout.tsx 
export const metadata = {
    title: "Artical",
    description: "Artical Page",
}
export default function Artical() {
    return (
        <>
        <div className="main-container dark:bg-gray-800">
        <Link href="/">Home</Link>
        <Link href="/posts">Posts</Link>
        <Link href="/artical">Artical</Link>
        </div>
        </>
    );
}