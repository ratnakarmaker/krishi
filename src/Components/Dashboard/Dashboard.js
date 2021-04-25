import React from 'react';
import DashboardContent from '../MainDashboard/DashboardContent';
import DashboardMenu from './dashboardMenu';
import DashboardNav from './DashboardNav';
import './Dashboard.css';
import SimpleForm from '../ChatBot/Chatbot';


const Dashboard = () => {
    return (
        <div>
            <div className="row w-100">
                <DashboardNav />
            </div>
            <div className="row w-100">
                <div className="dash_menu">
                    <DashboardMenu />
                </div>
                <div className="dash_content">
                    <DashboardContent />
                </div>
            </div>
            <SimpleForm />
        </div>
    );
};

export default Dashboard;