export default function ArticalLayout({children}: {children: React.ReactNode}) {
    return (
        <div>
            <h1>Artical Layout</h1>

            <div className="bg-amber-700 w-full">
            {children}
            </div>
           
        </div>
    );
}