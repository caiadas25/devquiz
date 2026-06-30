import { Quiz } from "@/types/quiz";

export const systemDesignQuiz1: Quiz = {
  id: "system-design-quiz-1",
  date: "2026-07-01",
  category: "General CS",
  title: "System Design Quiz #1",
  description: "Scalability, load balancing, caching, databases, and distributed systems fundamentals.",
  difficulty: "hard",
  questions: [
    {
      question: "What is the difference between horizontal and vertical scaling?",
      options: [
        "Horizontal adds more machines, vertical adds more power to existing machines",
        "Horizontal is for databases, vertical is for web servers",
        "They are the same thing",
        "Vertical adds more machines, horizontal adds more power"
      ],
      correct: 0,
      explanation: "Horizontal scaling (scaling out) adds more machines to distribute load. Vertical scaling (scaling up) adds more CPU/RAM to an existing machine. Horizontal is generally preferred for fault tolerance and unlimited scaling."
    },
    {
      question: "What is a load balancer?",
      options: [
        "A tool that measures server performance",
        "A device/software that distributes incoming traffic across multiple servers",
        "A database replication technique",
        "A method for compressing HTTP responses"
      ],
      correct: 1,
      explanation: "A load balancer distributes incoming requests across a pool of backend servers. It improves availability, fault tolerance, and performance. Common algorithms include round-robin, least connections, and IP hash."
    },
    {
      question: "What is caching and why is it important?",
      options: [
        "Encrypting data for security",
        "Storing frequently accessed data in fast storage to reduce database load",
        "Compressing HTTP responses",
        "Backup data for disaster recovery"
      ],
      correct: 1,
      explanation: "Caching stores copies of frequently accessed data in fast storage (Redis, Memcached, browser cache) to avoid expensive database queries. A well-designed cache can reduce latency from milliseconds to microseconds."
    },
    {
      question: "What is database replication?",
      options: [
        "Deleting duplicate data",
        "Copying data from one database server to another for redundancy and read performance",
        "Merging two databases into one",
        "Encrypting database backups"
      ],
      correct: 1,
      explanation: "Replication copies data from a primary database to one or more replicas. It provides fault tolerance (if the primary fails, a replica takes over) and improves read performance by distributing read queries across replicas."
    },
    {
      question: "What is a Content Delivery Network (CDN)?",
      options: [
        "A type of firewall",
        "A distributed network of servers that caches and serves static content close to users",
        "A database sharding technique",
        "A load balancing algorithm"
      ],
      correct: 1,
      explanation: "A CDN is a geographically distributed network of edge servers that cache static assets (images, CSS, JS, videos) close to users. This reduces latency and offloads traffic from origin servers."
    }
  ]
};
