import './TimelineEvent.css';
import PropTypes from 'prop-types';
import Timestamp from './Timestamp';


const TimelineEvent = ({person, time, status}) => {
    return(
        <section className="timeline-event">
            <h4 className="event-person">{person}</h4>
            <p className="event-time"><Timestamp time={time} /></p>
            <p className="event-status">{status}</p>
        </section>
    );
};

TimelineEvent.propTypes = {
    person: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired
};

export default TimelineEvent;