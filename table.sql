SELECT
    CASE
        WHEN b.rec_date = current_date - 2 THEN 'T-2'
        WHEN b.rec_date = current_date - 1 THEN 'T-1'
        WHEN CAST(b.rcre_time AS TIME) BETWEEN '00:00:00.000' AND '04:00:00.000' AND b.rec_date = current_date THEN '00-04'
        WHEN CAST(b.rcre_time AS TIME) BETWEEN '04:00:00.001' AND '08:00:00.000' AND b.rec_date = current_date THEN '04-08'
        WHEN CAST(b.rcre_time AS TIME) BETWEEN '08:00:00.001' AND '10:00:00.000' AND b.rec_date = current_date THEN '08-10'
        WHEN CAST(b.rcre_time AS TIME) BETWEEN '10:00:00.001' AND '12:00:00.000' AND b.rec_date = current_date THEN '10-12'
        WHEN CAST(b.rcre_time AS TIME) BETWEEN '12:00:00.001' AND '14:00:00.000' AND b.rec_date = current_date THEN '12-14'
        WHEN CAST(b.rcre_time AS TIME) BETWEEN '14:00:00.001' AND '16:00:00.000' AND b.rec_date = current_date THEN '14-16'
        WHEN CAST(b.rcre_time AS TIME) BETWEEN '16:00:00.001' AND '18:00:00.000' AND b.rec_date = current_date THEN '16-18'
        WHEN CAST(b.rcre_time AS TIME) BETWEEN '18:00:00.001' AND '20:00:00.000' AND b.rec_date = current_date THEN '18-20'
        WHEN (CAST(b.rcre_time AS TIME) BETWEEN '20:00:00.001' AND '23:59:59.999' OR CAST(b.rcre_time AS TIME) BETWEEN '00:00:00.000' AND '00:00:00.000') AND b.rec_date = current_date THEN '20-00'
    END AS time_alias,
    (SELECT bank_name FROM bank_details_table WHERE bank_id = debtor_agent) AS Bank,
    SUM(batch_count) AS "Count",
    SUM(batch_amount)
FROM
    cips_batch_detail_table b
INNER JOIN
    cips_transaction_detail_table t ON t.batch_id = b.id
WHERE
    b.rec_date BETWEEN current_date - 2 AND current_date
    AND b.rcre_user_id IN (SELECT user_id FROM api_user_table WHERE apiuser_type = 'MB' AND entity_cre_flg = 'Y')
    AND b.debit_status = '000'
GROUP BY
    time_alias,
    b.rcre_user_id,
    Bank;







-- Part 1: T-2
WITH T2Data AS (
    SELECT
        (SELECT bank_name FROM bank_details_table WHERE bank_id = debtor_agent) AS Bank,
        SUM(batch_count) AS "Count",
        SUM(batch_amount) AS TotalAmount
    FROM
        cips_batch_detail_table b
    INNER JOIN
        cips_transaction_detail_table t ON t.batch_id = b.id
    WHERE
        b.rec_date = current_date - 2
        AND b.rcre_user_id IN (SELECT user_id FROM api_user_table WHERE apiuser_type = 'MB' AND entity_cre_flg = 'Y')
        AND b.debit_status = '000'
    GROUP BY
        Bank
),

-- Part 2: T-1
T1Data AS (
    SELECT
        (SELECT bank_name FROM bank_details_table WHERE bank_id = debtor_agent) AS Bank,
        SUM(batch_count) AS "Count",
        SUM(batch_amount) AS TotalAmount
    FROM
        cips_batch_detail_table b
    INNER JOIN
        cips_transaction_detail_table t ON t.batch_id = b.id
    WHERE
        b.rec_date = current_date - 1
        AND b.rcre_user_id IN (SELECT user_id FROM api_user_table WHERE apiuser_type = 'MB' AND entity_cre_flg = 'Y')
        AND b.debit_status = '000'
    GROUP BY
        Bank
),

