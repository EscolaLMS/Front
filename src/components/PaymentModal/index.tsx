import React, { ReactElement, useMemo, useState } from 'react';
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from '@stripe/react-stripe-js';
import { Spinner } from 'reactstrap';

// import "./index.scss";

const useOptions = () => {
  const options = useMemo(
    () => ({
      style: {
        base: {
          iconColor: '#c4f0ff',
          color: '#000000',
          fontWeight: 500,
          fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
          fontSize: '16px',
          fontSmoothing: 'antialiased',
          ':-webkit-autofill': {
            color: '#000000',
          },
          '::placeholder': {
            color: '#999999',
          },
        },
        invalid: {
          color: '#ff0000',
        },
      },
    }),
    [],
  );

  return options;
};

const PaymentModal: React.FC<{
  active: boolean;
  total: string;
  onClose?: () => void;
  onPaymentId: (paymentId: string) => void;
}> = ({ active, onClose, onPaymentId, total }): ReactElement => {
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();
  const [error, setError] = useState<string | undefined>(undefined);
  const [processing, setProcessing] = useState(false);

  const [billingDetails, setBillingDetails] = useState({
    name: '',
  });

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    setError(undefined);
    if (!billingDetails.name) {
      setError('Card holder can not be empty.');
    }

    if (!stripe || !elements || !billingDetails.name) {
      return;
    }

    const cardNumber = elements.getElement(CardNumberElement);
    cardNumber && setProcessing(true);
    cardNumber &&
      stripe
        .createPaymentMethod({
          type: 'card',
          card: cardNumber,
          billing_details: billingDetails,
        })
        .then((res) => {
          if (res.error) {
            setError(res.error.message);
            setProcessing(false);
          } else {
            setError(undefined);
            onPaymentId(res?.paymentMethod?.id);
            setTimeout(() => {
              setProcessing(false);
            }, 3000);
          }
        })
        .catch((error) => {
          setProcessing(false);
          setError(error);
        });
  };

  return (
    <div
      className={`modal fade ${active ? 'show' : ''} paymentModal`}
      id="exampleModalCenter"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">
              Pay <strong>{total}</strong> with Stripe
            </h5>
            <button type="button" className="close" onClick={onClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form className="profile-form" onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="card-number">Card number</label>
                <CardNumberElement options={options} className="form-control" />
              </div>

              <div className="form-group">
                <label htmlFor="card_holder">Name on card</label>
                <input
                  className="form-control"
                  id="card_holder"
                  name="card_holder"
                  type="text"
                  placeholder="Name"
                  onChange={(e) =>
                    setBillingDetails({
                      ...billingDetails,
                      name: e.currentTarget.value,
                    })
                  }
                  value={billingDetails.name}
                />
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="card_expiry">Expiration date</label>
                  <CardExpiryElement options={options} className="form-control" />
                </div>

                <div className="form-group col-md-6">
                  <label htmlFor="card_cvc">CVC</label>
                  <CardCvcElement options={options} className="form-control" />
                </div>

                {error && (
                  <div className="alert alert-danger" role="alert">
                    {error}
                  </div>
                )}
                <div className="alert alert-info">
                  Use{' '}
                  <a href="https://stripe.com/docs/testing" target="_blank" rel="noreferrer">
                    stripe testing card numbers
                  </a>
                  , eg <code>4242 4242 4242 4242</code>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="default-btn close-btn"
                onClick={onClose}
                disabled={processing}
              >
                Close
              </button>

              <button className="default-btn" type="submit" disabled={processing}>
                Pay {total}! {processing && <Spinner color="success" />}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
