// import React, { useState, useEffect } from "react";
// import Chart from 'react-apexcharts';


// function Donutchart() {
//     const [contryname, setCountryname] = useState([]);
//     const [medal, setMedal] = useState([]);

//     useEffect(() => {
//         const getdata = async () => {
//             const countryname = [];
//             const getmedal = [];

//             const reqData = await fetch("https://jsonplaceholder.typicode.com/users");
//             const resData = await reqData.json();
//             for (let i = 0; i < resData.length; i++) {
//                 countryname.push(resData[i].name);
//                 getmedal.push(parseInt(resData[i].id));
//             }
//             setCountryname(countryname);
//             setMedal(getmedal);
//         }
//         getdata();
//     }, []);

//     return (
//         <React.Fragment>
//             <Chart
//                 type="donut"
//                 width={649}
//                 height={550}
//                 series={medal}
                
                

//                 options={{
//                     labels: contryname,
                    
//                     title: {
//                         text: "Medal Country Name",
//                         align:"center",
//                     },
//                     plotOptions: {
//                         pie: {
//                             donut: {

//                                 labels: {
//                                     show: true,
//                                     total: {
//                                         show: true,
//                                         showAlways: true,
//                                         //formatter: () => '343',
//                                         fontSize:30,
//                                         // color: '#f90000',
//                                         backgroundColor: [
//                                             '#009F8F',
//                                             '#FF6666'
//                                         ],
//                                         borderColor: [
//                                             '#009F8F',
//                                             '#FF6666'
//                                         ],
//                                     }
//                                 }
//                             }
//                         }
//                     },
//                     dataLabels: {
//                         enabled: true,
//                     }
//                 }}
//             />
//         </React.Fragment>
//     );
// }
// export default Donutchart;