-- Part 3: Other Time Intervals
-- Part 3: Other Time Intervals
OtherData AS (
    SELECT
        CASE
            WHEN CAST(b.rcre_time AS TIME) BETWEEN '00:00:00.000' AND '04:00:00.000' AND b.rec_date = current_date THEN '00-04'
            WHEN CAST(b.rcre_time AS TIME) BETWEEN '04:00:00.001' AND '08:00:00.000' AND b.rec_date = current_date THEN '04-08'
            WHEN CAST(b.rcre_time AS TIME) BETWEEN '08:00:00.001' AND '10:00:00.000' AND b.rec_date = current_date THEN '08-10'
            WHEN CAST(b.rcre_time AS TIME) BETWEEN '10:00:00.001' AND '12:00:00.000' AND b.rec_date = current_date THEN '10-12'
            WHEN CAST(b.rcre_time AS TIME) BETWEEN '12:00:00.001' AND '14:00:00.000' AND b.rec_date = current_date THEN '12-14'
            WHEN CAST(b.rcre_time AS TIME) BETWEEN '14:00:00.001' AND '16:00:00.000' AND b.rec_date = current_date THEN '14-16'
            WHEN CAST(b.rcre_time AS TIME) BETWEEN '16:00:00.001' AND '18:00:00.000' AND b.rec_date = current_date THEN '16-18'
            WHEN CAST(b.rcre_time AS TIME) BETWEEN '18:00:00.001' AND '20:00:00.000' AND b.rec_date = current_date THEN '18-20'
            WHEN (CAST(b.rcre_time AS TIME) BETWEEN '20:00:00.001' AND '23:59:59.999' OR CAST(b.rcre_time AS TIME) BETWEEN '00:00:00.000' AND '00:00:00.000') AND b.rec_date = current_date THEN '20-00'
        END AS time_alias,
        (SELECT bank_name FROM bank_details_table WHERE bank_id = debtor_agent) AS Bank,
        SUM(batch_count) AS "Count",
        SUM(batch_amount) AS TotalAmount
    FROM
        cips_batch_detail_table b
    INNER JOIN
        cips_transaction_detail_table t ON t.batch_id = b.id
    WHERE
        (
            CAST(b.rcre_time AS TIME) BETWEEN '00:00:00.000' AND '04:00:00.000' AND b.rec_date = current_date
            OR CAST(b.rcre_time AS TIME) BETWEEN '04:00:00.001' AND '08:00:00.000' AND b.rec_date = current_date
            OR CAST(b.rcre_time AS TIME) BETWEEN '08:00:00.001' AND '10:00:00.000' AND b.rec_date = current_date
            OR CAST(b.rcre_time AS TIME) BETWEEN '10:00:00.001' AND '12:00:00.000' AND b.rec_date = current_date
            OR CAST(b.rcre_time AS TIME) BETWEEN '12:00:00.001' AND '14:00:00.000' AND b.rec_date = current_date
            OR CAST(b.rcre_time AS TIME) BETWEEN '14:00:00.001' AND '16:00:00.000' AND b.rec_date = current_date
            OR CAST(b.rcre_time AS TIME) BETWEEN '16:00:00.001' AND '18:00:00.000' AND b.rec_date = current_date
            OR CAST(b.rcre_time AS TIME) BETWEEN '18:00:00.001' AND '20:00:00.000' AND b.rec_date = current_date
            OR (CAST(b.rcre_time AS TIME) BETWEEN '20:00:00.001' AND '23:59:59.999' OR CAST(b.rcre_time AS TIME) BETWEEN '00:00:00.000' AND '00:00:00.000') AND b.rec_date = current_date
        )
        AND b.rec_date BETWEEN current_date - 2 AND current_date
        AND b.rcre_user_id IN (SELECT user_id FROM api_user_table WHERE apiuser_type = 'MB' AND entity_cre_flg = 'Y')
        AND b.debit_status = '000'
    GROUP BY
        time_alias,
        Bank
)


-- Part 1: T-2
SELECT * FROM T2Data;

-- Part 2: T-1
SELECT * FROM T1Data;

-- Part 3: Other Time Intervals
SELECT * FROM OtherData;
