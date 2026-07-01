export const dockerQuiz3 = {
  id: "docker-quiz-3",
  date: "2026-07-01",
  category: "Docker",
  title: "Docker Quiz #3",
  description: "Docker Compose, networking, and multi-container orchestration.",
  difficulty: "hard" as const,
  questions: [
    {
      question: "What is the purpose of `docker-compose.yml`?",
      options: [
        "To define and run multi-container Docker applications",
        "To configure Docker daemon settings",
        "To set up Docker Hub authentication",
        "To create Docker images from scratch"
      ],
      correct: 0,
      explanation: "docker-compose.yml (now just compose.yml) defines services, networks, and volumes for multi-container applications. It lets you spin up the entire stack with `docker compose up` instead of running multiple `docker run` commands manually."
    },
    {
      question: "In Docker Compose, what does `depends_on` control?",
      options: [
        "Container resource limits (CPU, memory)",
        "Startup order of containers (not readiness)",
        "Network isolation between containers",
        "Volume mount priority"
      ],
      correct: 1,
      explanation: "`depends_on` controls the order in which containers start, but NOT whether the depended-on service is actually ready to accept connections. For true readiness, use health checks with `condition: service_healthy` or implement retry logic in your application."
    },
    {
      question: "What network driver does Docker Compose create by default?",
      options: [
        "host",
        "bridge",
        "overlay",
        "none"
      ],
      correct: 1,
      explanation: "Docker Compose creates a default bridge network named after the project directory. All services in the same compose file can communicate using service names as hostnames. For multi-host communication, use overlay networks."
    },
    {
      question: "How do you make a Dockerfile build faster when you only changed application code?",
      options: [
        "Delete the Docker image and rebuild from scratch",
        "Rearrange Dockerfile instructions to copy package.json first, then install dependencies, then copy app code",
        "Always use --no-cache flag",
        "Use a larger base image"
      ],
      correct: 1,
      explanation: "Docker layer caching means unchanged layers are reused. By copying dependency manifests (package.json, requirements.txt) first, installing deps, then copying application code, you avoid reinstalling dependencies when only app code changes. This is the most important Dockerfile optimization technique."
    },
    {
      question: "What does the `healthcheck` instruction do in a Dockerfile?",
      options: [
        "Scans the image for security vulnerabilities",
        "Defines a command to test if the container is working correctly",
        "Monitors CPU and memory usage",
        "Automatically restarts failed containers"
      ],
      correct: 1,
      explanation: "A healthcheck runs a command inside the container at regular intervals. Docker marks the container as healthy, starting, or unhealthy based on the exit code. This is critical for orchestrators (Docker Swarm, Kubernetes) and for `depends_on` with `condition: service_healthy` in Compose."
    }
  ]
};
