import React, { useState, useRef, useLayoutEffect, useCallback } from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import CircularProgress from '@material-ui/core/CircularProgress'
import {nameList} from "../helpers/constants";

const Dakkantal = () => {
    const tableEl = useRef()
    const [rows, setRows] = useState(nameList()())
    const [loading, setLoading] = useState(false)
    const [distanceBottom, setDistanceBottom] = useState(0)
    const [hasMore] = useState(true)
    const loadMore = useCallback(() => {
        const loadItems = async () => {
            await new Promise(resolve =>
                setTimeout(() => {
                    setRows(nameList())
                    setLoading(false)
                    resolve()
                }, 2000)
            )
        }
        setLoading(true)
        loadItems()
    }, [rows])
    const scrollListener = useCallback(() => {
        let bottom = tableEl.current.scrollHeight - tableEl.current.clientHeight
        if (!distanceBottom) {
            setDistanceBottom(Math.round((bottom / 100) * 20))
        }
        if (tableEl.current.scrollTop > bottom - distanceBottom && hasMore && !loading) {
            loadMore()
        }
    }, [hasMore, loadMore, loading, distanceBottom])
    useLayoutEffect(() => {
        const tableRef = tableEl.current
        tableRef.addEventListener('scroll', scrollListener)
        return () => {
            tableRef.removeEventListener('scroll', scrollListener)
        }
    }, [scrollListener])
    return (
        <TableContainer style={{ maxWidth: '800px', margin: 'auto', maxHeight: '600px' }} ref={tableEl}>
            {loading && <CircularProgress style={{ position: 'absolute', top: '100px' }} />}
            <Table stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Dakkantal</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(({ id, name, dakkantal }) => (
                        <TableRow key={id}>
                            <TableCell>{name}</TableCell>
                            <TableCell>{dakkantal}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
export default Dakkantal
