import SearchInput from "../components/SearchInput.tsx";


export default function Home()  {

    return (
        <>
            <div>
                <div className="px-8 py-4">
                    <h1 className="font-semibold text-2xl">福島大学シラバス検索システム</h1>
                    <p className="mt-2 text-gray-500">有志作成によるシラバスの検索システムです。情報の正誤に対しては一切責任を負いません</p>
                </div>
            </div>
            <SearchInput />
        </>
    );
}

