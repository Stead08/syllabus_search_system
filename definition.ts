import {statCallbackBigInt} from "https://deno.land/std@0.173.0/node/_fs/_fs_stat.ts";

export interface SearchDataList {
    CategoryId: string;
    CategoryName: string;
    SubCategory: {
        SubCategoryId: string;
        SubCategoryName: string;
    }[];
}
export type syllabusDetail = {
    syllabus_detail_id: number;
    科目名: string;
    講義名: string;
    クラス: string;
    担当教員: string;
    学年: string;
    開講学期: string;
    開講時期: string;
    曜日_時限: string;
    科目種別: string;
    科目区分: string;
    単位区分: string;
    単位数: number;
    準備事項: string;
    備考: string;
    特殊プログラム: string;
    授業方法: string;
    講義情報: string;
    registration_date: Date;
};

export const inputSearchData = [
    {
        CategoryId: "0",
        CategoryName: "",
        SubCategory: [
            {
                subCategoryId: "1",
                subCategoryName: ""
            }
        ]
    },
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
                SubCategoryId: "3",
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