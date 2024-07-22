import React from "react";

const page = () => {
  return (
    <>
      <div className="container mx-auto max-w-6xl ">
        <h1 className="font-semibold md:text-3xl md:p-5 p-2">Refund Policy</h1>
        <p className="md:p-5 p-2">
          You have the right to cancel an order by contacting the relevant store
          under the following conditions:
        </p>
        <h1 className="font-semibold md:text-3xl md:p-5 p-2">
          Advance Orders:
        </h1>
        <p className="md:p-5 p-2">
          For orders placed more than one day before the requested delivery
          date, you can cancel up to one day before the scheduled delivery.
        </p>
        <h1 className="font-semibold md:text-3xl md:p-5 p-2">
          Same Day Orders and Deliveries:
        </h1>
        <p className="md:p-5 p-2">
          For orders placed for same-day delivery, you can cancel within a
          reasonable time before food preparation begins.
        </p>
        <p className="md:p-5 p-2">
          If you wish to cancel an order after food preparation has started, the
          Franchisee may, at their sole discretion, charge you the full price of
          the order, and no refund will be issued.
        </p>
        <p className="md:p-5 p-2">
          In the event that the Franchisee needs to cancel your order after
          acceptance, they will notify you promptly. Both we and our Franchisees
          reserve the right to cancel any order, before or after acceptance, and
          will inform you immediately of such cancellations.
        </p>
        <p className="md:p-5 p-2">
          You will not be charged for any orders canceled by us or our
          Franchisees. Any payments made prior to cancellation will typically be
          reimbursed within 2-5 working days using the same payment method used
          for the original purchase.
        </p>
      </div>
    </>
  );
};

export default page;
