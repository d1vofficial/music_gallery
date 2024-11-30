Music Gallery Web App
The Music Gallery is a portfolio web application designed to showcase your music content, leveraging Instagram Reels. It is built with React, Tailwind CSS, and Vite for fast development, and supports serverless functions using Netlify.

Features
Responsive Design: Built with Tailwind CSS to ensure a seamless user experience across devices.
Instagram Reels Integration: Fetches and displays your Instagram Reels dynamically using serverless functions.
Serverless Backend: Powered by Netlify Functions to handle API interactions with Instagram.
Modern Development Stack: Uses React with Vite for blazing-fast performance.
Tech Stack
Frontend: React, Tailwind CSS
Backend: Netlify Functions (Node.js)
Deployment: Netlify
Getting Started
Follow these steps to set up the project locally:

1. Prerequisites
Make sure you have the following installed:

Node.js (v18 or later is recommended)
npm or yarn
Netlify CLI (optional for local testing of serverless functions)
Install Netlify CLI:

bash
Copy code
npm install -g netlify-cli
2. Clone the Repository
bash
Copy code
git clone https://github.com/<your-username>/music-gallery.git
cd music-gallery
3. Install Dependencies
Run the following command to install all required dependencies:

bash
Copy code
npm install
4. Environment Variables
Create a .env file in the root of the project and add the following keys:

env
Copy code
INSTAGRAM_TOKEN=your_instagram_access_token
USER_ID=your_instagram_user_id
Ensure these values are added to the Netlify environment variables when deploying.

5. Run Locally
To test the application locally:

Start the Development Server:
bash
Copy code
npm run dev
Test Serverless Functions (Optional):
Use the Netlify CLI to test serverless functions:

bash
Copy code
netlify dev
The app will be available at http://localhost:5173.

Deploying to Netlify
Link your repository to Netlify using the Netlify Dashboard.
Ensure the environment variables (INSTAGRAM_TOKEN and USER_ID) are added in the Site Settings.
Deploy the project using:
bash
Copy code
netlify deploy --prod
Folder Structure
bash
Copy code
music-gallery/
├── netlify/               # Serverless functions directory
│   └── functions/         # Contains Netlify serverless functions
│       └── reels.js       # Function to fetch Instagram Reels
├── public/                # Static assets
├── src/                   # Source files
│   ├── components/        # Reusable components
│   ├── pages/             # Application pages
│   ├── App.jsx            # Main React component
│   ├── index.css          # Tailwind CSS entry
│   └── main.jsx           # Entry point for React app
├── .env                   # Environment variables (not included in Git)
├── netlify.toml           # Netlify configuration
├── package.json           # Project metadata and dependencies
├── README.md              # Project documentation
└── tailwind.config.js     # Tailwind CSS configuration
Key Scripts
npm run dev: Start the development server.
npm run build: Build the project for production.
netlify dev: Test Netlify serverless functions locally.
Issues and Contributing
If you encounter any issues or have suggestions, feel free to open an issue or submit a pull request. Contributions are welcome!

License
This project is licensed under the MIT License.

Acknowledgements
Built using React, Tailwind CSS, and Vite.
Serverless functions powered by Netlify.
