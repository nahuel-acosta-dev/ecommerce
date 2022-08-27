import {Alert} from 'react-bootstrap';
import {connect} from 'react-redux';

const CustomAlert = ({alert}) => {
    const displayAlert = () => {
        if ( alert !== null ) {
            return(
            <Alert variant={`${alert.alertType}`}>
                {alert.msg}
            </Alert>)
        }
        else{
            return( <></>)
        }
    }
    
    return(
        <div className="alert">
            {displayAlert()}
        </div>
    )
}

const mapStateToProps = (state) => ({
    alert: state.Alert.alert
})

export default connect(mapStateToProps)(CustomAlert);