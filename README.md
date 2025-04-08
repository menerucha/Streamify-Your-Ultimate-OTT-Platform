
# 🎬 **Streamify: Your Ultimate OTT Platform**

**Streamify** is your go-to OTT platform for a **seamless movie-watching experience**. Whether you're up for a solo movie night or a weekend family marathon, Streamify makes it easy to **browse, watch, and manage your favorites** all in one place.

---

## 🌟 **Weekend Movie Marathon with Streamify**  
**Jane's Experience:**

Jane logs into **Streamify**, browses the **"Movies" section**, and adds a new **action movie to her favorites** after watching its trailer. The next morning, she explores **classic movies using the search feature** and watches one **without interruptions**. Later, she receives a **movie recommendation**, adds it to her **watchlist**, and ends the day enjoying a **family-friendly movie** with her loved ones, creating **lasting memories**.

---

## ⚙️ **Technical Architecture**

The architecture of Streamify follows a **client-server model**, ensuring **smooth interactions** and **scalable performance**.

### 🔹 **Frontend – React.js**
- Built using **React.js**
- **Axios** for API calls  
**Features:**
- **User Authentication**
- **Watchlist Management**
- **Top Rated**, **Upcoming**, and **Trending Movies**
- **Favorites Section**
- **Responsive UI** for mobile and desktop

### 🔹 **Backend – Node.js + Express.js**
- Built with **Express.js**
- Implements **RESTful APIs**
- Handles **user operations**, **movie data**, **favorites**, **reviews**, and more

### 🔹 **Database – MongoDB**
- Stores:
  - **User Profiles**
  - **Favorites**
  - **Reviews & Watchlists**
- **Scalable**, **efficient**, and **NoSQL**-based

---

## 🔑 **Environment Setup**

Before running the app, configure your environment variables properly.

### 1. **Clone the Repository**
```bash
git clone https://github.com/menerucha/https---github.com-menerucha-Streamify-Your-Ultimate-OTT-Platform.git
cd Streamify-Your-Ultimate-OTT-Platform
```

### 2. **Set Up Environment Variables**

Create a `.env` file in both the **backend** and **frontend** directories.

#### 📂 **Backend `.env`**
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
MOVIE_API_KEY=your_movie_api_key_here
JWT_SECRET=your_jwt_secret_key
```

#### 📂 **Frontend `.env`**
```env
REACT_APP_API_BASE_URL=http://localhost:5000/api
REACT_APP_MOVIE_API_KEY=your_movie_api_key_here
```

> Replace:
> - `your_mongodb_connection_string` with your **MongoDB URI**
> - `your_movie_api_key_here` with your **TMDB (or other) movie API key**
> - `your_jwt_secret_key` with a strong **JWT secret**

---

## 🚀 **Running the App**

### 🔧 **Backend**

cd backend
npm install
npm start
```

### 💻 **Frontend**

cd frontend
npm install
npm start
```
Your app will be live at: [http://localhost:3000](http://localhost:3000)

---

## 🧪 **Features**
- 🎥 **Movie Search, Filter & Recommendations**
- 📝 **User Reviews and Ratings**
- ❤️ **Add to Favorites & Watchlist**
- 👥 **User Authentication (Login/Register)**
- 🔒 **Secure Routes using JWT**
- 🌐 **Real-time API Integration**
- 📱 **Mobile-Responsive Design**

---

## 📦 **Tech Stack**
- **Frontend:** React.js, Axios, CSS  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Authentication:** JWT  
- **Movie Data:** TMDB API (or similar)

---

## 💡 **Future Enhancements**
- 🤖 **Personalized Recommendation Engine**
- 🛠️ **Admin Dashboard for Movie Management**
- 💳 **Payment Gateway for Premium Access**
- 🔗 **Social Media Integration for Sharing**

---

## 📬 **Contact**
**Rucha Mene**  
📎 [LinkedIn](https://www.linkedin.com/in/ruchamene)  
💻 [GitHub](https://github.com/menerucha)
