import './Timeline.css';
import PropTypes from 'prop-types';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
    
    const events = props.data.events

    const timelineEvents = events.map((event, index) => {
        return (
            <TimelineEvent key={index} person={event.person} status={event.status} time={event.timestamp}/>
        )
    })
    return(
        <section className="timeline">
            {timelineEvents}
        </section>
    )
};

Timeline.propTypes = {
    data: PropTypes.shape({
        person: PropTypes.string.isRequired,
        events: PropTypes.arrayOf(PropTypes.shape({
                person: PropTypes.string.isRequired,
                status: PropTypes.string.isRequired,
                timestamp: PropTypes.string.isRequired
        })).isRequired
    })
};

export default Timeline;