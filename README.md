# 📰 News App - Technical Assessment

A modern, full-featured news application built with React, Vite, and Tailwind CSS. Features user authentication, infinite scroll news feed, and real-time news data from NewsData.io API.

## ✨ Features

- **User Authentication**: Beautiful login form with validation
- **Infinite Scroll**: Seamlessly load more articles as you scroll
- **Real-time News**: Fetch latest news from NewsData.io API
- **Responsive Design**: Works perfectly on all devices
- **Professional UI**: Modern, attractive interface with smooth animations
- **Local Storage**: Persists login data and displays in console as JSON
- **Error Handling**: Graceful error management and user feedback

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/MAHESHDHOLE1999/News_Application.git
cd NewsDataApplication
```

2. **Install dependencies**
```bash
npm install
```

3. **Get NewsData.io API Key**
   - Visit [https://newsdata.io](https://newsdata.io)
   - Sign up for a free account
   - Copy your API key from the dashboard

4. **Create environment file**
```bash
# Create .env file in root directory
echo "VITE_NEWS_API_KEY=your_api_key_here" > .env
echo "VITE_NEWS_API_URL=https://newsdata.io/api/1/latest" >> .env
```

5. **Start development server**
```bash
npm run dev
```

The application will open at `http://localhost:3000`

## 📁 Project Structure

```
news-app/
├── src/
│   ├── components/
│   │   ├── LoginForm.jsx          # Login form component
│   │   ├── NewsCard.jsx           # Individual news card
│   │   ├── NewsFeed.jsx           # Main feed with infinite scroll
│   │   └── Navbar.jsx             # Navigation bar
│   ├── stores/
│   │   └── authStore.js           # Zustand auth state management
│   ├── utils/
│   │   └── newsApi.js             # API service for news data
│   ├── App.jsx                    # Main app component
│   ├── App.css                    # Global styles
│   └── main.jsx                   # Entry point
├── public/
├── .env                           # Environment variables
├── .gitignore                     # Git ignore rules
├── vite.config.js                 # Vite configuration
├── tailwind.config.js             # Tailwind CSS config
├── package.json                   # Dependencies and scripts
└── README.md                      # This file
```

## 🔧 Configuration

### Vite Port Configuration
Port 3000 is automatically configured in `vite.config.js`:

```javascript
export default defineConfig({
  server: {
    port: 3000,
    open: true
  }
})
```

### Tailwind CSS
Tailwind is pre-configured with:
- Modern utility-first CSS
- Responsive design system
- Custom color schemes
- Smooth transitions and animations

## 📝 Usage

### Login Form
1. Enter your full name (minimum 1 character)
2. Enter a valid email address
3. Enter password (minimum 6 characters)
4. Click "Sign In"

**Login data is automatically:**
- Logged to browser console in JSON format
- Stored in localStorage
- Tagged with timestamp and unique login ID

### News Feed
1. After login, browse the infinite scroll news feed
2. Cards automatically load as you scroll down
3. Click on article titles to open full articles
4. Share articles using the share button

### Authentication State
- User state is managed with Zustand
- Persists across page refreshes
- Logout available in navbar

## 🔌 API Integration

### NewsData.io API
- **Endpoint**: `https://newsdata.io/api/1/latest`
- **Authentication**: API Key in query parameters
- **Rate Limit**: Check your plan at newsdata.io
- **Features**: Country-based filtering, pagination, search

## 📊 Login Data Format

When you log in, the following JSON is logged to console:

```json
{
  "fullName": "Mahesh Dhole",
  "email": "mahesh@example.com",
  "password": "hashed_or_plain",
  "timestamp": "2025-01-20T10:30:00.000Z",
  "loginId": "abc123xyz"
}
```

**Note**: For production, implement proper password hashing and never store plain passwords.

## 🎨 UI/UX Features

- **Gradient backgrounds** with modern color schemes
- **Smooth animations** on hover and scroll
- **Loading states** with skeleton screens
- **Error boundaries** with user-friendly messages
- **Responsive grid layout** adapting to all screen sizes
- **Accessible components** with proper ARIA labels
- **Dark mode ready** (can be extended)

## 🏗️ Build & Deployment

### Development Build
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deploy to GitHub Pages
```bash
npm run build
git add dist/
git commit -m "Build: Production ready"
git push origin main
```

## 🐛 Troubleshooting

### API Key Not Working
- Verify API key is correct in `.env`
- Check NewsData.io account is active
- Ensure API key has proper permissions

### Port 3000 Already in Use
```bash
# Kill process on port 3000
# On macOS/Linux:
lsof -ti:3000 | xargs kill -9

# On Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### News Not Loading
- Check browser console for errors
- Verify internet connection
- Check API rate limits at newsdata.io dashboard
- Ensure `.env` file is in root directory

## 📦 Dependencies

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "vite": "^4.0.0",
  "axios": "^1.4.0",
  "zustand": "^4.3.8",
  "react-infinite-scroll-component": "^6.1.0",
  "lucide-react": "^0.263.1",
  "tailwindcss": "^3.3.0"
}
```

## 🔐 Security Considerations

- Store API keys in environment variables only
- Use HTTPS in production
- Implement proper password hashing (bcrypt recommended)
- Add CORS configuration if needed
- Sanitize user inputs
- Implement rate limiting on login attempts

## 📈 Performance Optimizations

- Code splitting with Vite
- Image lazy loading
- Memoized components to prevent unnecessary re-renders
- Efficient state management with Zustand
- CSS-in-JS with Tailwind for optimized bundle size

## 🤝 Contributing

Feel free to fork this project and submit pull requests for improvements.

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Created for technical assessment - [Your Name]

## 📞 Support

For issues or questions:
1. Check the troubleshooting section
2. Review API documentation at newsdata.io
3. Open an issue on GitHub

---

**Happy Coding!** 🚀

Made with ❤️ using React + Vite + Tailwind CSS