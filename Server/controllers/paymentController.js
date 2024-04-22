// import { instance } from "../server.js"

// export const checkout = async (req, res) =>{

//     const options = {
//         amount: 40000,
//         currency: "INR",
//         receipt: "Order_receipt_11"
//     };
//     const order = await instance.orders.create(options);

//     console.log(order);
//     res.status(200).json({
//         success: true
//     })
// };


import { instance } from "../server.js";

export const checkout = async (req, res) => {
    try {
        const options = {
            amount: 40000,
            currency: "INR",
            receipt: "Order_receipt_11"
        };
        const order = await instance.orders.create(options);

        console.log(order);
        
        // Assuming order creation is successful, send a success response
        res.status(200).json({
            success: true,
            order: order // Optionally, you can send the order details in the response
        });
    } catch (error) {
        // If there's an error during order creation, handle it gracefully
        console.error("Error creating order:", error);
        res.status(500).json({
            success: false,
            message: "An error occurred while processing the order."
        });
    }
};
