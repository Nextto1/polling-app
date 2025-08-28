# Polling App

## Overview
The Polling App is a web application built with Next.js that allows users to register, log in, and participate in polls. The application utilizes Supabase for authentication and data storage.

## Features
- User registration and login
- Poll creation and participation
- Real-time updates using Supabase

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn
- Supabase account

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   cd polling-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   - Create a `.env.local` file in the root directory and add your Supabase URL and API keys:
     ```
     NEXT_PUBLIC_SUPABASE_URL=<your-supabase-url>
     NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-anon-key>
     ```

### Running the Application
To start the development server, run:
```
npm run dev
```
Open your browser and navigate to `http://localhost:3000` to view the application.

### Folder Structure
- `src/app`: Contains the main application pages and routing logic.
- `src/components`: Contains reusable UI components such as forms.
- `src/lib`: Contains the Supabase client configuration.
- `src/context`: Contains the authentication context for managing user state.
- `src/types`: Contains TypeScript types and interfaces.

### Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

### License
This project is licensed under the MIT License. See the LICENSE file for details.