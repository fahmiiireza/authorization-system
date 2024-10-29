

**Documentation: Google OAuth 2.0 Implementation in Express.js**

Overview:  
This application allows users to log in using their Google account through OAuth 2.0.  
After logging in, users will see their profile information displayed on a profile page.  
A logout option is provided to end the session and return to the home page.

---

1. **Setup Instructions:**

**1.1 Create Google Project and OAuth Credentials:**
- Go to https://console.cloud.google.com/apis/dashboard  
- Create a new project and enable the OAuth consent screen.  
- Create OAuth 2.0 credentials and set the redirect URI to:  
  ```
  http://localhost:3000/auth/google/callback
  ```  
- Save the **Client ID** and **Client Secret**.

**1.2 Install Project Dependencies:**
```bash
mkdir google-oauth-app && cd google-oauth-app  
npm init -y  
npm install express passport passport-google-oauth20 express-session ejs  
```

---

2. **Endpoints and Their Functions:**

**2.1 Home Route (`/`)**  
- Description: Displays the home page with an option to log in with Google.  
- Example: `http://localhost:3000/`

**2.2 Login Route (`/auth/google`)**  
- Description: Initiates the Google OAuth login flow.  
- Example: `http://localhost:3000/auth/google`

**2.3 Callback Route (`/auth/google/callback`)**  
- Description: Handles Google's response and redirects to the profile page on success.  
- Example: Automatically triggered by Google after login.

**2.4 Profile Route (`/profile`)**  
- Description: Displays the logged-in user's Google profile information.  
- Example: `http://localhost:3000/profile`  
- Access: Only accessible if the user is authenticated.

**2.5 Logout Route (`/logout`)**  
- Description: Ends the session and redirects to the home page.  
- Example: `http://localhost:3000/logout`

---

3. **Testing the Application:**

Step 1: Start the Application:  
```bash
node index.js
```

Step 2: Visit the Home Page:  
- URL: `http://localhost:3000/`  
- You should see the "Login with Google" link.

Step 3: Log in with Google:  
- Click the "Login with Google" link.  
- You will be redirected to Google's login page.

Step 4: Authorize the App:  
- Log in with your Google credentials.  
- On success, you will be redirected to the profile page.

Step 5: View Profile Information:  
- Confirm that your name, email, and profile picture are displayed.

Step 6: Logout:  
- Click the "Logout" link on the profile page.  
- You should be redirected to the home page.

Step 7: Access Control Check:  
- Try visiting `http://localhost:3000/profile` directly after logging out.  
- You should be redirected to the home page since you are no longer authenticated.

---

4. **Troubleshooting:**  
- If you encounter "Invalid Redirect URI", ensure the redirect URI matches what is configured in Google Developer Console.  
- If the login fails, check that your Client ID and Client Secret are correct.  
- If the profile page doesn’t display, ensure the user object is correctly serialized and deserialized.

---

5. **Conclusion:**  
This implementation demonstrates how to integrate Google OAuth 2.0 in an Express.js application.  
The application provides secure login, profile rendering, and session management using Passport.js and Express sessions.

