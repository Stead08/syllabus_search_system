import Unocss from '@unocss/core'
import React, {useRef, useState} from "react"
import {MenuItem, FormControl, InputLabel, Button, Input, TextField} from "@mui/material"
import {SearchDataList, inputSearchData, dayOfWeek, period} from "../definition.ts";
import {toInteger} from "https://deno.land/std@0.173.0/node/internal/buffer.mjs";

interface ComboBoxItem {
    id: string;
    value: string;
}

const Data = JSON.stringify(inputSearchData);

export default function SearchInput(props :any) {
    const {searchText} = props;
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
    const [searchValue, setSearchValue] = useState("")
    const handleSearchInputChanges = (e:any) => {
        setSearchValue(e.target.value)
    }
    const resetInputField = () => {
        setSearchValue("")
    }

    const callSearchFunction = (e:any) => {
        e.preventDefault();
        props.searchText([searchValue, ""]);
        resetInputField();

    }

    return (
        <div className="m-10">
            <h2 className="font-semibold text-xl">検索条件</h2>
            <FormControl className='m-t-10'>
                <TextField
                    id="Category"
                    select
                    label="大分類"
                    defaultValue={CategoryOptions[0].id}
                    helperText="大分類を選択してください"
                    value={selectedCategoryId}
                    onChange={(e: any) => {
                        if (e.target.value !== undefined) {
                            onCategoryChangeHandler(e.target.value as string)
                        }
                    }}
                >
                    {CategoryOptions.map((item) => (
                        <MenuItem value={item.id} key={item.id}>
                            {item.value}
                        </MenuItem>
                    ))}
                </TextField>
            </FormControl>
            <div></div>
            <FormControl className="m-t-5">
                <TextField
                    id="SubCategory"
                    select
                    label="小分類"
                    //defaultValue="1"
                    helperText="小分類を選択してください"
                    value={selectedSubCategoryId}
                    onChange={(e: any) => {
                        if (e.target.value !== undefined) {
                            setSelectedSubCategoryId(e.target.value as string)
                        }
                    }}
                >
                    {CategoryOptionsRef.current.map((item) => (
                        <MenuItem value={item.id} key={item.id}>
                            {item.value}
                        </MenuItem>
                    ))}
                </TextField>
            </FormControl>
            <div></div>
            <FormControl className="m-t-5">
                <TextField
                    id="dayOfWeek"
                    select
                    label="曜日"
                    helperText="曜日を選択"
                >
                    {
                        (dayOfWeek.map((day, index) => (
                            <option value={day.value} key={index}>{day.label}</option>
                        )))
                    }
                </TextField>
                <TextField
                    id="period"
                    select
                    label="時限"
                    helperText="時限を選択"
                >
                    {
                        (period.map((period, index) => (
                            <option value={period.value} key={index}>{period.label}</option>
                        )))
                    }
                </TextField>
            </FormControl>
            <div></div>
            <FormControl className="m-t-5">
                <InputLabel>講義名で検索</InputLabel>
                <Input
                    value={searchValue}
                    onChange={handleSearchInputChanges}
                    type="text"
                />
            </FormControl>
            <div className='m-t-10'></div>
            <Button size="large" onClick={callSearchFunction} type="submit" value="Search">検索</Button>
        </div>
    )
}
