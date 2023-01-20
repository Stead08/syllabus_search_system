import {applyUnoCSS} from "aleph/runtime/core/style.ts";
import {useRef, useState} from "react"
import {MenuItem, FormControl, Select, InputLabel} from "@mui/material"
import {SearchDataList, inputSearchData, dayOfWeek, period} from "../definition.ts";

interface ComboBoxItem {
    id: string;
    value: string;
}
const Data = JSON.stringify(inputSearchData);

export default function SearchInput() {
    const data = JSON.parse(Data);
    const inputData: SearchDataList[] = Object.keys(data).map((key) => {
        return data[key]
    })
    const [CategoryOptions] = useState<ComboBoxItem[]>(
        inputData.map((d) => {
            return {
                id: d.CategoryId,
                value: d.CategoryName
            }
        })
    );
    //Categoryリストで選択中の都道府県ID State管理
    const [selectedCategoryId, setSelectedCategoryId] = useState<string>(inputData[0].CategoryId);
    //Category（選択中）Ref管理
    const CategoryOptionsRef = useRef(
        inputData.filter((d) => d.CategoryId === selectedCategoryId)[0].SubCategory.map((d) => {
            return {
                id: d.SubCategoryId,
                value: d.SubCategoryName
            }
        })
    )
    //SubCategoryリストState管理
    const [selectedSubCategoryId, setSelectedSubCategoryId] = useState(
        inputData[0].SubCategory[0].SubCategoryId);

    //Categoryリスト変更時
    const onCategoryChangeHandler = (CategoryId: string) => {
        //選択したcategoryをStateに設定
        setSelectedCategoryId(CategoryId);

        //選択したcategoryのSubCategory一覧
        const selectedSubCategory = inputData.filter(
            (d) => d.CategoryId === CategoryId
        )[0].SubCategory;

        //選択したcategoryのsubcategoryをRefに設定
        CategoryOptionsRef.current = selectedSubCategory.map((d) => {
            return {
                id: d.SubCategoryId,
                value: d.SubCategoryName
            }
        })
    }

    return (
        <div className="m-25">
            <h2 className="font-semibold text-2xl">検索条件</h2>
            <div className="m-t-15"></div>
            <FormControl className="f-w-200">
                <InputLabel>大分類</InputLabel>
                <Select
                    defaultValue={CategoryOptions[0].id}
                    value={selectedCategoryId}
                    onChange={(e:any) => {
                        if (e.target.value !== undefined) {
                            onCategoryChangeHandler(e.target.value as string)
                        }
                    }
                    }>
                    {CategoryOptions.map((item) => (
                        <MenuItem value={item.id} key={item.id}>
                            {item.value}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <div className="m-t-15"></div>
            <FormControl className="f-w-200">
                <InputLabel>小分類</InputLabel>
                <Select
                    defaultValue={"1"}
                    value={selectedSubCategoryId}
                    onChange={(e:any) => {
                    if (e.target.value !== undefined) {
                setSelectedSubCategoryId(e.target.value as string);
                }
            }}
            >
                    {CategoryOptionsRef.current.map((item) => (
                        <MenuItem value={item.id} key={item.id}>
                            {item.value}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <h3>曜日と時間</h3>
            <select>
                {
                    (dayOfWeek.map((day, index) => (
                        <option value={day.value} key={index}>{day.label}</option>
                    )))
                }
            </select>
            <select>
                {
                    (period.map((period, index) => (
                        <option value={period.value} key={index}>{period.label}</option>
                    )))
                }
            </select>
            <h3>講義名で検索</h3>
            <input placeholder="講義名"/>
            <button>検索</button>
        </div>
    )
}