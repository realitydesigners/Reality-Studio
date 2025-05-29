# Reality Studio

Reality Studio is an immersive 3D environment that helps users visualize and interact with their life domains. Built with Next.js, Three.js, and modern web technologies, it provides a unique way to explore and manage different aspects of your life.

## 🌟 Features

- **Interactive 3D Environment**: Navigate through your life domains in an immersive 3D space
- **Life Domain Visualization**: Each domain is represented as an interactive sphere with unique properties
- **Personalized Experience**: Customize your reality based on your personal information and goals
- **Smooth Animations**: Powered by Framer Motion for fluid transitions and interactions
- **Responsive Design**: Works seamlessly across different devices and screen sizes

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/realitystudio.git
cd realitystudio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) - React framework for production
- **3D Rendering**: [Three.js](https://threejs.org/) - 3D graphics library
- **3D Components**: [@react-three/fiber](https://github.com/pmndrs/react-three-fiber) - React renderer for Three.js
- **3D Utilities**: [@react-three/drei](https://github.com/pmndrs/drei) - Useful helpers for React Three Fiber
- **Animations**: [Framer Motion](https://www.framer.com/motion/) - Animation library
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **State Management**: Custom store with Zustand
- **Font**: [Geist](https://vercel.com/font) - Modern typeface by Vercel

## 📁 Project Structure

```
realitystudio/
├── app/                 # Next.js app directory
│   ├── environment/     # 3D environment page
│   └── onboarding/      # Onboarding flow
├── components/          # React components
│   └── onboarding/      # Onboarding-related components
├── lib/                 # Utility functions and store
├── public/             # Static assets
└── styles/             # Global styles
```

## 🔧 Development

### Key Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
NEXT_PUBLIC_API_URL=your_api_url
```

## 🚀 Deployment

The easiest way to deploy your Reality Studio app is to use the [Vercel Platform](https://vercel.com/new).

1. Push your code to a Git repository
2. Import your project to Vercel
3. Vercel will detect Next.js and set up the build configuration automatically

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Three.js](https://threejs.org/) for the 3D capabilities
- [Vercel](https://vercel.com) for the deployment platform
