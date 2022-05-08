import React, {useRef, useState} from "react";
import {nameList} from "../helpers/constants";
import MaterialTable from "@material-table/core"
import TableContainer from "@material-ui/core/TableContainer";
import {fetchDakkantalData} from "../store/dynamo";

const DakkantalV2 = () => {
    const tableEl = useRef()
    const [columns, setColumns] = useState([
        { title: 'Name', field: 'name', editable: 'never' },
        { title: 'Dakkantal', field: 'dakkantal', editable: 'never' },
    ]);
    const [rows, setRows] = useState(nameList());

    return (
        <TableContainer style={{ maxWidth: '800px', margin: 'auto', maxHeight: '600px' }} ref={tableEl}>
            <MaterialTable
                title="Updated at 2022-05-08"
                columns={columns}
                data={rows}
            />
        </TableContainer>

    )
}
export default DakkantalV2
