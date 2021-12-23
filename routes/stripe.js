const { default: Stripe } = require("stripe");

const router = require("express").Router();
const stipe = require("stripe")(process.env.STRIPE_KEY);

router.post("/payment", (req, res) => {
  stipe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(500).json(stripeRes);
      }
    }
  );
});

module.exports = router;
