import React from 'react';
import swal from 'sweetalert';
import './DashboardContent.css';
import { Table, Card } from 'react-bootstrap';
import DashboardNav from '../Dashboard/DashboardNav';
import {
    PieChart,
    Pie,
    Tooltip,
    BarChart,
    XAxis,
    YAxis,
    Legend,
    CartesianGrid,
    Bar,
    ScatterChart,
    Scatter,
    ZAxis,
    
    AreaChart, Area,
    Sector, Cell,
    
  } from "recharts";



const DashboardContent = () => {
    const handleClick = () => {
        swal("15 days previous price: 10 taka", "Details about our goods!");
    }



      const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];

     



    return (
        <div className="content_width">
            <div className="container pt-5">
                {/* grip section */}
                <div className="row pt-5">
                    <div className="col-md-3">
                        <Card className=" grid-section grid-section1">
                            <Card.Body>
                                <Card.Title><i class="fas fa-user grid-icon"></i></Card.Title>
                                <Card.Subtitle className="mb-2 text-white grid-text">10368</Card.Subtitle>
                                <span className="grid_text">members online</span>
                                {/* <div className = "chart_all"> 
                                <PieChart  width={200} height={200}>
                                <Pie
                                 dataKey="sell"
                                isAnimationActive={false}
                                 data={data}
                                 cx={50}
                                     cy={50}
                                 outerRadius={50}
                                 fill="#8884d8"
                                 label
                                 />
                                  <Tooltip />
                                 </PieChart>
                                 </div>
                                <span className="grid_text">members online</span> */}
                            </Card.Body>
                        </Card>

                    </div>
                    <div className="col-md-3">
                        <Card className="grid-section grid-section2">
                            <Card.Body>
                                <Card.Title><i class="fas fa-shopping-cart grid-icon"></i></Card.Title>
                                <Card.Subtitle className="mb-2 text-white grid-text">10368</Card.Subtitle>
                                <span className="grid_text">items sold</span>
                                {/* <div className = "chart_all"> 
                                <ScatterChart
                                width={200}
                                height={200}
                                 margin={{
                                top: 20,
                                right: 20,
                                bottom: 20,
                                left: 20,
                                }}
                             >
                            <CartesianGrid />
                         <XAxis type="number" dataKey="x" name="stature" unit="cm" />
                        <YAxis type="number" dataKey="y" name="weight" unit="kg" />
                         <ZAxis type="number" range={[50]} />
                        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                        <Legend />
                        <Scatter name="A school" data={data01} fill="#8884d8" line shape="cross" />
                         <Scatter name="B school" data={data02} fill="#82ca9d" line shape="diamond" />
                        </ScatterChart>

                        </div> */}
                                {/* <span className="grid_text">items sold</span> */}
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-3">
                        <Card className="grid-section grid-section3">
                            <Card.Body>
                                <Card.Title><i class="far fa-calendar-plus grid-icon"></i></Card.Title>
                                <Card.Subtitle className="mb-2 text-white grid-text">10368</Card.Subtitle>
                                <span className="grid_text">this week</span>
                                {/* <div className = "chart_all"> 
                                <BarChart className = "chart_all"
                                width={200}
                                 height={200}
                                  data={data}
                                     barSize={20}>
                                     <XAxis
                                     dataKey="name"
                                     scale="point"
                                      padding={{ left: 20, right: 20 }}
                                         />
                                     <YAxis />
                                  <Tooltip />
                                 <Legend />
                                 <CartesianGrid strokeDasharray="3 3" />
                                  <Bar dataKey="sell" fill="#8884d8" background={{ fill: "#fff" }} />
                             </BarChart>
                             </div> */}
                                {/* <span className="grid_text">this week</span> */}
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-3">
                        <Card className="grid-section grid-section4">
                            <Card.Body>
                                <Card.Title><i class="fas fa-dollar-sign grid-icon"></i></Card.Title>
                                <Card.Subtitle className="mb-2 text-white grid-text">10368</Card.Subtitle>
                                <span className="grid_text">total earning</span>
                                {/* <div className = "chart_all"> 
                                <PieChart width={220} height={220}>
                                 <Pie
                                     dataKey="sell"
                                        startAngle={180}
                                         endAngle={0}
                                        data={data}
                                         cx="50%"
                                          cy="50%"
                                          outerRadius={80}
                                          fill="#8884d8"
                                          label
                                           />
                                         </PieChart>
                                         </div> */}
                                {/* <span className="grid_text">total earning</span> */}
                            </Card.Body>
                        </Card>
                    </div>
                </div>



                <div class="row pt-5">
<div class="col-lg-6">
<div class="au-card recent-report">
<div class="au-card-inner">
<h3 class="title-2">Previous reports</h3>
<div class="chart-info">
<div class="chart-info__left">
<div class="chart-note">
<span class="dot dot--blue"></span>
<span>products</span>
</div>
<div class="chart-note mr-0">
<span class="dot dot--green"></span>
<span>services</span>
</div>
</div>
<div class="chart-info__right">
<div class="chart-statis">
<span class="index incre">
<i class="zmdi zmdi-long-arrow-up"></i>25%</span>
<span class="label">products</span>
</div>
<div class="chart-statis mr-0">
<span class="index decre">
<i class="zmdi zmdi-long-arrow-down"></i>10%</span>
<span class="label">services</span>
</div>
</div>
</div>
{/* <div class="recent-report__chart"><div class="chartjs-size-monitor" style="position: absolute; inset: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;"><div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div></div>
<canvas id="recent-rep-chart" height="890" style="display: block; width: 693px; height: 445px;" width="1386" class="chartjs-render-monitor"></canvas>
</div> */}
<AreaChart
          width={480}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>


</div>
</div>
</div>


<div class="col-lg-6 ">
<div class="au-card recent-report">
<div class="au-card-inner">
<h3 class="title-2">Today reports</h3>
<div class="chart-info">
<div class="chart-info__left">
<div class="chart-note">
<span class="dot dot--blue"></span>
<span>products</span>
</div>
<div class="chart-note mr-0">
<span class="dot dot--green"></span>
<span>services</span>
</div>
</div>
<div class="chart-info__right">
<div class="chart-statis">
<span class="index incre">
<i class="zmdi zmdi-long-arrow-up"></i>35%</span>
<span class="label">products</span>
</div>
<div class="chart-statis mr-0">
<span class="index decre">
<i class="zmdi zmdi-long-arrow-down"></i>25%</span>
<span class="label">services</span>
</div>
</div>
</div>
{/* <div class="recent-report__chart"><div class="chartjs-size-monitor" style="position: absolute; inset: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;"><div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div></div>
<canvas id="recent-rep-chart" height="890" style="display: block; width: 693px; height: 445px;" width="1386" class="chartjs-render-monitor"></canvas>
</div> */}

<BarChart
          width={480}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" stackId="a" fill="#8884d8" />
          <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
        </BarChart>

</div>
</div>
</div>

</div>





                {/* product table */}
                <div className="row pt-5">
                    <div className="col-md-9 col-sm-7">
                        <h2>Product List</h2>
                        <div className="price_list table-responsive">
                            <Table striped hover size="sm" className="table-earning">
                                <thead >
                                    <tr>
                                        <th className="table-radius-left text-center">Date</th>
                                        <th className="text-center">Product Name</th>
                                        <th>Product Price</th>
                                        <th className="text-center">Stats</th>
                                        <th className="table-radius-right text-center">History</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>18-04-2021</td>
                                        <td className="text-center">Potato</td>
                                        <td className="text-center">30</td>
                                        <td className="text-center"><i class="fas fa-sort-up text-success"></i> +0.67%</td>
                                        <td onClick={handleClick}><span className="role member">More</span></td>
                                    </tr>
                                    <tr>
                                        <td>18-04-2021</td>
                                        <td className="text-center">Tomato</td>
                                        <td className="text-center">20</td>
                                        <td className="text-center"><i class="fas fa-sort-up text-success"></i> +0.75%</td>
                                        <td onClick={handleClick}><span className="role member">More</span></td>
                                    </tr>
                                    <tr>
                                        <td>18-04-2021</td>
                                        <td className="text-center">Cucumber</td>
                                        <td className="text-center">60</td>
                                        <td className="text-center"><i class="fas fa-sort-down text-danger"></i> -0.05%</td>
                                        <td onClick={handleClick}><span className="role member">More</span></td>
                                    </tr>
                                    <tr>
                                        <td>18-04-2021</td>
                                        <td className="text-center">Carrot</td>
                                        <td className="text-center">80</td>
                                        <td className="text-center"><i class="fas fa-sort-down text-danger"></i>-1.19%</td>
                                        <td onClick={handleClick}><span className="role member">More</span></td>
                                    </tr>
                                    <tr>
                                        <td>18-04-2021</td>
                                        <td className="text-center">Onion</td>
                                        <td className="text-center">40</td>
                                        <td className="text-center"><i class="fas fa-sort-down text-danger"></i>-0.22%</td>
                                        <td onClick={handleClick}><span className="role member">More</span></td>
                                    </tr>
                                    <tr>
                                        <td>18-04-2021</td>
                                        <td className="text-center">Chilli</td>
                                        <td className="text-center">80</td>
                                        <td className="text-center"><i class="fas fa-sort-down text-danger"></i>-0.25%</td>
                                        <td onClick={handleClick}><span className="role member">More</span></td>
                                    </tr>
                                    <tr>
                                        <td>18-04-2021</td>
                                        <td className="text-center">Garlic</td>
                                        <td className="text-center">100</td>
                                        <td className="text-center"><i class="fas fa-sort-down text-danger"></i>-0.75%</td>
                                        <td onClick={handleClick}><span className="role member">More</span></td>
                                    </tr>
                                    <tr>
                                        <td>18-04-2021</td>
                                        <td className="text-center">Ginger</td>
                                        <td className="text-center">80</td>
                                        <td className="text-center"><i class="fas fa-sort-up text-success"></i>+0.19%</td>
                                        <td onClick={handleClick}><span className="role member">More</span></td>
                                    </tr>
                                    <tr>
                                        <td>18-04-2021</td>
                                        <td className="text-center">Red Spinach</td>
                                        <td className="text-center">10</td>
                                        <td className="text-center"><i class="fas fa-sort-up text-success"></i>+0.75%</td>
                                        <td onClick={handleClick}><span className="role member">More</span></td>
                                    </tr>
                                    <tr>
                                        <td>18-04-2021</td>
                                        <td className="text-center">Potatoes</td>
                                        <td className="text-center">25</td>
                                        <td className="text-center"><i class="fas fa-sort-up text-success"></i>+0.75%</td>
                                        <td onClick={handleClick}><span className="role member">More</span></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-5">
                        <h2 className="text-center">Top Selling</h2>
                        <div className="au-card table-responsive au-card--bg-blue au-card-top-countries earn_table">
                            <Table size="sm" className="table-earning table_earning_data">
                                <tbody>
                                    <tr className="selling-table">
                                        <td>Green Capsicum</td>
                                        <td>100</td>
                                    </tr>
                                    <tr>
                                        <td>Onion</td>
                                        <td>20</td>
                                    </tr>
                                    <tr>
                                        <td>Lemon</td>
                                        <td>40</td>
                                    </tr>
                                    <tr>
                                        <td>Cucumber</td>
                                        <td>60</td>
                                    </tr>
                                    <tr>
                                        <td>Potato</td>
                                        <td>25</td>
                                    </tr>
                                    <tr>
                                        <td>Ginger</td>
                                        <td>120</td>
                                    </tr>
                                    <tr>
                                        <td>Yellow Lemon</td>
                                        <td>100</td>
                                    </tr>
                                    <tr>
                                        <td>Chili</td>
                                        <td>120</td>
                                    </tr>
                                    <tr>
                                        <td>Oregano</td>
                                        <td>200</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardContent;