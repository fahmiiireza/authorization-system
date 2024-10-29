# authorization-system || NOMOR 1

Documentation: Endpoints and How to Access Them

1. /admin – Admin-Only Route
- Access Policy:
  - Only users with the role 'Admin' can access this route.
  - Department, clearance level, and seniority do not matter.

Access Example:
http://localhost:3000/admin?username=adminHR
- Access Granted: adminHR (Admin role)
- Access Denied: Any other user without the Admin role (e.g., staffIT, managerFinance).

2. /hr-department – HR Department Route
- Access Policy:
  - Only users from the 'HR department' can access this route.
  - Role, clearance level, and seniority do not matter.

Access Example:
http://localhost:3000/hr-department?username=adminHR
- Access Granted: adminHR, managerHR
- Access Denied: staffIT, directorLegal

3. /finance-manager – Finance Manager Route
- Access Policy:
  - Only managers from the Finance department can access this route.
  - They must have at least 5 years of service.

Access Example:
http://localhost:3000/finance-manager?username=managerFinance
- Access Granted: managerFinance (7 years of service)
- Access Denied: staffFinance (not a manager), managerHR (not in Finance).

4. /it-clearance-2 – IT Clearance Route
- Access Policy:
  - Only users from the IT department with clearance level 2 or higher can access this route.
  - Role and seniority do not matter.

Access Example:
http://localhost:3000/it-clearance-2?username=staffIT
- Access Granted: No users initially meet this criteria (modify if needed).
- Access Denied: staffIT (clearance 1), managerFinance (not in IT).

5. /legal-director – Legal Director Route
- Access Policy:
  - Only directors from the Legal department with clearance level 3 can access this route.
  - Seniority does not matter.

Access Example:
http://localhost:3000/legal-director?username=directorLegal
- Access Granted: directorLegal
- Access Denied: managerHR (not a director or in Legal).

6. /ops-combined – Operations Combined Access Route
- Access Policy:
  - Only staff from the Operations department with clearance level 1 and less than 3 years of service can access.

Access Example:
http://localhost:3000/ops-combined?username=staffOps
- Access Granted: staffOps (clearance 1, 1 year service)
- Access Denied: staffFinance (not in Operations), managerHR (not staff).

7. /exec-clearance-3 – Executive High Clearance Route
- Access Policy:
  - Only managers or directors with clearance level 3 and at least 7 years of service can access.
  - Department does not matter.

Access Example:
http://localhost:3000/exec-clearance-3?username=directorLegal
- Access Granted: directorLegal (Director, clearance 3, 10 years service)
- Access Denied: managerFinance (clearance 2), staffOps (not a manager or director).
