to start the website- clone the repository and in vs code terminal using   git clone https://github.com/ayush4747ss/food_ordering_platform.git and then in terminal run the code using npm start 



Important Note on Swiggy API Integration
Our website uses the live API of Swiggy to fetch real-time data. Occasionally, the website may not function correctly due to changes in the Swiggy API. These changes are managed by Swiggy engineers and are beyond our control.

How to Resolve API Issues
If you encounter issues with the API, you can get the latest API endpoints and data structure by following these steps:

Open Swiggy's Website:

Go to the Swiggy website and log in if necessary.
Access Developer Tools:

Right-click on the page and select "Inspect" or press Ctrl+Shift+I (Windows/Linux) or Cmd+Opt+I (Mac) to open the Developer Tools.
Navigate to the Network Tab:

In the Developer Tools, go to the "Network" tab. This tab shows all the network requests made by the webpage.
Identify API Requests:

Refresh the Swiggy webpage to capture all network activity.
Look for API requests in the network activity list. These are usually XHR or Fetch requests.
Inspect the API Response:

Click on the relevant API request to inspect the details.
In the "Headers" tab, you can see the request URL.
In the "Response" tab, you can see the structure of the returned data.
Update Your Code:

Copy the updated API endpoint and adjust your code to match the new data structure.
Update any parts of your application that depend on the old API structure to accommodate the new changes.
