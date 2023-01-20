import {statCallbackBigInt} from "https://deno.land/std@0.173.0/node/_fs/_fs_stat.ts";

export interface SearchDataList {
    CategoryId: string;
    CategoryName: string;
    SubCategory: {
        SubCategoryId: string;
        SubCategoryName: string;
    }[];
}

export const inputSearchData = [
    {
        CategoryId: "1",
        CategoryName: "基盤教育",
        SubCategory: [
            {
                SubCategoryId: "1",
                SubCategoryName: "接続領域"
            },
            {
                SubCategoryId: "2",
                SubCategoryName: "教養領域"
            },
            {
                SubCategoryId: 3,
                SubCategoryName: "問題探究領域"
            },
        ]

    },
    {
        CategoryId: "2",
        CategoryName: "専門教育",
        SubCategory: [
            {
                SubCategoryId: "1",
                SubCategoryName: "学類基礎領域"
            },
            {
                SubCategoryId: "2",
                SubCategoryName: "学類専門領域"
            },
            {
                SubCategoryId: "3",
                SubCategoryName: "卒業研究領域"
            }
        ]
    },
    {
        CategoryId: "3",
        CategoryName: "自由選択",
        SubCategory: [
            {
                SubCategoryId: "1",
                SubCategoryName: "自由選択領域"
            }
        ]
    }
]


//曜日
export const dayOfWeek = [
    {label: "月", value: "Mon"},
    {label: "火", value: "Tue"},
    {label: "水", value: "Wed"},
    {label: "木", value: "Thr"},
    {label: "金", value: "Fri"},
    {label: "土", value: "Sat"}
]

export const period = [
    {label: "1", value: "1"},
    {label: "2", value: "2"},
    {label: "3", value: "3"},
    {label: "4", value: "4"},
    {label: "5", value: "5"},
    {label: "6", value: "6"}
]