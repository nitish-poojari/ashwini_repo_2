USE hr_db;

-- 1)Display first name and last name after converting the first letter of each name to upper case and the rest to lower case.
SELECT UPPER(SUBSTRING(FIRST_NAME,1,1))+LOWER(SUBSTRING(FIRST_NAME,2,LEN(FIRST_NAME)-1)) AS FIRST_NAME ,UPPER(SUBSTRING(LAST_NAME,1,1))+LOWER(SUBSTRING(LAST_NAME,2,LEN(LAST_NAME)-1)) AS LAST_NAME FROM employees;

-- 2)Display the first word in job title.
SELECT JOB_TITLE,SUBSTRING(JOB_TITLE,1,CHARINDEX(' ',JOB_TITLE)-1) FROM jobs;
 
-- 3)Display the length of first name for employees where last name contain character ‘b’ after 3rd position.
SELECT LEN(FIRST_NAME) AS length_of_first_name FROM employees WHERE LAST_NAME LIKE '___%b%';

-- 4)Display first name in upper case and email address in lower case for employees where the first name and email address are same irrespective of the case
SELECT UPPER(FIRST_NAME) AS firstname,LOWER(EMAIL) as  email FROM employees WHERE FIRST_NAME= EMAIL;

-- 5)Display first name, salary, and round the salary to thousands.
SELECT FIRST_NAME,SALARY,ROUND(SALARY,1000)AS roundedsalary FROM employees;

-- 6)Display employee ID and the date on which he ended his previous job.
SELECT EMPLOYEE_ID,MAX(END_DATE) AS end_date FROM job_history GROUP BY EMPLOYEE_ID

-- 7)Display first name and date of first salary of the employees.
SELECT FIRST_NAME,EOMONTH(HIRE_DATE) AS first_salary_date FROM employees

-- 8)Display first name and experience of the employees.
SELECT FIRST_NAME,DATEDIFF( year,HIRE_DATE,GETDATE()) AS experience FROM employees

-- 9)Display first name of employees who joined in 2001.
SELECT FIRST_NAME FROM employees WHERE YEAR(HIRE_DATE)=2001;

-- 10)Display employees who joined in the current year.
SELECT * FROM employees WHERE YEAR(HIRE_DATE)=YEAR(GETDATE());

-- 11)Display the number of days between system date and 1st January 2011.
SELECT DATEDIFF(day,2011-01-01,GETDATE()) AS NO_OF_DAYS;

-- 12)Display number of employees joined after 15th of the month.
SELECT COUNT(EMPLOYEE_ID) AS no_of_employees FROM employees WHERE DAY(HIRE_DATE)>'15';

-- 13)Display third highest salary of employees
SELECT TOP 1 SALARY FROM (SELECT DISTINCT TOP 3 SALARY FROM employees ORDER BY SALARY DESC)R ORDER BY SALARY;