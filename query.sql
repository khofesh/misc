
SELECT a.month, a.median as '2017', b.median as '2018', c.median as '2019', d.median as '2020' from (
    SELECT MONTH(record_day) as month, SUM(count) as median
    FROM traffic
    WHERE YEAR(record_day) = 2017
    GROUP BY MONTH(record_day)
) a 
JOIN (
    SELECT MONTH(record_day) as month, SUM(count) as median
    FROM traffic
    WHERE YEAR(record_day) = 2018
    GROUP BY MONTH(record_day)
) b ON a.month = b.month
JOIN (
    SELECT MONTH(record_day) as month, SUM(count) as median
    FROM traffic
    WHERE YEAR(record_day) = 2019
    GROUP BY MONTH(record_day)
) c ON c.month = b.month
JOIN (
    SELECT MONTH(record_day) as month, SUM(count) as median
    FROM traffic
    WHERE YEAR(record_day) = 2020
    GROUP BY MONTH(record_day)
) d ON d.month = c.month;
