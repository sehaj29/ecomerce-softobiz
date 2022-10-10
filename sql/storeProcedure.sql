CREATE DEFINER = `root` @`localhost` PROCEDURE `OrderPayment`(
    amount float,
    account_to VARCHAR(50),
    account_from VARCHAR(50),
    timestamp DATETIME,
    order_id varchar(200)
) BEGIN
DECLARE EXIT HANDLER FOR SQLEXCEPTION BEGIN ROLLBACK;
END;
START TRANSACTION;
INSERT INTO transactions (to_account, from_account, amount, created_at)
VALUES (account_to, account_from, amount, timestamp);
UPDATE accounts
SET balance = balance - amount
WHERE account_number = account_from;
UPDATE accounts
SET balance = balance + amount
WHERE account_number = account_to;
UPDATE orders
SET status = success
WHERE  order_id= order_id;


COMMIT;
END 
