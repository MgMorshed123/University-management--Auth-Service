# University Management System

![Project Logo](your-logo.png) <!-- Optional: Add a project logo -->

Welcome to the University Management System project. This system is designed to manage student, admin, and faculty roles, along with various functionalities for each role.

## Table of Contents

- [Roles](#roles)
- [Functional Requirements](#functional-requirements)
  - [Student](#student)
  - [Admin](#admin)
  - [Faculty](#faculty)
- [Permissions](#permissions)
- [Entities](#entities)
  - [User](#user)
  - [Student](#student)
  - [Admin](#admin)
  - [Faculty](#faculty)
- [API Endpoints](#api-endpoints)
- [Installation and Setup](#installation-and-setup)
- [Plans](#plans)
- [License](#license)

## Roles

1. Students
2. Admin
3. Faculty

## Functional Requirements

### Student

- Student can log in and log out.
- Students can manage and update their profile.
- Student can enroll in a semester.
- Student can enroll in offered courses for a specific semester.
- Student can pay their tuition fees through offline or online (Partial / Full Payment).
- Student can see their transaction histories.
- Student can see their class routines.
- Student can see their notice board and events.
- Student can see their results (Full / Semester Wise).
- Student can evaluate their teachers.

### Admin

- Admin can log in and log out.
- Admin can manage and update their profile.
- Admin can manage user accounts:
  - Block/Unblock
  - Change Password
  - Forcefully Log out
- Admin can manage multiple processes:
  - Semester
  - Offered Courses
  - Section
  - Faculty
  - Student
  - Building
  - Room
  - Payment
  - Permissions
  - Activity

### Faculty

- Faculty can log in and log out.
- Faculty can manage and update their profile.
- Faculty can manage user accounts.
- Faculty can manage student grades.
- Access to Academic and Personal Information.
- Faculty can manage their lecture resources.

## Permissions

### UserPermission

- permissionId
- userId

## Entities

### User

1. Id
2. Role
3. Password
4. CreatedAt
5. UpdatedAt
6. StudentId or AdminId or FacultyId

### Student

1. Id
2. Name (First Name, Middle Name, Last Name)
3. Gender
4. Date of Birth
5. Guardian
6. Contact Number
7. Emergency Contact Number
8. Email
9. Present Address
10. Permanent Address
11. Department
12. Subject

### Admin

1. Id
2. Name (First Name, Middle Name, Last Name)
3. Gender
4. Date of Birth
5. Email
6. Contact Number
7. Emergency Contact Number
8. Department
9. Designation

### Faculty

1. Id
2. Name (First Name, Middle Name, Last Name)
3. Gender
4. Date of Birth
5. Email
6. Contact Number
7. Emergency Contact Number
8. Department
9. Faculty
10. Designation

## API Endpoints

### User

- users/create-student (POST)
- users/create-faculty (POST)
- users/create-admin (POST)
- users/my-profile (GET)
- users/:id (GET)
- users/:id (PATCH)
- user/:id (DELETE)
- users/:id/force-logged-out
- users?page=1&limit=10 (GET)
- users/:id/available-permissions?page=1&limit=10 (GET)
- users/:id/assigned-permissions?page=1&limit=10 (GET)
- users/:id/assign-permissions (POST)
- users/:id/remove-permissions (POST)

### Student

- students?page=1&limit=10 (GET)
- students/:id (GET)
- students/:id (PATCH)

### Faculty

- faculties?page=1&limit=10 (GET)
- faculties/:id (GET)
- faculties/:id (PATCH)

### Admin

- admins?page=1&limit=10 (GET)
- admins/:id (GET)
- admin/:id (PATCH)

### Permission

- permissions?page=1&limit=10 (GET)
- permissions (POST)
- permissions/:id (GET)
- permissions/:id (PATCH)
- permissions/:id (DELETE)

### Auth

- auth/login (POST)
- auth/refresh-token (POST)
- auth/change-password (POST)
- auth/forgot-password (POST)
- auth/reset-password (POST)

## Installation and Setup

1. Clone the repository to your local machine.
2. Install project dependencies with `yarn install`.
3. Configure the project settings as needed.
4. Start the application with `yarn start`.

## Plans

1. Project Setup
2. Eslint & Prettier
3. Husky
4. .gitignore

## License
