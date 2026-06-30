import { Quiz } from "@/types/quiz";

export const kubernetesQuiz2: Quiz = {
  id: "kubernetes-quiz-2",
  date: "2026-06-30",
  category: "DevOps",
  title: "Kubernetes Quiz #2",
  description: "Advanced K8s concepts — networking, RBAC, and cluster management.",
  difficulty: "hard",
  questions: [
    {
      question: "What is the purpose of a Kubernetes Service of type `ClusterIP`?",
      options: [
        "Exposes the service externally via a cloud load balancer",
        "Exposes the service on each node's IP at a static port",
        "Makes the service only reachable from within the cluster",
        "Creates a DNS entry for the service in external DNS"
      ],
      correct: 2,
      explanation: "ClusterIP is the default Service type. It creates a virtual IP that is only accessible from within the cluster. Other types like NodePort and LoadBalancer extend this with external access."
    },
    {
      question: "What does a Kubernetes DaemonSet ensure?",
      options: [
        "Exactly N copies of a pod are running at all times",
        "A pod runs on every node (or a subset of nodes) in the cluster",
        "Pods are scheduled only on nodes with specific labels",
        "Pods are automatically restarted when they fail"
      ],
      correct: 1,
      explanation: "A DaemonSet ensures that a copy of a pod runs on all (or selected) nodes. It's commonly used for node-level tasks like log collection (Fluentd), monitoring agents (Prometheus Node Exporter), or networking (Calico)."
    },
    {
      question: "In Kubernetes RBAC, what is the difference between a Role and a ClusterRole?",
      options: [
        "Role is for pods, ClusterRole is for nodes",
        "Role is namespace-scoped, ClusterRole is cluster-scoped",
        "Role is read-only, ClusterRole allows write access",
        "Role is for development, ClusterRole is for production"
      ],
      correct: 1,
      explanation: "A Role defines permissions within a specific namespace. A ClusterRole defines permissions across the entire cluster (or at the cluster level, including non-namespaced resources like nodes)."
    },
    {
      question: "What happens when you set `replicas: 3` in a Deployment and one pod crashes?",
      options: [
        "The Deployment scales down to 2 replicas",
        "The Deployment automatically creates a new pod to maintain 3 replicas",
        "Nothing happens until you manually intervene",
        "The Deployment enters a CrashLoopBackOff state"
      ],
      correct: 1,
      explanation: "The Deployment controller continuously watches the actual state vs desired state. If a pod crashes, the Deployment immediately creates a replacement pod to maintain the desired replica count."
    },
    {
      question: "What is the purpose of a Kubernetes Ingress resource?",
      options: [
        "To assign IP addresses to pods",
        "To manage external HTTP/HTTPS access to services within the cluster",
        "To monitor pod resource usage",
        "To store configuration data as key-value pairs"
      ],
      correct: 1,
      explanation: "An Ingress exposes HTTP and HTTPS routes from outside the cluster to services within the cluster. It provides URL-based routing, SSL termination, and virtual hosting. It requires an Ingress Controller (like nginx-ingress) to function."
    }
  ]
};
