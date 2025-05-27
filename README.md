# 🏥 Healthcare Dashboard

A modern, responsive healthcare management dashboard built with Next.js, React, and Tailwind CSS. This application provides a comprehensive interface for managing patient appointments, health metrics, and medical schedules.

## 🌟 Live Preview

**[View Live Demo →](https://healthcare-ahmad2shadabs-projects.vercel.app/)**

![Healthcare Dashboard Preview](https://sjc.microlink.io/Vokv0ifeYKwqfghw5LkhK8vtfrhRBwRGqv0Ir804KYqpJkKtPezBqveWpldiRxUm7Gg9llW56bJyBxe1eFz7vQ.jpeg)

## ✨ Features

### 📊 Dashboard Overview
- **Real-time Health Metrics**: Track lungs, teeth, and bone health with visual progress indicators
- **Interactive Anatomy Model**: 3D-style human anatomy visualization with health status indicators
- **Weekly Activity Chart**: Visual representation of appointment frequency and patterns

### 📅 Calendar & Scheduling
- **Smart Calendar View**: Weekly calendar with time slot management
- **Appointment Management**: Color-coded appointments with doctor details
- **Upcoming Schedule**: Organized view of upcoming medical appointments
- **Time Slot Visualization**: Easy-to-read time slots with availability status

### 🎨 Modern UI/UX
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Clean Interface**: Modern, medical-grade design with intuitive navigation
- **Smooth Animations**: Subtle transitions and hover effects for better user experience
- **Accessibility**: Built with accessibility best practices in mind

### 🔧 Navigation & Tools
- **Sidebar Navigation**: Organized sections for Dashboard, History, Calendar, Appointments, and Statistics
- **Search Functionality**: Quick search across the platform
- **Notification System**: Bell icon with notification indicators
- **User Profile**: Integrated user profile management

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Frontend**: [React 18](https://reactjs.org/) with TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) for responsive design
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) component library
- **Icons**: [Lucide React](https://lucide.dev/) for consistent iconography
- **Deployment**: [Vercel](https://vercel.com/) for seamless hosting

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/healthcare-dashboard.git
   cd healthcare-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
healthcare-dashboard/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
├── components/
│   ├── ui/                  # shadcn/ui components
│   ├── app.tsx              # Main app wrapper
│   ├── header.tsx           # Header with search and navigation
│   ├── sidebar.tsx          # Sidebar navigation
│   ├── dashboard-main-content.tsx
│   ├── anatomy-section.tsx  # 3D anatomy visualization
│   ├── health-status-cards.tsx
│   ├── calendar-view.tsx    # Calendar and appointments
│   ├── upcoming-schedule.tsx
│   └── activity-feed.tsx    # Weekly activity chart
├── public/
│   ├── icons/               # Custom icons and images
│   └── anatomy-figure.png   # Anatomy model image
└── ...config files
```

## 🎨 Design System

### Color Palette
- **Primary**: #272666 (Deep Blue)
- **Secondary**: #393873 (Purple Blue)  
- **Accent**: #3236AC (Bright Blue)
- **Light**: #DFE4FC (Light Purple)
- **Cyan**: #22D3EE (Cyan Accent)

### Typography
- **Font Family**: System fonts (-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto)
- **Responsive**: Scales appropriately across all device sizes

## 📱 Responsive Design

The dashboard is fully responsive and optimized for:
- **Desktop**: Full sidebar navigation with expanded layout
- **Tablet**: Collapsible sidebar with optimized grid layouts  
- **Mobile**: Hamburger menu with stacked components

## 🔧 Customization

### Adding New Components
1. Create component in `components/` directory
2. Follow the existing naming convention (kebab-case)
3. Import and use in the main layout

### Styling Guidelines
- Use Tailwind CSS utility classes
- Follow the established color scheme
- Maintain responsive design patterns
- Use shadcn/ui components when possible

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Deploy healthcare dashboard"
   git push origin main
   ```

2. **Connect to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Deploy with default settings

3. **Automatic Deployments**
   - Every push to main branch triggers a new deployment
   - Preview deployments for pull requests

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

If you have any questions or need help with setup, please open an issue in the GitHub repository.

---

**Built with ❤️ using Next.js and shadcn/ui**
```

This README provides a comprehensive overview of your healthcare dashboard project, including the live preview link, features, setup instructions, and technical details. It's structured to help both users and developers understand and work with your project effectively.
