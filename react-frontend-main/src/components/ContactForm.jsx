import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faPhone, faEnvelopeSquare, faPencilAlt} from '@fortawesome/free-solid-svg-icons'


function Form() {
    
    const userIcon = <FontAwesomeIcon icon={faUser} />
    const phoneIcon = <FontAwesomeIcon icon={faPhone} />
    const envelopeIcon = <FontAwesomeIcon icon={faEnvelopeSquare} />
    const pencilIcon = <FontAwesomeIcon icon={faPencilAlt} />

    return (
        <div className='formContact'>
            <h1>Contact Form</h1>
            <form className="formSheet">
                <div className="input">
                    <input type="text" className="inputField" name="Name" required />
                    <label htmlFor="name" className="labelField">{userIcon} Name</label>
                </div>
                <div className="input">
                    <input type="text" className="inputField" name="Phone Number" required />
                    <label htmlFor="number" className="labelField">{phoneIcon} Phone Number</label>
                </div>
                <div className="input">
                    <input type="email" className="inputField" name="E-mail" required />
                    <label htmlFor="email" className="labelField">{envelopeIcon} E-mail</label>
                </div>
                <div className="input">
                    <textarea className="inputField" rows="8" name="Message" required></textarea>
                    <label htmlFor="message" className="labelField">{pencilIcon} Message</label>
                </div>
                <button type="submit" className="formButton"> Submit</button>
            </form>
        </div>
    )
}

export default Form