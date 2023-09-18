import { dowloadIcon } from '../../assets/MainPanelImgs';
import Chart from "react-apexcharts";

const DoughtTwo = () => {
  return (
        <div className="w-[335px] overflow-hidden bg-[#fff] rounded-[15px] border relative border-[#EDEDED] hover:shadow-lg shadow-md duration-300">
            <h2 className="text-[#555555] text-lg font-bold text-center py-[21px]">Hisob statistikasi</h2>
            <hr className="border-[#EDEDED]" />
            <div className="pt-[3px] pb-[5px]">
                <center className="relative">
                    <div className="absolute left-[35%] top-[44.9%] right-[15%] z-[1]">
                        <h3 className="text-[#555556] text-[20px] font-bold">%</h3>
                    </div>
                    <div className='h-[250px] pt-3 ml-9 '>
                        <Chart
                            type="donut"
                            width={390}
                            height={390}
                            series={[63, 25]}
                            options={{
                                chart: {
                                    type: 'donut',
                                },
                                stroke: {
                                    width: 1,
                                },
                                plotOptions: {
                                    pie: {
                                        donut: {
                                            labels: {
                                                show: true,
                                                total: {
                                                    show: true,
                                                    color: "#009F8F",
                                                    fontSize: "24px"
                                                }
                                            }
                                        }
                                    }
                                },
                                labels: ["To'laganlar", "Qarzdorlar"],
                                dataLabels: {
                                    enabled: false
                                },
                                colors: ['#009F8F', '#FF6666'],
                                responsive: [{
                                    breakpoint: 0,
                                    options: {
                                        chart: {
                                            width: 20
                                        },
                                        legend: {
                                            position: 'bottom',
                                            align: 'bottom',
                                            top: '10px'
                                        }
                                    }
                                }]
                            }}
                        />
                    </div>
                    <div className="flex items-center gap-[10px] justify-center my-[13px] cursor-pointer select-none">
                        <img src={dowloadIcon} alt="" />
                        <h3>Ma'lumotlarni yuklab olish</h3>
                    </div>
                    <hr className="border-[#EDEDED]" />
                </center>
                <div className="flex items-center justify-between px-[26px] py-[15px]">
                    <div className="flex items-center gap-[10px]">
                        <div className="border-[5px] border-[#009F8F] rounded-[50%] w-[20px] h-[20px]" ></div>
                        <h3 className="text-[#555555] text-base font-medium">Kirimlar</h3>
                    </div>
                    <div className="flex items-center gap-[10px]">
                        <div className="border-[5px] border-[#FF6666] rounded-[50%] w-[20px] h-[20px]"></div>
                        <h3 className="text-[#555555] text-base font-medium">Chiqimlar</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DoughtTwo;
