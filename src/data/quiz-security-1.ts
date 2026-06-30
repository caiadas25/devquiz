import { Quiz } from "@/types/quiz";

export const securityQuiz1: Quiz = {
  id: "security-quiz-1",
  date: "2026-06-30",
  category: "General CS",
  title: "Web Security Quiz #1",
  description: "OWASP Top 10, authentication, encryption, and security fundamentals every developer should know.",
  difficulty: "medium",
  questions: [
    {
      question: "What is Cross-Site Scripting (XSS)?",
      options: [
        "A network protocol vulnerability",
        "Injecting malicious scripts into web pages viewed by other users",
        "A type of SQL injection attack",
        "A denial-of-service attack method"
      ],
      correct: 1,
      explanation: "XSS allows attackers to inject malicious JavaScript into web pages. When other users visit the page, the script executes in their browser, potentially stealing cookies, session tokens, or credentials."
    },
    {
      question: "What is CSRF (Cross-Site Request Forgery)?",
      options: [
        "Forcing a user's browser to make unintended requests to a site where they're authenticated",
        "A brute-force password attack",
        "Intercepting network traffic between client and server",
        "Creating fake SSL certificates"
      ],
      correct: 0,
      explanation: "CSRF tricks a logged-in user's browser into sending forged HTTP requests to a target site. The site can't distinguish the forged request from a legitimate one because it includes the user's cookies."
    },
    {
      question: "What should you use instead of storing passwords in plain text?",
      options: [
        "Base64 encoding",
        "Reversible encryption like AES",
        "A one-way hashing function with salt (e.g., bcrypt, Argon2)",
        "MD5 hashing"
      ],
      correct: 2,
      explanation: "Passwords should be hashed with a slow, salted hashing function like bcrypt, scrypt, or Argon2. These are designed to be computationally expensive, making brute-force attacks impractical. Never use MD5 or SHA for passwords."
    },
    {
      question: "What is SQL Injection?",
      options: [
        "A way to optimize SQL query performance",
        "Inserting malicious SQL code into application queries through user input",
        "A database backup technique",
        "A method to encrypt SQL connections"
      ],
      correct: 1,
      explanation: "SQL injection occurs when user input is directly concatenated into SQL queries without sanitization. Attackers can manipulate the query to extract data, modify records, or even drop tables."
    },
    {
      question: "What is the purpose of CORS (Cross-Origin Resource Sharing)?",
      options: [
        "To encrypt data between browser and server",
        "To control which origins can access resources on a server",
        "To compress HTTP responses",
        "To manage DNS records"
      ],
      correct: 1,
      explanation: "CORS is a browser security mechanism that restricts web pages from making requests to a different origin than the one that served the page. The server must explicitly allow cross-origin requests via headers."
    },
    {
      question: "What is the Same-Origin Policy?",
      options: [
        "A policy requiring all users to use the same browser",
        "A security restriction that prevents scripts from one origin from accessing resources from a different origin",
        "A server configuration that blocks all external requests",
        "A password policy requiring minimum complexity"
      ],
      correct: 1,
      explanation: "The Same-Origin Policy is a fundamental browser security mechanism. Scripts on one origin (protocol + host + port) cannot access resources from a different origin. This prevents malicious scripts from reading data from other sites."
    },
    {
      question: "What is a Content Security Policy (CSP)?",
      options: [
        "A firewall configuration for servers",
        "An HTTP header that restricts which resources a page can load, preventing XSS attacks",
        "A policy for storing user passwords",
        "A method to compress web content"
      ],
      correct: 1,
      explanation: "CSP is an HTTP response header that tells browsers which sources of content (scripts, styles, images, etc.) are allowed. A strong CSP prevents XSS by blocking inline scripts and restricting script sources."
    },
    {
      question: "What is a JWT (JSON Web Token) used for?",
      options: [
        "Encrypting database contents",
        "Securely transmitting claims between parties as a compact, self-contained token",
        "Compressing JSON data",
        "Storing passwords in the browser"
      ],
      correct: 1,
      explanation: "JWTs are compact, URL-safe tokens that encode claims (user ID, roles, expiration) in a signed format. They're commonly used for API authentication and authorization. The signature prevents tampering, but JWTs are not encrypted by default."
    },
    {
      question: "What is the risk of using HTTP instead of HTTPS?",
      options: [
        "Pages load slightly slower",
        "All data is transmitted in plaintext, allowing eavesdropping and man-in-the-middle attacks",
        "SEO rankings are lower",
        "Modern browsers block HTTP entirely"
      ],
      correct: 1,
      explanation: "HTTP transmits data in plaintext, meaning anyone on the network (WiFi operators, ISPs, attackers) can read passwords, session tokens, and other sensitive data. HTTPS encrypts the connection using TLS."
    },
    {
      question: "What is the principle of least privilege?",
      options: [
        "Users should have the minimum access rights needed to perform their tasks",
        "All users should have admin access for convenience",
        "Services should run with root permissions to avoid permission errors",
        "API keys should be embedded in client-side code"
      ],
      correct: 0,
      explanation: "Least privilege means giving users and systems only the permissions they absolutely need. This limits the damage from compromised accounts or buggy code. A compromised low-privilege account can do far less damage than an admin account."
    }
  ]
};
