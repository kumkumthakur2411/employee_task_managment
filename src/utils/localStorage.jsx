const employees= [
    {
      "id": 101,
      "email": "john.doe@example.com",
      "password": "John@123",
      "tasks": [
        {
          "title": "Prepare Sales Report",
          "description": "Compile Q1 sales figures",
          "date": "2025-06-25",
          "category": "Reporting",
          "active": true,
          "completed": false,
          "new": true,
          "failed": false
        },
        {
          "title": "Client Meeting",
          "description": "Discuss service feedback with ABC Corp.",
          "date": "2025-06-28",
          "category": "Meeting",
          "active": true,
          "completed": false,
          "new": true,
          "failed": false
        },
        {
          "title": "Email Campaign",
          "description": "Design July campaign",
          "date": "2025-06-20",
          "category": "Marketing",
          "active": false,
          "completed": true,
          "new": false,
          "failed": false
        },
        {
          "title": "Fix Bug #120",
          "description": "Resolve login issue in mobile app",
          "date": "2025-06-22",
          "category": "Development",
          "active": false,
          "completed": false,
          "new": false,
          "failed": true
        },
        {
          "title": "Research Competitors",
          "description": "Analyze top 3 market players",
          "date": "2025-06-26",
          "category": "Research",
          "active": false,
          "completed": true,
          "new": false,
          "failed": false
        }
      ]
    },
    {
      "id": 102,
      "email": "jane.smith@example.com",
      "password": "Jane@123",
      "tasks": [
        {
          "title": "Design New Logo",
          "description": "Create logo variations",
          "date": "2025-06-23",
          "category": "Design",
          "active": true,
          "completed": false,
          "new": true,
          "failed": false
        },
        {
          "title": "Team Training",
          "description": "Conduct onboarding session",
          "date": "2025-06-19",
          "category": "HR",
          "active": false,
          "completed": true,
          "new": false,
          "failed": false
        },
        {
          "title": "Update Portfolio",
          "description": "Revise UI project showcase",
          "date": "2025-06-24",
          "category": "Design",
          "active": true,
          "completed": false,
          "new": true,
          "failed": false
        },
        {
          "title": "Draft Policy",
          "description": "Write remote work policy draft",
          "date": "2025-06-21",
          "category": "HR",
          "active": false,
          "completed": true,
          "new": false,
          "failed": false
        },
        {
          "title": "Feedback Analysis",
          "description": "Review recent client feedback",
          "date": "2025-06-20",
          "category": "Support",
          "active": false,
          "completed": true,
          "new": false,
          "failed": false
        }
      ]
    },
    {
      "id": 103,
      "email": "michael.lee@example.com",
      "password": "Mike@123",
      "tasks": [
        {
          "title": "Deploy Backend",
          "description": "Deploy backend API to production",
          "date": "2025-06-25",
          "category": "DevOps",
          "active": true,
          "completed": false,
          "new": true,
          "failed": false
        },
        {
          "title": "Monitor Logs",
          "description": "Track app logs for anomalies",
          "date": "2025-06-26",
          "category": "Monitoring",
          "active": true,
          "completed": false,
          "new": true,
          "failed": false
        },
        {
          "title": "Bug Triage",
          "description": "Prioritize open bugs",
          "date": "2025-06-21",
          "category": "Support",
          "active": false,
          "completed": false,
          "new": false,
          "failed": true
        },
        {
          "title": "Refactor API",
          "description": "Improve code quality of endpoints",
          "date": "2025-06-24",
          "category": "Development",
          "active": false,
          "completed": true,
          "new": false,
          "failed": false
        },
        {
          "title": "Write Test Cases",
          "description": "Cover all user authentication flows",
          "date": "2025-06-27",
          "category": "Testing",
          "active": true,
          "completed": false,
          "new": true,
          "failed": false
        }
      ]
    },
    {
      "id": 104,
      "email": "sarah.khan@example.com",
      "password": "Sarah@123",
      "tasks": [
        {
          "title": "Conduct Survey",
          "description": "Gather user feedback via online form",
          "date": "2025-06-29",
          "category": "Marketing",
          "active": true,
          "completed": false,
          "new": true,
          "failed": false
        },
        {
          "title": "Organize Files",
          "description": "Clean and archive old files",
          "date": "2025-06-18",
          "category": "Admin",
          "active": false,
          "completed": true,
          "new": false,
          "failed": false
        },
        {
          "title": "Post Social Media",
          "description": "Publish June wrap-up post",
          "date": "2025-06-28",
          "category": "Social Media",
          "active": true,
          "completed": false,
          "new": true,
          "failed": false
        },
        {
          "title": "Plan Event",
          "description": "Outline agenda for July meetup",
          "date": "2025-06-20",
          "category": "Events",
          "active": false,
          "completed": false,
          "new": false,
          "failed": true
        },
        {
          "title": "Follow Up Clients",
          "description": "Reach out to potential leads",
          "date": "2025-06-23",
          "category": "Sales",
          "active": false,
          "completed": true,
          "new": false,
          "failed": false
        }
      ]
    },
    {
      "id": 105,
      "email": "david.brown@example.com",
      "password": "David@123",
      "tasks": [
        {
          "title": "Backend Optimization",
          "description": "Speed up DB queries",
          "date": "2025-06-30",
          "category": "Development",
          "active": true,
          "completed": false,
          "new": true,
          "failed": false
        },
        {
          "title": "Revise Docs",
          "description": "Update developer documentation",
          "date": "2025-06-20",
          "category": "Documentation",
          "active": false,
          "completed": true,
          "new": false,
          "failed": false
        },
        {
          "title": "Security Audit",
          "description": "Review access logs and auth flow",
          "date": "2025-06-27",
          "category": "Security",
          "active": true,
          "completed": false,
          "new": true,
          "failed": false
        },
        {
          "title": "Fix UI Bugs",
          "description": "Correct layout issues on mobile",
          "date": "2025-06-21",
          "category": "Frontend",
          "active": false,
          "completed": true,
          "new": false,
          "failed": false
        },
        {
          "title": "Conduct Interview",
          "description": "Interview candidate for backend role",
          "date": "2025-06-26",
          "category": "HR",
          "active": false,
          "completed": false,
          "new": false,
          "failed": true
        }
      ]
    },
    {
      "id": 106,
      "email": "emma.jones@example.com",
      "password": "Emma@123",
      "tasks": [
        {
          "title": "Onboard Interns",
          "description": "Help new interns with setup",
          "date": "2025-06-22",
          "category": "HR",
          "active": false,
          "completed": true,
          "new": false,
          "failed": false
        },
        {
          "title": "Draft Newsletter",
          "description": "Write content for July newsletter",
          "date": "2025-06-28",
          "category": "Content",
          "active": true,
          "completed": false,
          "new": true,
          "failed": false
        },
        {
          "title": "Test Payment Flow",
          "description": "Verify transaction steps",
          "date": "2025-06-29",
          "category": "Testing",
          "active": true,
          "completed": false,
          "new": true,
          "failed": false
        },
        {
          "title": "SEO Audit",
          "description": "Improve website rankings",
          "date": "2025-06-26",
          "category": "Marketing",
          "active": false,
          "completed": true,
          "new": false,
          "failed": false
        },
        {
          "title": "Design Poster",
          "description": "Create poster for event",
          "date": "2025-06-23",
          "category": "Design",
          "active": false,
          "completed": false,
          "new": false,
          "failed": true
        }
      ]
    }
  ]
const admin =[
    {
    "id": 1,
    "email": "admin@example.com",
    "password": "Admin@123"
    },
]
export const setLocalStorage =()=>{
    localStorage.setItem("employees" , JSON.stringify(employees))
    localStorage.setItem("admin" , JSON.stringify(admin))
}
export const getLocalStorage =()=>{
   const employees= JSON.parse(localStorage.getItem("employees"));
   const admin= JSON.parse(localStorage.getItem("admin"));
}