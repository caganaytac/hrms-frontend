import React, { useEffect } from 'react'

export default function ConfirmEmail({email}) {
    useEffect(() => {
        document.title = "Confirm your account • HRMS";
    }, [])
    return (
        <div>
            <h1>Confirmation email sent  to your email address.</h1>
        </div>
    )
}
