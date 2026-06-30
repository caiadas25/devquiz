import { Quiz } from "@/types/quiz";

export const networkingQuiz1: Quiz = {
  id: "networking-quiz-1",
  date: "2026-06-30",
  category: "General CS",
  title: "Networking Quiz #1",
  description: "TCP/IP, DNS, HTTP/2, ports, and networking fundamentals every developer should know.",
  difficulty: "medium",
  questions: [
    {
      question: "What is the difference between TCP and UDP?",
      options: [
        "TCP is faster than UDP",
        "TCP is connection-oriented and reliable; UDP is connectionless and faster",
        "UDP is more reliable than TCP",
        "They are the same protocol"
      ],
      correct: 1,
      explanation: "TCP establishes a connection with a three-way handshake and guarantees delivery, ordering, and error checking. UDP sends packets without establishing a connection — faster but no guarantees. TCP is used for HTTP, SSH, SMTP. UDP is used for DNS, video streaming, gaming."
    },
    {
      question: "What happens during a TCP three-way handshake?",
      options: [
        "SYN → ACK → FIN",
        "SYN → SYN-ACK → ACK",
        "ACK → SYN → ACK",
        "FIN → ACK → SYN"
      ],
      correct: 1,
      explanation: "The client sends SYN, the server responds with SYN-ACK, and the client sends ACK. This establishes a reliable connection before data transfer begins."
    },
    {
      question: "What is the purpose of DNS?",
      options: [
        "Encrypting network traffic",
        "Translating domain names to IP addresses",
        "Managing firewall rules",
        "Load balancing web traffic"
      ],
      correct: 1,
      explanation: "DNS (Domain Name System) translates human-readable domain names like example.com into IP addresses like 93.184.216.34. Without DNS, you'd have to memorize IP addresses."
    },
    {
      question: "What is the difference between HTTP/1.1 and HTTP/2?",
      options: [
        "HTTP/2 uses UDP instead of TCP",
        "HTTP/2 supports multiplexing (multiple requests over one connection), header compression, and server push",
        "HTTP/1.1 is faster than HTTP/2",
        "HTTP/2 doesn't support HTTPS"
      ],
      correct: 1,
      explanation: "HTTP/2 allows multiple requests/responses over a single TCP connection (multiplexing), compresses headers to reduce overhead, and supports server push. HTTP/1.1 required separate connections or pipelining."
    },
    {
      question: "What port does HTTPS use by default?",
      options: ["80", "443", "8080", "3000"],
      correct: 1,
      explanation: "HTTPS uses port 443 by default. HTTP uses port 80. Port 8080 is a common alternative for development servers, and 3000 is commonly used by Node.js/React dev servers."
    },
    {
      question: "What is a CDN (Content Delivery Network)?",
      options: [
        "A database for caching queries",
        "A distributed network of servers that caches content closer to users",
        "A protocol for compressing files",
        "A security firewall for web applications"
      ],
      correct: 1,
      explanation: "A CDN caches static assets (images, CSS, JS) on servers distributed globally. When a user requests content, it's served from the nearest edge server, reducing latency and load on the origin server."
    },
    {
      question: "What is the difference between a cookie and a JWT (JSON Web Token)?",
      options: [
        "They are the same thing",
        "Cookies are stored on the server; JWTs are stored on the client",
        "Cookies are stored in the browser; JWTs are stateless tokens with encoded claims",
        "JWTs are more secure than cookies"
      ],
      correct: 2,
      explanation: "Cookies are browser-stored key-value pairs sent with every request. JWTs are self-contained tokens with encoded claims (user ID, expiry) signed by the server. JWTs are stateless — the server doesn't need to store session data."
    },
    {
      question: "What does a subnet mask like 255.255.255.0 mean?",
      options: [
        "The network has 255 devices",
        "The first 24 bits are the network portion; the last 8 bits are for host addresses",
        "The subnet is disabled",
        "All traffic is blocked"
      ],
      correct: 1,
      explanation: "255.255.255.0 in binary is 11111111.11111111.11111111.00000000. The 1s indicate network bits, the 0s indicate host bits. This means 24 bits for the network and 8 bits for hosts (up to 254 devices)."
    },
    {
      question: "What is the difference between a reverse proxy and a load balancer?",
      options: [
        "They are the same thing",
        "A reverse proxy sits in front of servers and forwards requests; a load balancer distributes traffic across multiple servers",
        "A load balancer is for databases only",
        "A reverse proxy only handles HTTPS"
      ],
      correct: 1,
      explanation: "A reverse proxy (like Nginx) forwards client requests to backend servers. A load balancer (like HAProxy or AWS ALB) distributes traffic across multiple servers for scalability. In practice, load balancers are a type of reverse proxy with traffic distribution logic."
    },
    {
      question: "What is the TIME_WAIT state in TCP?",
      options: [
        "The connection is actively transferring data",
        "The connection is closed but packets may still arrive, so the port stays reserved briefly",
        "The server is waiting for a client response",
        "The connection is being encrypted"
      ],
      correct: 1,
      explanation: "TIME_WAIT occurs after a TCP connection is closed. The socket waits for up to 2*MSL (Maximum Segment Lifetime) to ensure any stray packets from the old connection are discarded. This prevents old packets from being accepted by a new connection on the same port."
    }
  ]
};
