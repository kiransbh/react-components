import useHeight from '../Hook/useHeight';

// stylesheet
import './ScrollIndicator.scss';

function ScrollIndicator() {

    const { scrollPercentage } = useHeight();

  return (
    <div className='scrollIndicator_container' style={{ width: `${ scrollPercentage }%` }}></div>
  )
}

export default ScrollIndicator