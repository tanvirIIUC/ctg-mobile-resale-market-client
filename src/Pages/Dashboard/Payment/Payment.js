import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51M8e0UDNufLjOjDnRyD0wVnKMM0rxWSIMCqw09tjGw1AkW8fCddXUt4o2eW1p7ACRP1gn3xDatLCJU4PAq8ziuXV00PrYL3S9e');
console.log(stripePromise)
const Payment = () => {
    const booking = useLoaderData();
    const { mobileName, price, email, buyer } = booking;
    console.log(booking)
    return (
        <div className='my-10'>
            <h1 className='text-2xl font-bold'>Payment for {mobileName} </h1>
            <p>Price : ${price}</p>
            <p>Email : {email}</p>
            <p>Buyer : {buyer}</p>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm 
                    booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;