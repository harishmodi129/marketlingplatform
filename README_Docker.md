# Frontend Docker Setup

This directory contains Docker Compose files for running the frontend service independently.

## Files

- `docker-compose.yml` - Production setup for frontend service
- `docker-compose.dev.yml` - Development setup with hot reload

## Services Included

### Production (`docker-compose.yml`)
- **Next.js Frontend** - Production frontend application

### Development (`docker-compose.dev.yml`)
- **Next.js Frontend** - Development frontend with hot reload

## Usage

### Production
```bash
# Start frontend service
docker-compose up -d

# View logs
docker-compose logs -f

# Stop service
docker-compose down
```

### Development
```bash
# Start development environment
docker-compose -f docker-compose.dev.yml up -d

# View logs
docker-compose -f docker-compose.dev.yml logs -f

# Stop development service
docker-compose -f docker-compose.dev.yml down
```

## Environment Variables

The frontend service uses the following environment variables:

- `NEXT_PUBLIC_API_URL` - Backend API URL for client-side requests
- `NEXT_PUBLIC_BACKEND_URL` - Backend URL for server-side requests
- `NODE_ENV` - Node.js environment (production/development)

## Ports

- **Frontend**: 3000

## Networks

- **Production**: `frontend_network` (172.22.0.0/16)
- **Development**: `frontend_network_dev` (172.23.0.0/16)

## Development Features

The development setup includes:

- **Hot Reload** - Automatic code reloading on file changes
- **Volume Mounting** - Source code mounted for live editing
- **Node Modules Isolation** - Prevents host node_modules conflicts
- **Next.js Cache Isolation** - Prevents build cache conflicts

## Integration with Backend

When running the frontend independently, make sure to:

1. **Set the correct backend URL** in environment variables:
   - Local development: `http://localhost:8000`
   - Docker network: `http://backend:8000` (when both services are on the same network)

2. **Ensure backend is running** before starting the frontend

3. **Configure CORS** on the backend to allow frontend requests

## Running with Backend

To run both frontend and backend together, you can:

1. **Use the root docker-compose files** in the project root
2. **Create a custom network** to connect both services
3. **Use external networks** to connect separate compose files

### Example: Connecting Separate Compose Files

```bash
# Create a shared network
docker network create student_quiz_shared

# Start backend (from backend directory)
cd backend
docker-compose up -d

# Start frontend (from frontend directory)
cd ../frontend
docker-compose up -d

# Connect frontend to the shared network
docker network connect student_quiz_shared student_quiz_frontend
```

## Build and Deploy

### Production Build
```bash
# Build production image
docker-compose build

# Run production container
docker-compose up -d
```

### Development Build
```bash
# Build development image
docker-compose -f docker-compose.dev.yml build

# Run development container
docker-compose -f docker-compose.dev.yml up -d
```

## Troubleshooting

### Common Issues

1. **Port conflicts**: Ensure port 3000 is available
2. **Backend connection**: Verify backend is running and accessible
3. **Environment variables**: Check that API URLs are correctly set
4. **Network connectivity**: Ensure services can communicate if using separate networks

### Logs and Debugging

```bash
# View frontend logs
docker-compose logs -f frontend

# Access container shell
docker-compose exec frontend sh

# Check network connectivity
docker network ls
docker network inspect frontend_network
``` 