import sql from '../services/Db/db.js'
export default class Payment {
    construcor(){  }
    
  placeOrder = (req) => {
    return new Promise((resolve) => {
      let data = req.body;
      let timeStamp = new Date().toISOString().slice(0, 19).replace("T", " ");
      let orderDataValues = "";
      let productQuantityUpdateQuery = "";
      let amount = 0;
      for (let i = 0; i < data.products.length; i++) {
        let productId = data.products[i].id;
        let productPrice = data.products[i].price;
        let productQuantity = data.products[i].quantity;

        amount += productPrice * productQuantity;

        orderDataValues += `(@order_id, ${productId}, ${productPrice}, ${productQuantity},"${timeStamp}", "${timeStamp}"),`;
        productQuantityUpdateQuery += `UPDATE products SET quantity = quantity - ${productQuantity} WHERE id = ${productId};`;
      }
      orderDataValues = orderDataValues.slice(0, -1);
      let command = `INSERT INTO orders (status, customer_id, created_at, modified_at,total_amount) VALUES ("pending", ${data.customer_id}, "${timeStamp}", "${timeStamp}","${amount}");
      SET @order_id = LAST_INSERT_ID();
      INSERT INTO order_details (order_id, product_id, price, quantity, created_at, modified_at) VALUES ${orderDataValues};
      ${productQuantityUpdateQuery}
      CALL fundTransfer(${amount},@order_id,${})`;

      sql.query(command, (err, rows, fields) => {
        if (err) {
          console.log(err);
          resolve({ error: "Unable to place order." });
        } 
         
      
      });
      
    });
    
  };

    
}