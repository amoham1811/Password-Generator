# Password-Generator
This project is about generating password based on the password length and character types selected by the user. The user starts the process by clicking on the password button as shown below:

![PasswordSplashScreen](./assets/images/passworddisplay.jpg)

## Data Entry
The user will be asked to enter a password length. The length will be validated against correct data type and range. If an incorrect selection is made a feedback message is displayed and the user will be invited to enter a password length again. The images below show both the data entry prompt and feedback message.

![PasswordLength](./assets/images/passwordlength.jpg)

![FeedbackMessage](./)

processing financial data and display key statistics. The data array contains two items: Data and Profit/Loss. The processing requirements are:  
        - Display the number of records in the arr
        - Total profit over the entire dataset period covered.  
        - Average monthly change in profit/loss over the entire period.  
        - Greatest monthly increase in the entire dataset.  
        - Greatest monthly decrease in the entire dataset  

    
## Coding
JavaScript is used to write functions to read data and work out the required averages. A script file contains the data, followed by function definition and finally the calls made to these functions. The coding is appropriately commented. The processing output is written to the console. A copy of the final output is displayed below:

![ConsoleFinancialAnalysis](.\assets\images\ConFinancialAnalysis.jpg)

## Further Coding
After meeting all the requirements of this challenge. The project was further extended by displaying these averages dynaically on a webpage. This was achieved creating a unordered list in html with id's. These id's were used to identify and write the averages to these elements. Finally, a css file was added to provide some basic styling. A copy of the webpage containing the averages is given below.

![HtmlFinancialAnalysis](.\assets\images\HtmlFinancialAnalysis.jpg)

An attempt was made to extend this challenge further by moving the data to an external JSON file then reading this data into an array before carrying out the required processing. Unfortunately, the attempts to read data into an array was not successful. I researched this topic on w3school and other forums but could get it to work. Perhaps I will return to this later on.

## Application
Click the link below to view the application.
https://amoham1811.github.io/Console-Finances/