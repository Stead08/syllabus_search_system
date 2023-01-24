import SearchInput from "../components/SearchInput.tsx";
import {useState, useEffect} from "react";
import Unocss from "@unocss/core"

type searchText = {
    searchText: string;
    category: string;
}
export default function Home() {
    const [loading, setLoading] = useState(true);
    const [SearchedList, setSearchedList] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);
    useEffect(() => {
        fetch(``, {
            method: "GET"
        })
            .then(response => response.json())
            .then(jsonResponse => {
                setSearchedList(jsonResponse.Search);
                setLoading(false);
            });
        console.log(SearchedList)
    }, []);
    //検索ボタンが押された時の処理
    const search = (searchText:searchText) => {
        setLoading(true);
        setErrorMessage(null);

        const json = fetch(`http://localhost:4000/search/${searchText.category}/${searchText.searchText}`, {
            method: "GET"
        });
        json.then((response: Response) => {
            return response.json();
        }).then((jsonData) => {
            console.log(JSON.stringify(jsonData))
            setSearchedList(JSON.stringify(jsonData))
        })


    };


    return (
        <>
            <div>
                <div className="px-8 py-4">
                    <h1 className="font-semibold text-2xl">シラバス検索システム</h1>
                    <p className="mt-2 text-gray-500">有志作成によるシラバスの検索システムです。情報の正誤に対しては一切責任を負いません</p>
                </div>
            </div>
            <SearchInput
                searchText={search}
            />
            <div className="syllabusList">

                <p>{SearchedList}</p>
            </div>

        </>
    );
}

