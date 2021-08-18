import React, {useMemo} from 'react'
import {useTable} from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import { View, StyleSheet, Text, ScrollView } from 'react-native';

import { COLUMNS } from './columns'
import './styles.css'

export const BlacklistTable = () => {

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])

   const table = useTable({
        columns,
        data
    })

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = table
    return (
        <ScrollView>
            <View>
                <table {...getTableProps()}>
                    <thead>
                        {headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column => (
                                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>                                
                                ))}
                            </tr>                        
                        )) }
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        { rows.map((row) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell)=> {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}

                            </tr>
                        )
                        })}
                    </tbody>
                </table>                
            </View>
        </ScrollView>

    )
}


const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      //padding: 16,
      //paddingTop: 100,
      backgroundColor: '#fff',
    },
    cell: {
      borderBottomWidth: 1,
      borderColor: '#000',
      flex: 1,
      paddingHorizontal: 5,
      paddingVertical: 5,
      paddingTop:5,
      paddingBottom:5, 
      justifyContent: 'center',
      alignItems: 'center'
    },
    cellText: {
      fontSize: 14
    },
  });
