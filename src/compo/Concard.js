import React from 'react'
import './concard.css'
export default function Concard(props) {
    return (
        <>
            <div className="card-container">
                <div className="content">
                    <div className="card-name">{props.con.name}</div>
                    <div className="card-body">{props.con.email}</div>
                </div>

                <div className="card-logo">❌</div>
            </div>
        </>
    )
}
