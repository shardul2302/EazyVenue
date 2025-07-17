
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

## 💡 Future Ideas

* User search history
* Admin analytics dashboard
* Calendar view for venue availability
* Login system with forgot password
