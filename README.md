# Facebook Clone - Full-Featured Social Media Application

A complete Facebook clone built with React, Vite, and IndexedDB featuring modern social networking capabilities.

## 🎯 Recent Fixes & Enhancements (Latest Update)

### ✅ Fixed Issues

- **Search Button UI Fix**: Resolved critical mobile layout issue where clicking search button would destroy the UI layout
  - Fixed absolute positioning causing layout shifts on mobile
  - Implemented proper responsive positioning strategy
  - Ensured search modal displays correctly on all screen sizes

### 🎨 UI/UX Enhancements

- Added hover scale animations to post action buttons (Like, Comment, Send, Share)
- Improved visual feedback with better color contrast and font weights
- Enhanced button transitions for smoother user interactions
- Better styling for engagement metrics (likes, comments, shares)

## 📱 Core Features

### User Authentication

- User signup and login functionality
- Secure password handling
- User profile management
- Session persistence with IndexedDB

### Posts & Content

- Create text posts with formatting
- Share photos with posts
- Live video streaming indicators
- Post feelings/emotions
- Tag friends in posts
- Location tagging
- Cover photo support
- Post editing and deletion
- Hide posts from timeline

### Social Interactions

- **Like System**: Like posts with visual emoji feedback (Like, Love, Wow)
- **Comments**: Add public comments to posts
- **Replies**: Reply to comments with nested threading
- **Shares**: Share posts with friends
- **WhatsApp Integration**: Share posts directly via WhatsApp
- **Copy Link**: Easy post URL sharing

### User Profiles

- Complete profile pages with posts, photos, videos, friends, and about tabs
- Profile picture and cover photo customization
- Bio/About information editing
- Friend list management
- Friends tab showing all connections

### Friend Management

- Send and receive friend requests
- Accept/decline friend requests
- View friend list
- Friend suggestions

### Notifications

- Real-time notification count badge
- Notification center
- Different notification types (likes, comments, friend requests)

### Media Management

- Photo gallery with infinite scrolling
- Video library and watch page
- Image upload and storage
- Media display with optimized sizing

### Search & Discovery

- User search with live results
- Search suggestions based on first name
- Mobile-friendly search interface

### Messaging

- Facebook Messenger integration
- Quick access to messenger

## 🛠 Tech Stack

- **Frontend**: React 18.3.1
- **Build Tool**: Vite 5.4.10
- **Routing**: React Router 7.0.1
- **Icons**: React Icons 5.3.0
- **Security**: DOMPurify 3.2.1 (XSS protection)
- **Database**: Firebase & IndexedDB
- **Styling**: CSS Modules with responsive design

## 📊 Project Structure

```
src/
├── components/       # Reusable React components
├── pages/           # Page components (Home, Profile, Watch)
├── context/         # Post context and state management
├── hooks/           # Custom React hooks
├── utils/           # Utility functions
└── assets/          # Static assets
```

## 🎮 Key Components

- **Header**: Navigation with search, notifications, and profile menu
- **CreatePost**: Post creation modal with multiple content types
- **Post**: Individual post display with interactions
- **PostList**: Feed of posts from users
- **UserProfile**: Complete user profile page
- **AuthContext**: Login/signup authentication
- **HeaderModal**: Notifications and messenger panels

## 💻 Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm preview

# Lint code
npm run lint
```

## ✨ Features Highlights

✅ Fully responsive design (mobile, tablet, desktop)
✅ Real-time post interactions
✅ Nested comment threads
✅ Profile customization
✅ Friend management system
✅ Search functionality
✅ Engagement metrics
✅ XSS protection with DOMPurify
✅ Mobile bottom navigation
✅ Toast notifications for user feedback

## 🔒 Security

- XSS protection via DOMPurify sanitization
- Safe HTML rendering in posts and comments
- User input validation

## 📝 License

This project is a learning demonstration of full-stack social media application development.
