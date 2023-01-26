import SearchInput from "../components/SearchInput.tsx";
import {DataGrid, GridColDef} from "@mui/x-data-grid"
import SyllabusDetailModal from "../components/SyllabusDetailModal.tsx";
import {useState, useEffect} from "react";
import {syllabusDetail} from "../definition.ts";

const columns: GridColDef[] = [
    {field: 'syllabus_list_id', headerName: 'ID', width: 70},
    {field: '科目区分', headerName: '科目区分', width: 130},
    {field: '単位区分', headerName: '単位区分', width: 70},
    {
        field: '講義名',
        headerName: '講義名',
        type: 'string',
        width: 160,
    },
    {
        field: '担当教員',
        headerName: '担当教員',
        width: 160,
    },
    {
        field: '単位区分',
        headerName: '単位区分',
        width: 70,
    },
    {
        field: '学年',
        headerName: '学年',
        width: 70,
    },
    {
        field: '開講時期',
        headerName: '開講時期',
        width: 70,
    },
    {
        field: '曜日1',
        headerName: '曜日',
        width: 70,
    },
    {
        field: '時限1',
        headerName: '時限',
        width: 70,
    },
    {
        field: 'syllabus_detail_id',
        headerName: '詳細ID',
        width: 70,
    }
]

const defaultSyllabusDetail: syllabusDetail = {
    "syllabus_detail_id": 9999,
    "講義名": "",
    "クラス": "",
    "担当教員": "",
    "学年": "",
    "開講学期": "",
    "開講時期": "",
    "曜日_時限": "",
    "科目種別": "",
    "科目区分": "",
    "単位区分": "",
    "単位数": 0,
    "準備事項": "",
    "備考": "",
    "特殊プログラム": "",
    "授業方法": "",
    "講義情報": "",
    "registration_date": Date(628021800000)
}
export default function Home() {
    const [SearchedList, setSearchedList] = useState("");
    const [Syllabus, setSyllabus] = useState([defaultSyllabusDetail]);
    const [open, setOpen] = useState(false);


    //検索ボタンが押された時の処理
    const search = (searchText: [string, string]) => {
        const lesson = searchText[0];
        const category = "lesson" && searchText[1];


        const json = fetch(`http://localhost:4000/search/${category}/${lesson}`, {
            method: "GET"
        });
        json.then((response: Response) => {
            return response.json();
        }).then((jsonData) => {
            setSearchedList(jsonData)
        })


    };

    const cellClickHandler = (event: any) => {
        const json = fetch(`http://localhost:4000/syllabus/${event.row.syllabus_detail_id}`, {
            method: "GET"
        });
        json.then((response: Response) => {
            return response.json();
        }).then((jsonData: syllabusDetail) => {
            setSyllabus(jsonData)
        })
        setOpen(true)

    }

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
            <div style={{height: 800, width: '80%', margin: 10}}>
                <DataGrid
                    getRowId={(row) => row.syllabus_detail_id}
                    rows={SearchedList}
                    columns={columns}
                    pageSize={30}
                    rowsPerPageOptions={[15]}
                    onCellClick={(event: any) => {
                        cellClickHandler(event);
                    }}
                />
            </div>
            <SyllabusDetailModal
                isOpen={open}
                syllabus={Syllabus}
            />
        </>
    );
}

