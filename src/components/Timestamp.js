import moment from 'moment';
import PropTypes from 'prop-types';


const Timestamp = (props) => {
    const time = moment(props.time);
    const absolute = time.format('MMMM Do YYYY, h:mm:ss a');
    const relative = time.fromNow();

    return <span title={absolute}>{relative}</span>;
};

Timestamp.propTypes = {
    time: PropTypes.string.isRequired
};

export default Timestamp;