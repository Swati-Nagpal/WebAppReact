import { Component } from 'react';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: 0
        };
    }

    renderDashboard() {
        return (
        
        <div>
            
            <div className="container card w-25 p-3" style={{ width: "18rem" }}>

                <div className="card-body">
                    <p className="card-text">Users</p>
                </div>
                <label>10</label>

            </div>
        </div>);
    }
    render() {
        return (
            <div>
                <header className='md-col-3'>
                    <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white">
                        <div className="position-sticky">
                            <div className="list-group list-group-flush mx-3 mt-4">
                                <a href="/dashboard" className="list-group-item list-group-item-action py-2 ripple" aria-current="true">
                                    <i className="fas fa-tachometer-alt fa-fw me-3"></i><span>Main dashboard</span>
                                </a>
                                <a href="/usermgmt" className="list-group-item list-group-item-action py-2 ripple active">
                                    <i className="fas fa-chart-area fa-fw me-3"></i><span>User Management</span>
                                </a>
                            </div>
                        </div>
                    </nav>
                </header>
                <h3>Dashboard</h3>
                {this.renderDashboard()}
             </div>
                
        );
    }
}