import React,{ useState } from 'react';

// stylesheet
import './Timeout.scss';

function Timeout() {

    // setting the state in boolean datatype
    const[ successModel, setSuccessModel ] = useState(false);
    const[ infoModel, setInfoModel ] = useState(false);
    const[ errorModel, setErrorModel ] = useState(false);
    const[ warningModel, setWarningModel ] = useState(false);

    // Each function get triggered when click event is done
    const Success = () => {
        // onClick the state will changes to true and the modal will shown in the screen
        setSuccessModel(true);

        // The timer is used to change the modal state to false after 2s and hide from the screen
        const timer = setTimeout(() => { setSuccessModel(false) }, 2000)
        return () => clearTimeout(timer);
    }
    const info = () => {
        setInfoModel(true);
        const timer = setTimeout(() => { setInfoModel(false) }, 2000)
        return () => clearTimeout(timer);
    }
    const error = () => {
        setErrorModel(true);
        const timer = setTimeout(() => { setErrorModel(false) }, 2000)
        return () => clearTimeout(timer);
    }
    const warning = () => {
        setWarningModel(true);
        const timer = setTimeout(() => { setWarningModel(false) }, 2000)
        return () => clearTimeout(timer);
    }

  return (
    <>
    <div className='timeout_container'>
        {/* click event to trigger the function */}
        <button type='submit' onClick={Success}>success</button>
        <button type='submit' onClick={info}>info</button>
        <button type='submit' onClick={error}>error</button>
        <button type='submit' onClick={warning}>warning</button>
    </div>

    {/* Based on the state change, the classname get changes */}
    <div className={ successModel ? 'success active-alert' : 'not-active-alert' }>
        <div className='detials'>
            <p className='title'>Success !</p>
            <p>Form has been submitted successfully.</p>
        </div>
        <div className='close-handle'>
            {/* click event t0 set the state to false and close the alert */}
            <p onClick={() => setSuccessModel(false)}>X</p>
        </div>
    </div>
    <div className={ infoModel ? 'info active-alert' : 'not-active-alert' }>
        <div className='detials'>
            <p className='title'>Information !</p>
            <p>Please fill out the form correctly.</p>
        </div>
        <div className='close-handle'>
            <p onClick={() => setSuccessModel(false)}>X</p>
        </div>
    </div>
    <div className={ errorModel ? 'error active-alert' : 'not-active-alert' }>
        <div className='detials'>
            <p className='title'>Error !</p>
            <p>An error occured during submission.</p>
        </div>
        <div className='close-handle'>
            <p onClick={() => setSuccessModel(false)}>X</p>
        </div>
    </div>
    <div className={ warningModel ? 'warn active-alert' : 'not-active-alert' }>
        <div className='detials'>
            <p className='title'>Warning !</p>
            <p>There was a network error.</p>
        </div>
        <div className='close-handle'>
            <p onClick={() => setSuccessModel(false)}>X</p>
        </div>
    </div>
    </>
  )
}

export default Timeout