import {Button} from 'react-bootstrap';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import toast, { Toaster } from 'react-hot-toast';
const Paypal = () => {

    return (
        <PayPalScriptProvider options={{ "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID }}>
            <Toaster />
            <PayPalButtons style={{ layout: "horizontal" }} 
            createOrder={(data, actions) => {
                return actions.order.create({
                    purchase_units: [{
                        amount: {
                            value: "10.0",
                        }
                    }
                    ]
                })
            }}
            onApprove={(data, actions) => {
                return actions.order.capture().then(details => {
                    toast.success("Payment completed. Thank you!" + details.payer.name.given_name)
                })
            }}
            onCancel={ () => {
                toast("You cancelled the payment.", {
                    duration: 10000
                })
            }}
            onError={ () => {
                toast("There was an error with you method payment. try again", {
                    duration: 10000
                })
            }}
            />
        </PayPalScriptProvider>
    )
}

export default Paypal;