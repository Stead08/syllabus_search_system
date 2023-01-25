import React, { useState, useEffect } from 'react';

type JsonSyllabus = {
    syllabus_list_id: number;
    "年度": string;
    "カテゴリ": string;
    "科目区分": string;
    "単位区分": string;
    "講義名": string;
    "担当教員": string;
    "学年": string;
    "曜日1": string;
    "時限1": number;
    "曜日2": string;
    "時限2": string;
    "科目コード": string;
    "ナンバリング": string;
    "syllabus_detail_id": string;
}

type JsonSyllabusList = {
    lessons: JsonSyllabus[];
}

export const ShowSyllabusList = (props) => {
    const SearchedList= props;
    console.log(SearchedList[0].年度)
    return (
        <>
        <table>
        <thead>
            <tr>
                <th>no</th>
        <th>年度</th>
        <th>科目区分</th>
        <th>単位区分</th>
        <th>講義名</th>
        <th>担当教員</th>
        </tr>
        </thead>
        <tbody>
        </tbody>
        </table>

        </>
    );
}
