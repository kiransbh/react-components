// stylesheet
import './Continues.scss';

// dummy data
import { data } from './data';

function Continues() {
  return (
    <>
    <div className='continues_slide_container_a'>
        <div className='slide_track'>
            {
                data.map((dummy, index) => {
                    return (
                        <div className='slide'></div>
                    )
                })
            }
        </div>
    </div>
    <div className='continues_slide_container_b'>
        <div className='slide_track'>
            {
                data.map((dummy, index) => {
                    return (
                        <div className='slide'></div>
                    )
                })
            }
        </div>
    </div>
    </>
  )
}

export default Continues