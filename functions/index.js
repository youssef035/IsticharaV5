const functions = require('firebase-functions');
const stripe = require('stripe')('sk_test_51L9GCwEQFTf9CcGT9252OGUfSjrIsAwewBqTQQE5uCvyFmSE4UJLEUi2xODk9FOQHb1bXztW06mH2QIpjgeaufIf00EXs2rtCz');

exports.createPaymentIntent = functions.https.onRequest(async (req, res) => {
  // Enable CORS
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET, POST');
  res.set('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.end();
    return;
  }

  try {
    const { amount } = req.body;
    if (!amount) {
      res.status(400).json({ error: 'Missing required param: amount.' });
      return;
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount, // Amount in cents
      currency: 'usd',
      // Add any other necessary parameters
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
