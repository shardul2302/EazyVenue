
# Mini Venue Booking Dashboard

A basic Node.js + MongoDB project where:

* Admin can:

  * Add venues
  * Block dates
* User can:

  * View venues
  * Book venues

---

## 📂 Tech Stack

* Backend: Node.js, Express.js, MongoDB, Mongoose
* Frontend: HTML, CSS, JavaScript (Plain)
* Auth: JWT + Role-Based Access Control (Admin/User)

---

## ✅ How to Run

1. Clone this repo
2. Install dependencies:

   ```
   npm install
   ```
3. Create `.env` file:

   ```
   MONGO_URI=mongodb://localhost:27017/venueDashboard
   JWT_SECRET=your_secret
   ```
4. Start the server:

   ```
   npm run dev
   ```
5. Open frontend files from `/public` in the browser.

---
Project Demo Screenshots

<img width="1358" height="682" alt="Screenshot 2025-07-17 234004" src="https://github.com/user-attachments/assets/a8fce873-0820-4107-ba9a-d978ff2beb70" />
<img width="1365" height="687" alt="Screenshot 2025-07-17 233826" src="https://github.com/user-attachments/assets/88b9e538-71fe-46d5-9ef4-ec183d81cde5" />
<img width="1357" height="622" alt="Screenshot 2025-07-17 233716" src="https://github.com/user-attachments/assets/856ed5d8-5742-41d2-bb49-f6fc234cc33c" />
<img width="861" height="547" alt="Screenshot 2025-07-17 233510" src="https://github.com/user-attachments/assets/1161fa80-3c66-4dca-9fe0-e6500540a812" />
<img width="1353" height="634" alt="Screenshot 2025-07-17 233337" src="https://github.com/user-attachments/assets/4b8dd288-2695-4095-99bf-c62b67e3363a" />
<img width="1363" height="362" alt="Screenshot 2025-07-17 233253" src="https://github.com/user-attachments/assets/c9c16b6b-af21-4f94-b98b-cea0ffb62f1b" />
<img width="1349" height="572" alt="Screenshot 2025-07-17 233204" src="https://github.com/user-attachments/assets/bc3b78e3-f0ab-4c84-b39c-701b9dc9b180" />
<img width="1362" height="682" alt="Screenshot 2025-07-17 233035" src="https://github.com/user-attachments/assets/8c81a4da-984e-4917-8bc6-832696506344" />
<img width="972" height="604" alt="newuser_create" src="https://github.com/user-attachments/assets/9db4cf72-1f2e-4186-af5e-d87b16a6a5bc" />



## 💡 Future Ideas

* User search history
* Admin analytics dashboard
* Calendar view for venue availability
* Login system with forgot password
