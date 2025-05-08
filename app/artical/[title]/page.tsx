type params = {
   title: string;
}
export default async function Title({params}: {params: params}) {
    console.log("Params",params.title);

    return (
        <div className="main-container dark:bg-gray-800">
            <h1>Show article </h1>
            <p>{params.title}</p>
        </div>
    );
}