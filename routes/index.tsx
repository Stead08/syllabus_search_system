import SearchInput from "../components/SearchInput.tsx";
import { ShowSyllabusList } from "../components/ShowSyllabusList.tsx"
import {useState, useEffect} from "react";
import Unocss from "@unocss/core"

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
    }, []);

    //検索ボタンが押された時の処理
    const search = (searchText: any) => {
        setLoading(true);
        setErrorMessage(null);
        const lesson = searchText[0];
        const category = "lesson" && searchText[1];


        const json = fetch(`http://localhost:4000/search/${category}/${lesson}`, {
            method: "GET"
        });
        json.then((response: Response) => {
            return response.json();
        }).then((jsonData) => {
            console.log(jsonData)
            setSearchedList(jsonData)
        })


    };
    //const SyllabusList = ShowSyllabusList(SearchedList)

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
            <div　className="px-8 py-4">
                <h1>検索結果</h1>
                <table>
                    <thead>
                    <tr>
                        <th>no</th>
                        <th>講義名</th>
                        <th>担当教員</th>
                        <th>単位区分</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Object.keys(SearchedList).map((key, ii) => (
                        <tr key={ii}>
                            <td>{ii}</td>
                            <td>{SearchedList[key].講義名}</td>
                            <td>{SearchedList[key].担当教員}</td>
                            <td>{SearchedList[key].単位区分}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>


        </>
    );
}

