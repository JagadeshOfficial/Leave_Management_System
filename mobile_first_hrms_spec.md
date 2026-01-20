# Mobile-First HRMS (Salarybox-Inspired) – Frontend & Backend Design Document

## 1. Purpose of This Document
This document is intended to be used as a clear development input for Antigravity (engineering/design team) to build a Salarybox-inspired HRMS focused on Indian SMEs and field-force-heavy organizations.

The platform is mobile-first, payroll-driven, and deeply integrated with biometric/RFID attendance and geo-tracking.

## 2. Target Users & Use Cases
### Target Companies
- Indian SMEs (20–2,000 employees)
- Manufacturing, Logistics, Retail, Construction, Sales Field Teams

### Primary Users
- Employees / Field Staff
- HR Executives
- Payroll Admins
- Managers / Supervisors

## 3. Core Functional Modules
1.  **Employee Management**
2.  **Attendance & Biometric Integration**
3.  **Geo-Tracking & Field Force Monitoring**
4.  **Payroll & Statutory Compliance**
5.  **Leave & Overtime Management**
6.  **Mobile App (Employee Self-Service)**
7.  **Reports & Dashboards**

---

# FRONTEND DESIGN DOCUMENT

## 4. Frontend Architecture
### 4.1 Architecture Style
- Mobile-first
- Component-based architecture
- API-driven UI

### 4.2 Technology Stack
- **Web App:**
    - React.js (TypeScript)
    - Tailwind CSS / Material UI
    - Redux / Zustand (state management)
- **Mobile App:**
    - React Native (Android priority)
    - Offline-first support
    - Push notifications (Firebase)

## 5. Frontend Applications

### 5.1 Employee Mobile App (Primary)
**Key Screens:**
- Login (OTP + Password)
- Home Dashboard
- Punch In / Punch Out
- Geo-location map
- Attendance history
- Leave request & status
- Payslip download
- Notifications

**Special Features:**
- GPS validation during punch-in
- Offline punch storage & sync
- Biometric validation (device-based)

### 5.2 HR / Admin Web Portal
**Key Screens:**
- Company dashboard
- Employee master
- Shift & attendance rules
- Payroll configuration
- Leave & overtime approvals
- Reports & exports

### 5.3 Manager App / Portal
- Team attendance view
- Real-time location view
- Approval workflows
- Productivity summary

## 6. Frontend Non-Functional Requirements
- App launch < 3 seconds
- Offline mode for attendance
- Responsive UI (mobile + tablet)
- Localization (English + Indian languages)

---

# BACKEND DESIGN DOCUMENT

## 7. Backend Architecture
### 7.1 Architecture Style
- Microservices-based
- REST API-first
- Multi-tenant SaaS

### 7.2 Technology Stack
- Java 17 + Spring Boot
- Spring Security (JWT + OAuth2)
- PostgreSQL (primary DB)
- Redis (cache)
- Kafka / RabbitMQ (events)

## 8. Core Backend Services
1.  **Auth & Identity Service**
2.  **Employee Service**
3.  **Attendance Service**
4.  **Geo-Tracking Service**
5.  **Payroll Service**
6.  **Leave & Overtime Service**
7.  **Notification Service**
8.  **Reporting Service**

## 9. Attendance & Biometric Integration
**Supported Devices:** ZKTeco, eSSL, Suprema
**Integration Approach:** Device → Local Agent → Cloud API (Scheduled sync + real-time events)
**Attendance Logic:**
- Validate device ID
- Validate geo-fence (if enabled)
- Store raw punches
- Convert to attendance records

## 10. Geo-Tracking Design
- GPS capture during punch-in/out
- Background location tracking (optional)
- Geo-fence configuration per site
- Map visualization (Google Maps API)

## 11. Payroll & Compliance Engine (India)
**Payroll Components:** Basic, HRA, Allowances, Deductions, Overtime
**Statutory Support:** PF, ESI, PT, TDS

## 12. Data Model (High-Level)
- Tenant
- User
- Employee
- AttendancePunch
- AttendanceDay
- GeoLocation
- Shift
- PayrollRun
- Payslip
- LeaveRequest

## 13. API Design (Sample)
**Authentication**
- `POST /api/auth/login`
- `POST /api/auth/otp`

**Attendance**
- `POST /api/attendance/punch`
- `GET /api/attendance/history`

**Payroll**
- `POST /api/payroll/run`
- `GET /api/payroll/payslip/{employeeId}`

## 14. Security & Compliance
- Role-Based Access Control (RBAC)
- Encrypted biometric data
- Audit logs
- Data residency (India)

## 15. Development Phases
**Phase 1 – MVP (3 Months):** Employee master, Attendance (manual + biometric), Mobile app
**Phase 2 – Payroll (2 Months):** Payroll engine, Payslips, Compliance
**Phase 3 – Advanced (2 Months):** Geo-tracking, Reports, Device integrations

## 16. Why This Design Works (Salarybox Reference)
- Mobile-first for field teams
- Strong biometric + geo logic
- SME-friendly payroll focus
- Scalable SaaS-ready architecture
