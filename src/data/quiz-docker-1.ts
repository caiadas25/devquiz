import { Quiz } from "@/types/quiz";

export const dockerQuiz: Quiz = {
  id: "docker-quiz-1",
  date: "2026-06-26",
  category: "DevOps",
  title: "Docker Quiz #1",
  description: "Containers, images, Dockerfile best practices, and compose basics.",
  difficulty: "medium",
  questions: [
    {
      question: "What is the difference between a Docker image and a Docker container?",
      options: [
        "They are the same thing with different names",
        "An image is a template; a container is a running instance of an image",
        "A container is saved to disk; an image runs in memory",
        "Images are for production; containers are for development"
      ],
      correct: 1,
      explanation: "A Docker image is a read-only template containing instructions for creating a container. A container is a runnable instance of an image — it has its own writable layer on top of the image's read-only layers. You can create many containers from one image."
    },
    {
      question: "What does the `docker build -t myapp:1.0 .` command do?",
      options: [
        "Downloads the myapp image from Docker Hub",
        "Runs a container named myapp with tag 1.0",
        "Builds a Docker image from the Dockerfile in the current directory and tags it as myapp:1.0",
        "Creates a new Docker network named myapp"
      ],
      correct: 2,
      explanation: "`docker build` reads the Dockerfile in the specified build context (the `.` means current directory). The `-t` flag tags the resulting image with a name and version. The build context is sent to the Docker daemon, which executes each Dockerfile instruction in sequence."
    },
    {
      question: "What is the purpose of a `.dockerignore` file?",
      options: [
        "It tells Docker which environment variables to ignore",
        "It specifies files and directories to exclude from the build context",
        "It lists containers to ignore during `docker ps`",
        "It disables Docker logging for certain files"
      ],
      correct: 1,
      explanation: "Similar to `.gitignore`, `.dockerignore` tells Docker which files to exclude when sending the build context to the daemon. This speeds up builds and prevents sensitive files (like node_modules or .env) from being included in the image."
    },
    {
      question: "Which Dockerfile instruction creates a new layer that is cached and reused?",
      options: [
        "FROM",
        "RUN",
        "Both RUN and COPY/ADD — each creates a cached layer",
        "Only CMD — other instructions are not cached"
      ],
      correct: 2,
      explanation: "Each instruction in a Dockerfile (RUN, COPY, ADD, etc.) creates a new layer. Docker caches layers and reuses them on subsequent builds if the instruction and its inputs haven't changed. This is why ordering matters — put infrequently changing instructions (like installing system dependencies) before frequently changing ones (like COPY . .)."
    },
    {
      question: "What does `docker-compose up -d` do?",
      options: [
        "Builds all images and deletes old containers",
        "Starts services defined in docker-compose.yml in detached (background) mode",
        "Downloads the latest Docker Compose binary",
        "Creates a new Docker Compose project and exits"
      ],
      correct: 1,
      explanation: "`docker-compose up` creates and starts containers for services defined in your docker-compose.yml file. The `-d` flag runs them in detached mode (background), so the terminal returns to you. Without `-d`, you'd see all the container logs streamed to your terminal."
    }
  ]
};
