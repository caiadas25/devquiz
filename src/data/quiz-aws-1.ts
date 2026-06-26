import { Quiz } from "@/types/quiz";

export const awsQuiz: Quiz = {
  id: "aws-quiz-1",
  date: "2026-06-26",
  category: "DevOps",
  title: "AWS Quiz #1",
  description: "Core AWS services, regions, and cloud fundamentals.",
  difficulty: "medium",
  questions: [
    {
      question: "What is an AWS Region?",
      options: [
        "A single data center",
        "A geographical area with multiple isolated Availability Zones",
        "A CDN edge location",
        "A virtual private cloud"
      ],
      correct: 1,
      explanation: "An AWS Region is a geographical area with multiple, physically separated Availability Zones (data centers). Each AZ is independently powered and connected, providing high availability."
    },
    {
      question: "What does Amazon S3 stand for?",
      options: [
        "Simple Storage Service",
        "Scalable Storage System",
        "Secure Storage Solution",
        "Server-Side Storage"
      ],
      correct: 0,
      explanation: "Amazon S3 stands for Simple Storage Service. It's an object storage service offering 99.999999999% (11 nines) durability. It's one of the most widely used AWS services."
    },
    {
      question: "What is an EC2 instance?",
      options: [
        "A managed database",
        "A virtual server in the cloud",
        "A serverless function",
        "A load balancer"
      ],
      correct: 1,
      explanation: "EC2 (Elastic Compute Cloud) provides scalable virtual servers (called instances) in the cloud. You choose the instance type (CPU, memory), OS, and region."
    },
    {
      question: "What is AWS Lambda?",
      options: [
        "A container orchestration service",
        "A serverless compute service that runs code without managing servers",
        "A virtual machine type",
        "A database query language"
      ],
      correct: 1,
      explanation: "Lambda is AWS's serverless compute service. You upload code, set a trigger, and Lambda runs it in response to events. No servers to provision or manage — you only pay for execution time."
    },
    {
      question: "What is the purpose of an AWS IAM role?",
      options: [
        "To define network access rules",
        "To grant temporary permissions to AWS services or users",
        "To monitor cloud costs",
        "To encrypt data at rest"
      ],
      correct: 1,
      explanation: "IAM (Identity and Access Management) roles grant temporary credentials to AWS services, users, or applications. They're the secure way to give resources permission to access other AWS services."
    }
  ]
};
