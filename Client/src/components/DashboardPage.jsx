import React from 'react'
import '../styles/DashboardPage.css'
import Graph1 from '../components/Graph1'
import Graph2 from '../components/Graph2'
import NewReg from '../components/NewReg'
import { MdAppRegistration } from 'react-icons/md'
import { FiUsers } from 'react-icons/fi'
import { FaChalkboardTeacher } from 'react-icons/fa'
import { MdAttachMoney } from 'react-icons/md'

function DashboardPage() {
    return (
        <section className="dashboard">
            <div className="cards">
                <div className="card">
                    <div className="card-info">
                        <div className="number">
                            12
                        </div>
                        <div className="title">
                            Registration
                        </div>
                    </div>
                    <MdAppRegistration />
                </div>
                <div className="card">
                    <div className="card-info">
                        <div className="number">
                            351
                        </div>
                        <div className="title">
                            Students
                        </div>
                    </div>
                    <FiUsers />
                </div>
                <div className="card">
                    <div className="card-info">
                        <div className="number">
                            23
                        </div>
                        <div className="title">
                            Teachers
                        </div>
                    </div>
                    <FaChalkboardTeacher />
                </div>
                <div className="card">
                    <div className="card-info">
                        <div className="number">
                            $682.25
                        </div>
                        <div className="title">
                            Incomes
                        </div>
                    </div>
                    <MdAttachMoney />
                </div>
            </div>
            <div className="graph-container">
                <div className="graph1">
                    <div className="graph-info">
                        <div className="divider"></div>
                        <div className="title">
                            Revenue
                        </div>
                        <div className="text">
                            Lorem ipsum dolor sit amet.
                        </div>
                    </div>
                    <Graph1 />
                </div>
                <div className="graph2">
                    <div className="graph-info">
                        <div className="divider"></div>
                        <div className="title">
                            Incomes
                        </div>
                        <div className="text">
                            Lorem ipsum dolor sit amet.
                        </div>
                    </div>
                    <Graph2 />
                </div>
            </div>
            <div className="table-container">
                <div className="table-info">
                    <div className="divider"></div>
                    <div className="title">
                        Recent  Registration
                    </div>
                    <div className="text">
                        Lorem ipsum dolor
                    </div>
                </div>
                <NewReg/>
            </div>
        </section>
    )
}

export default DashboardPage
