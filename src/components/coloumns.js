// export const COLUMNS = [        //----- here we define a column varaiabke whic gives the data in the form of array        generally which maps the dataaaaaaaaaaaaaaa in the foom of objectssssssssssssss
//     {     //-----here accessor maps the data from server with sam eexact name in the server
//         Header:'id',
//         accessor:'id'    
//     },
//     {
//         Header:'First Name',
//         accessor:'first_name'

//     },
//     {
//         Header:'Last Name',
//         accessor:'last_name'

//     },
//     {
//         Header:'Country',
//         accessor:'country'
//                                     //----- it is the process of defining the columns
//     },
//     {
//         Header:'age',
//         accessor:'age'

//     },  {
//         Header:'phone',
//         accessor:'phone'

//     },
// ]




// //-----const columns = React.useMemo(
//  () => [
//     {
//     Header: 'User Info',
//     columns: [
//     {
//     Header: 'Name',
//     accessor: 'name',
//     },
//     {
//     Header: 'Address',
//     accessor: 'address',
//     },
//     ],
//     },
//     {
//     Header: 'Order Info',
//     columns: [
//     {
//     Header: 'Date',
//     accessor: 'date',
//     },
//     {
//     Header: 'Order #',
//     accessor: 'order',
//     },
//     ],
//     },
//     ],
//     []
//    )
import { format } from "date-fns"
            //    ----- this for creating footers we need to add footer like header with sam ename
 import {ColumnFilter} from './ColumnFilter'
            export const COLUMNS = [        
    {     
        Header:'id',
        Footer:'id',
        accessor:'id' ,
        Filter:ColumnFilter,  
        disableFilters:true  //----- this helps in diable of a particular column filter
    },
    {
        Header:'First Name',
        Footer:'First Name',
        accessor:'first_name',
        Filter:ColumnFilter,   


    },
    {
        Header:'Last Name',
        Footer:'Last Name',
        accessor:'last_name',
        Filter:ColumnFilter,   


    },
    {
        Header:'Country',
        Footer:'country',
        accessor:'country',
        Filter:ColumnFilter,   

                                  
    },
    {
         Header:'DOB',
         Footer:'DoB',
         accessor:'date_of_birth',
        //  Cell:({ value }) => {return format(new Date(value).toISOString,'dd/mm/yyyy')}
        // Cell: ()=> new Date("03-01-2018".replace( /(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3"))
       
       
        Cell:({value})=>{    //----- destructing the value as it is json form in or mock data  
         return format( Date(value),'dd/mm/yyyy')
        },
        Filter:ColumnFilter,   

    },
   
    
    
    {
        Header:'age',
        Footer:'age',
        accessor:'age',
        Filter:ColumnFilter,   


    },  {
        Header:'phone',
        Footer:'phone',
        accessor:'phone',
        Filter:ColumnFilter,   


    },
]
                    //----- for grouping the haeders
                                          //----- define how many headers u want 

 

                // export const GROUP_COLUMN = [
                //     {
                //         Header:'id',
                //            Footer:'id',
                //               accessor:'id'   
                //     },
                //     {
                //         Header:'Name',
                //         Footer:'Name',
                //         columns:[
                //             {
                //                        Header:'First Name',
                //                         Footer:'First Name',
                //                         accessor:'first_name'
                                
                //                     },
                //                     {
                //                         Header:'Last Name',
                //                         Footer:'Last Name',
                //                         accessor:'last_name'
                                
                //                     },
                //         ]

                //     },
                //     {
                //            Header:'info',
                //            Footer:'info',
                //            columns:[
                //             {
                //                         Header:'Country',
                //                         Footer:'country',
                //                         accessor:'country'
                                                                  
                //                     },
                //                     {
                //                         Header:'age',
                //                         Footer:'age',
                //                         accessor:'age'
                                
                //                     },  {
                //                         Header:'phone',
                //                         Footer:'phone',
                //                         accessor:'phone'
                                
                //                     },
                //            ]
                //     }
                // ]                          