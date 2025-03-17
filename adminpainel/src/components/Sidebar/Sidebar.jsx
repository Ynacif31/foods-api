import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
return (
    <div className="border-end bg-white" id="sidebar-wrapper">
    <div className="sidebar-heading border-bottom bg-light">Start Bootstrap</div>
    <div className="list-group list-group-flush">
    <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/add">AddFood</Link>
    <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/list-food">ListFood</Link>
    <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/orders">Orders</Link>
    </div>
</div>
)
}

export default Sidebar;