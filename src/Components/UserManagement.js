import { Component } from 'react';

export default class UserManagement extends Component {
    constructor(props) {
        super(props);

    }

    renderUsers() {
        if (!this.props.users) { 
            return (
                <tr>
                    <td colSpan="7">Fetching trades...</td>
                </tr>
            ); 
        }

       return null;
        // return _.map(this.props.users, user => {
        //     return (
        //         <tr key={user._id} 
        //             style= { this.props.selecteduser._id == user._id ? { background: 'lightgray'} : null }
        //             onClick = { event => this.props.selectuser(user) }>
        //             <td>{user.name}</td>
        //             <td>{user.email}</td>
        //         </tr>
        //     );
        // });
    }


    render() {
        return (
            <div>
                <h3 className='container'>UserManagement</h3>
                <div id="listOfUsers">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>User</th>
                                <th>Email address</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderUsers()}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}