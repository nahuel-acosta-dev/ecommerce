import {Button} from 'react-bootstrap';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import toast, { Toaster } from 'react-hot-toast';
const Paypal = ({total, process_payment, nonce,
    shipping_id,
    full_name,
    address_line_1,
    address_line_2,
    city,
    state_province_region,
    postal_zip_code,
    country_region,
    telephone_number}) => {

    return (
        <PayPalScriptProvider options={{ "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID}}>
            <Toaster />
            <PayPalButtons style={{ layout: "horizontal" }} 
            createOrder={(data, actions) => {
                return actions.order.create({
                    purchase_units: [{
                        amount: {
                            value: total,
                        }
                    }
                    ]
                })
            }}
            onApprove={(data, actions) => {
                return actions.order.capture().then( async (details) => {
                    console.log('estamos aca')
                    const result = await process_payment(
                        process_payment(
                            nonce,
                            shipping_id,
                            '',
                            full_name,
                            address_line_1,
                            address_line_2,
                            city,
                            state_province_region,
                            postal_zip_code,
                            country_region,
                            telephone_number
                        )
                    );
                    console.log(result)
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