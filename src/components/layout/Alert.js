import React from 'react'

export const Alert = ({ alert }) => {
    return (
        alert !== null && (
            <div className={`alert alert-${alert.type}`}>
                <ion-icon name="information-circle-outline"></ion-icon> {alert.msg}
            </div>
        )
    )
}

export default Alert;
