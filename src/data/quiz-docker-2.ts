import { Quiz } from "@/types/quiz";

export const dockerQuiz2: Quiz = {
  id: "docker-quiz-2",
  date: "2026-06-27",
  category: "DevOps",
  title: "Docker Quiz #2",
  description: "Docker networking, volumes, multi-stage builds, and production best practices.",
  difficulty: "hard",
  questions: [
    {
      question: "What is the difference between a Docker volume and a bind mount?",
      options: [
        "They are identical — both store data on the host filesystem",
        "Volumes are managed by Docker and stored in a Docker-managed directory; bind mounts map a specific host path into the container",
        "Bind mounts are faster; volumes are more secure",
        "Volumes only work on Linux; bind mounts work everywhere"
      ],
      correct: 1,
      explanation: "Docker volumes are managed by Docker and stored in `/var/lib/docker/volumes/` (Linux). They're portable and don't depend on the host directory structure. Bind mounts map a specific host path (like `./src:/app/src`) into the container — useful for development but less portable."
    },
    {
      question: "What is a multi-stage Docker build and why is it used?",
      options: [
        "Running multiple containers simultaneously for redundancy",
        "A Dockerfile with multiple FROM statements that allow intermediate build artifacts to be discarded in the final image",
        "Building Docker images on multiple machines simultaneously",
        "Using multiple base images for different operating systems"
      ],
      correct: 1,
      explanation: "Multi-stage builds use multiple FROM statements. Each stage starts fresh, but you can COPY files from previous stages. This lets you install build dependencies in an early stage, compile your app, then copy only the compiled output into a slim final image — drastically reducing image size."
    },
    {
      question: "What happens when you run `docker compose up -d`?",
      options: [
        "Builds images and starts containers in the foreground",
        "Builds images if needed and starts all services in detached (background) mode",
        "Only starts containers that are already built",
        "Removes all existing containers and recreates them"
      ],
      correct: 1,
      explanation: "Docker Compose reads `docker-compose.yml`, builds images if they don't exist (or if build context changed), creates networks and volumes, then starts all defined services. The `-d` flag runs them in detached mode (background)."
    },
    {
      question: "What is the purpose of `docker exec -it mycontainer sh`?",
      options: [
        "Creates a new container from the mycontainer image",
        "Opens an interactive shell session inside a running container",
        "Executes the Dockerfile instructions inside the container",
        "Restarts the container with a new shell command"
      ],
      correct: 1,
      explanation: "`docker exec` runs a command inside a running container. `-i` keeps STDIN open, `-t` allocates a pseudo-TTY. Together they give you an interactive shell. You can use `bash` instead of `sh` if bash is installed in the container."
    },
    {
      question: "Which Docker network driver allows containers to communicate using container names as hostnames?",
      options: [
        "host",
        "bridge",
        "overlay",
        "none"
      ],
      correct: 1,
      explanation: "The default bridge network provides DNS resolution between containers. When two containers are on the same bridge network, one can reach the other by its container name (e.g., `curl http://my-api:3000`). The `host` driver shares the host's network stack, `overlay` is for swarm mode, and `none` disables networking."
    },
    {
      question: "What does `docker-compose.yml` version field actually do in modern Docker Compose?",
      options: [
        "It sets the version of Docker Compose to install",
        "It's required for all Docker Compose files and must be updated with each release",
        "It's mostly obsolete — modern Docker Compose ignores it, but it's kept for backward compatibility",
        "It controls the version of the Docker API used"
      ],
      correct: 2,
      explanation: "The `version` field was originally used to enable specific features in older Docker Compose versions. Modern Docker Compose (v2+) ignores it entirely. You can remove it or leave it — it has no effect on behavior. The compose spec is now the standard."
    },
    {
      question: "What is the difference between `COPY` and `ADD` in a Dockerfile?",
      options: [
        "`COPY` is for files; `ADD` is for directories",
        "`ADD` can auto-extract tar archives and fetch remote URLs; `COPY` is a straight file copy",
        "`COPY` is faster; `ADD` is deprecated",
        "`ADD` copies files; `COPY` moves files"
      ],
      correct: 1,
      explanation: "`COPY` is a straightforward file/directory copy from build context to image. `ADD` has extra features: it can auto-extract local tar archives and download files from remote URLs. Best practice is to use `COPY` unless you specifically need these extras — they can cause unexpected behavior."
    },
    {
      question: "How do you reduce Docker image size in production?",
      options: [
        "Use a larger base image like Ubuntu",
        "Use multi-stage builds, alpine/distroless base images, and combine RUN commands to reduce layers",
        "Run `docker prune` after building the image",
        "Increase the Docker memory limit"
      ],
      correct: 1,
      explanation: "Three key strategies: (1) Multi-stage builds discard build dependencies. (2) Alpine or distroless base images are 5-50MB instead of 200MB+. (3) Combining RUN commands with `&&` reduces layers. Also use `.dockerignore` to exclude unnecessary files from the build context."
    },
    {
      question: "What is Docker's `--rm` flag used for?",
      options: [
        "Removes the image after the container stops",
        "Automatically removes the container when it exits",
        "Removes all stopped containers",
        "Removes unused Docker volumes"
      ],
      correct: 1,
      explanation: "`docker run --rm` auto-removes the container when it stops. This prevents stopped containers from accumulating and consuming disk space. Useful for one-off commands like `docker run --rm myimage python script.py`."
    },
    {
      question: "What health check does `HEALTHCHECK` in a Dockerfile define?",
      options: [
        "Checks if the Docker daemon is running",
        "Runs a command inside the container to determine if it's working correctly — Docker marks the container as healthy or unhealthy",
        "Validates the Dockerfile syntax before building",
        "Monitors CPU and memory usage of the container"
      ],
      correct: 1,
      explanation: "HEALTHCHECK tells Docker how to test if the container is still working. Docker runs the command at intervals (default 30s). If it returns 0, the container is healthy. Otherwise it's marked unhealthy. This is used by orchestrators like Docker Swarm and Kubernetes to manage container lifecycle."
    }
  ]
};
