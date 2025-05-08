
export default async function Title({params}:any) {
    const prop =await params;
    console.log("Params",prop);

    return (
        <div className="main-container dark:bg-gray-800">
            <h1>Show article </h1>
            <p>{prop.title}</p>
        </div>
    );
}