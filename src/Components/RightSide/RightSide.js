import React, { useState } from 'react'
import "./RightSide.css"
import { ProgressBar } from 'react-bootstrap'
import ProgressBars from 'react-customizable-progressbar'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Area, Label } from 'recharts';
import weatherData from '../WeatherData';


const RightSide = () => {

    const [detail, setDetail] = useState(weatherData[0]);
    console.log(weatherData.slice(0,1));

    // for graph

    const data = [
        { time: '00:00', percentage: 40 },
        { time: '03:00', percentage: 50 },
        { time: '06:00', percentage: 70 },
        { time: '09:00', percentage: 40 },
        { time: '10:00', percentage: 30 },
        // ...add more data points here
    ];

    return (
        <div className='rightSide'>

            <div className="rightTop">
                <div className="name">
                    <h4>Welcome back shabbeer!</h4>
                    <p>Check out today's weather informatio</p>
                </div>
                <div className="profilemore">
                    <div className="drawar">
                        <span class="material-icons">
                            more_horiz
                        </span>
                    </div>
                    <div className="profile">
                        <span class="material-icons">
                            person
                        </span>
                    </div>
                </div>
            </div>
            <div className="UpcomingHours">
                <div className="hoursHead">
                    <div className="hoursTitles">
                        <p>Upcoming hours</p>
                    </div>
                    <div className="ppDrawer">
                        <div className="hours-precipitaion">
                            <p>Run precipitaion</p>
                        </div>
                        <div className="nextDay">
                            <p>next day</p>
                        </div>
                    </div>
                </div>
                <div className="weatherChart">
                    <LineChart width={600} height={200} data={data} margin={{ top: 20, right: 40, left: -30, bottom: 5 }}>
                        <CartesianGrid vertical={true} horizontal={false} />
                        <XAxis dataKey="time" tickLine={false} />
                        <YAxis ticks={[0, data[0].percentage]} tickLine={false} />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="percentage" stroke="#17a7ac" activeDot={{ r: 8 }} />
                        <Area type="monotone" dataKey="percentage" fill="#17a7ac" fillOpacity={0.3} />
                    </LineChart>

                </div>
            </div>
            {weatherData.slice(0,1).map((item, index) => {
                return (
                    <div className="moreDetail-card" key={item.id[0]}>
                        <h5>More details of today's weather</h5>
                        <div className="moreDetails">
                            <div className="detail-card">
                                <div className="card-title">
                                    <p>Humidity</p>
                                    <span class="material-icons">
                                        water_drop
                                    </span>
                                </div>
                                <div className="skill-box">
                                    <span className="title">{item.humidity}%</span>
                                    <ProgressBar now={item.humidity} />
                                </div>
                            </div>
                            <div className="detail-card">
                                <div className="card-title">
                                    <p>wind</p>
                                    <span class="material-icons">
                                        air
                                    </span>
                                </div>
                                <ProgressBars
                                    radius={40}
                                    progress={item.wind}
                                    cut={180}
                                    rotate={180}
                                    strokeWidth={9}
                                    strokeColor="#17a7ac"
                                    strokeLinecap="round"
                                    trackStrokeWidth={8}
                                    trackStrokeColor="#e6e6e6"
                                    trackStrokeLinecap="round"
                                    pointerRadius={0}
                                    initialAnimation={true}
                                    transition="0.3s"
                                    trackTransition="0s ease"
                                >
                                    <div className="indicator-volume">
                                        <div className="inner">
                                            <div className="percentage">{item.wind}km/h</div>
                                        </div>
                                    </div>
                                </ProgressBars>
                            </div>
                            <div className="detail-card">
                                <div className="card-title">
                                    <p>precipitatione</p>
                                    <span class="material-icons">
                                        thunderstorm
                                    </span>
                                </div>
                                <div className="skill-box">
                                    <span className="title">{item.precipitation}cm </span>
                                    <ProgressBar now={item.precipitation} />
                                </div>
                            </div>
                            <div className="detail-card">
                                <div className="card-title">
                                    <p>UV Index</p>
                                    <span class="material-icons">
                                        wb_sunny
                                    </span>
                                </div>
                                <div className="skill-box">
                                    <span className="title">{item.uv} </span>
                                    <ProgressBar now={item.uv} />
                                </div>
                            </div>
                            <div className="detail-card">
                                <div className="card-title">
                                    <p>Feels like</p>
                                    <span class="material-icons">
                                        thermostat
                                    </span>
                                </div>
                                <div className="skill-box">
                                    <span className="title">{item.feels}%</span>
                                    <ProgressBar now={item.feels} />
                                </div>
                            </div>
                            <div className="detail-card">
                                <div className="card-title">
                                    <p>Chance of rain</p>
                                    <span class="material-icons">
                                        <span class="material-icons-outlined">
                                            cloud_queue
                                        </span>
                                    </span>
                                </div>
                                <div className="skill-box">
                                    <span className="title">{item.chances}% </span>
                                    <ProgressBar now={item.chances} />
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default RightSide
