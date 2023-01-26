import {useState, useEffect} from "react"
import {Box, IconButton, Typography, Modal} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import parse from "html-react-parser"

const modalWrapper = {
    overflow:"auto",
    maxHeight:"100vh",
    display:"flex",
};
const modalBlock = {
    position:"relative",
    zIndex:0,
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    margin:"auto",
}

const modalContentStyle ={
    position:"relative",
    background:"#fff",
    boxShadow:24,
    width:"50rem",
    margin: 10,
    borderRadius:"10px",
};

const closeButtonStyle = {
    height: 0,
    textAlign: "right",
};


export default function BasicModal(props) {
    const {isOpen, syllabus} = props;
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [open, setOpen] = useState(false);
    useEffect(() => {
        if (isOpen === true) {
            handleOpen();
            console.log(parse(syllabus[0].講義情報))
        }
    }, [isOpen])

    return (
        <>
            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    sx={modalWrapper}
                >
                    <Box sx={modalBlock}>
                        <Box sx={modalContentStyle} >
                        <Box sx={closeButtonStyle}>
                            <IconButton onClick={handleClose}>
                                <CloseIcon/>
                            </IconButton>
                        </Box>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            シラバス詳細
                        </Typography>
                        <table className="m-10">
                            <tr>
                                <th>講義名</th>
                                <td>{syllabus[0].講義名}</td>
                            </tr>
                            <tr>
                                <th>クラス</th>
                                <td>{syllabus[0].クラス}</td>
                            </tr>
                            <tr>
                                <th>担当教員</th>
                                <td>{syllabus[0].担当教員}</td>
                            </tr>
                            <tr>
                                <th>学年</th>
                                <td>{syllabus[0].学年}</td>
                            </tr>
                            <tr>
                                <th>開講学期</th>
                                <td>{syllabus[0].開講学期}</td>
                            </tr>
                            <tr>
                                <th>開講時期</th>
                                <td>{syllabus[0].開講時期}</td>
                            </tr>
                            <tr>
                                <th>曜日1</th>
                                <td>{syllabus[0].曜日1}</td>
                            </tr>
                            <tr>
                                <th>時限1</th>
                                <td>{syllabus[0].時限1}</td>
                            </tr>
                            <tr>
                                <th>曜日2</th>
                                <td>{syllabus[0].曜日2}</td>
                            </tr>
                            <tr>
                                <th>時限2</th>
                                <td>{syllabus[0].時限2}</td>
                            </tr>
                            <tr>
                                <th>科目種別</th>
                                <td>{syllabus[0].科目種別}</td>
                            </tr>
                            <tr>
                                <th>科目区分</th>
                                <td>{syllabus[0].科目区分}</td>
                            </tr>
                            <tr>
                                <th>単位区分</th>
                                <td>{syllabus[0].単位区分}</td>
                            </tr>
                            <tr>
                                <th>単位数</th>
                                <td>{syllabus[0].単位数}</td>
                            </tr>
                            <tr>
                                <th>準備事項</th>
                                <td>{syllabus[0].準備事項}</td>
                            </tr>
                            <tr>
                                <th>備考</th>
                                <td>{syllabus[0].備考}</td>
                            </tr>
                            <tr>
                                <th>特殊プログラム</th>
                                <td>{syllabus[0].特殊プログラム}</td>
                            </tr>
                            <tr>
                                <th>授業方法</th>
                                <td>{syllabus[0].授業方法}</td>
                            </tr>
                            <tr>
                                <th>授業情報</th>
                                <td>{parse(syllabus[0].講義情報)}</td>
                            </tr>


                        </table>
                        </Box>
                    </Box>
                </Modal>
            </div>
        </>
    );
}