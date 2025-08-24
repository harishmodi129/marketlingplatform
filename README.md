# Student Quiz Report System - Frontend

A modern Next.js frontend for the Student Quiz Report System with AI-powered question generation and EEG monitoring capabilities.

## Features

- **Modern UI/UX**: Built with Next.js 15, TypeScript, and Tailwind CSS
- **State Management**: Redux Toolkit with RTK Query for efficient API calls
- **Authentication**: JWT-based authentication for students and administrators
- **Responsive Design**: Mobile-first approach with beautiful, accessible UI
- **Real-time Features**: Live quiz taking with timer and progress tracking
- **Role-based Access**: Separate interfaces for students and administrators

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit + RTK Query
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **UI Components**: Headless UI + Heroicons

## Getting Started

### Prerequisites

- Node.js 18+ 
- Yarn package manager
- Backend API running on `http://localhost:8000`

### Installation

1. Install dependencies:
```bash
yarn install
```

2. Create environment file:
```bash
cp .env.example .env.local
```

3. Update `.env.local` with your API URL:
```
NEXT_PUBLIC_API_URL=http://localhost:8000/api/v1
```

4. Start the development server:
```bash
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── admin/             # Admin-specific pages
│   ├── student/           # Student-specific pages
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Landing page
├── components/            # Reusable components
│   └── auth/             # Authentication components
├── features/             # Feature-based modules
│   ├── auth/             # Authentication logic
│   ├── quiz/             # Quiz management
│   └── monitoring/       # EEG/Webcam monitoring
├── lib/                  # Core utilities
│   ├── api.ts           # RTK Query API setup
│   └── store.ts         # Redux store configuration
└── types/               # TypeScript type definitions
```

## Key Features

### For Students
- **Dashboard**: Overview of available quizzes and recent attempts
- **Quiz Taking**: Interactive quiz interface with timer and progress tracking
- **Results**: Detailed quiz results with performance analytics
- **Profile Management**: Update personal information and preferences

### For Administrators
- **Dashboard**: System overview with statistics and quick actions
- **Quiz Management**: Create, edit, and manage quizzes
- **AI Question Generation**: Generate questions using AI templates
- **Student Management**: View and manage student accounts
- **Analytics**: Performance reports and insights

### Authentication
- **JWT-based**: Secure token-based authentication
- **Role-based**: Separate login flows for students and admins
- **Persistent**: Automatic login state management
- **Protected Routes**: Role-based access control

### Quiz System
- **Multiple Question Types**: Multiple choice, true/false, short answer
- **Timer Support**: Configurable time limits with auto-submit
- **Progress Tracking**: Real-time progress indicators
- **Answer Validation**: Client-side validation with Zod schemas

## API Integration

The frontend integrates with the backend API through RTK Query:

- **Authentication**: Login, registration, profile management
- **Quiz Management**: CRUD operations for quizzes and questions
- **Quiz Attempts**: Start, submit, and track quiz attempts
- **Monitoring**: EEG and webcam session management
- **AI Integration**: Question generation and analysis

## Development

### Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn lint` - Run ESLint

### Code Style

- **TypeScript**: Strict type checking enabled
- **ESLint**: Code quality and consistency
- **Prettier**: Automatic code formatting
- **Tailwind**: Utility-first CSS framework

### State Management

The app uses Redux Toolkit with RTK Query for efficient state management:

- **Global State**: Authentication, user preferences
- **Server State**: API data with automatic caching and synchronization
- **Local State**: Component-specific state with React hooks

## Deployment

### Build for Production

```bash
yarn build
yarn start
```

### Environment Variables

Required environment variables:

- `NEXT_PUBLIC_API_URL`: Backend API base URL

### Docker Deployment

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build
EXPOSE 3000
CMD ["yarn", "start"]
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.
