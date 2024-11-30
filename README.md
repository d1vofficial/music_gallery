
# Music Gallery - Instagram Reels Fetcher

This project fetches Instagram Reels using Instagram's Graph API and displays them on a React-based web application. It uses a Netlify serverless function to interact with Instagram’s API and fetch media content (Reels) associated with a given Instagram account.

## Features

- Displays Instagram Reels dynamically on a web page.
- Fetches media using a Netlify serverless function.
- Built with React and Vite for fast development.
- Uses Tailwind CSS for styling.
- Environment variables are securely managed using Netlify’s environment settings.

## Project Structure

```
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
├── README.md              # Project documentation (this file)
└── tailwind.config.js     # Tailwind CSS configuration
```

## Requirements

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://npmjs.com/) (or [Yarn](https://yarnpkg.com/)) for managing dependencies
- A [Netlify](https://www.netlify.com/) account for deployment (optional)

## Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/music-gallery.git
cd music-gallery
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Create a `.env` file in the root directory and add your Instagram API credentials:

```env
INSTAGRAM_TOKEN=your_instagram_access_token
USER_ID=your_instagram_user_id
```

> Replace `your_instagram_access_token` and `your_instagram_user_id` with actual values from Instagram's Graph API.

### 4. Run Locally

For local development, you can use Vite's development server:

```bash
npm run dev
```

This will start the app on `http://localhost:5173`. You can see your Instagram Reels displayed on the homepage.

### 5. Deploy on Netlify

1. Create a new site on [Netlify](https://app.netlify.com/).
2. Connect your GitHub repository to Netlify.
3. Add the environment variables in your site's Netlify settings:
   - `INSTAGRAM_TOKEN`
   - `USER_ID`
4. Netlify will automatically build and deploy your project.

### 6. Deploy Serverless Functions on Netlify

Netlify uses the serverless function located at `netlify/functions/reels.js` to fetch the Instagram Reels data. When deployed, this function runs when you access the `/reels` endpoint.

## Netlify Configuration

The `netlify.toml` file configures the build and deploy process. Ensure your Netlify project is set up as follows:

```toml
[build]
  functions = "netlify/functions"
  publish = "dist"

[[redirects]]
  from = "/reels"
  to = "/.netlify/functions/reels"
  status = 200
```

## Deployment

To deploy on Netlify:

1. Push your changes to GitHub.
2. Link your repository to Netlify.
3. Configure environment variables in the Netlify dashboard.
4. Netlify will build and deploy your app automatically.

## Troubleshooting

If you encounter issues with your deployed application, make sure to check the logs in the Netlify dashboard for any errors. You can also debug locally by running the serverless function with the Netlify CLI:

```bash
netlify dev
```

This command will start a local server and emulate Netlify functions locally.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
