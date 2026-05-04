#  CRM Lead Management System

A full-stack CRM (Customer Relationship Management) web application to manage client leads generated from website contact forms.

---

##  Live Demo

- Frontend: https://future-fs-02-ruby.vercel.app/

---

##  Features

-  Add new leads (Name, Email, Source)
-  View all leads in a list
-  Update lead status (New / Contacted / Converted)
-  Add notes for follow-ups
-  Delete leads
-  Simple admin login system

---

##  Tech Stack

### Frontend:
- React.js
- HTML5
- CSS3
- Axios

### Backend:
- Node.js
- Express.js

### Database:
- MongoDB Atlas

---

##  Project Structure

crm-project/
│
├── client/        # React frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── LeadForm.js
│   │   │   ├── LeadList.js
│   │   │   └── Login.js
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
├── server/        # Node.js backend
│   ├── models/
│   │   └── Lead.js
│   ├── routes/
│   │   └── leadRoutes.js
│   ├── server.js
│   └── package.json
│
└── README.md

##  Admin Login

Username: admin  
Password: admin123

##  How It Works

- User logs in as admin
- Adds client leads
- Leads are stored in MongoDB
- Admin can update status and add notes
- Data is fetched via REST APIs

##  Future Enhancements

- JWT authentication
- Search & filter leads
- Email notifications
- Dashboard analytics