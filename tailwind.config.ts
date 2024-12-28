import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	
  	extend: {
      backgroundImage: {
        registerBanner: "url('/register.png')",
        loginBanner: "url('/login.png')",
      },
      fontFamily: {
        sans: ["var(--font-chillax)"],
      },
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		  colors: {
			'turquoise-blue': {
				'50': '#edfefe',
				'100': '#d0fbfd',
				'200': '#a8f5f9',
				'300': '#64eaf4',
				'400': '#28d7e8',
				'500': '#0cbbce',
				'600': '#0d96ad',
				'700': '#12788c',
				'800': '#186072',
				'900': '#185061',
				'950': '#0a3542'
			},
			salmon: {
				'50': '#fef5f2',
				'100': '#fde9e3',
				'200': '#fdd6cb',
				'300': '#fabaa7',
				'400': '#f48564',
				'500': '#eb6d48',
				'600': '#ED3E09',
				'700': '#b6421f',
				'800': '#963a1e',
				'900': '#7d351f',
				'950': '#44180b'
			},
			rajah: {
				'50': '#fef8ee',
				'100': '#fdf0d7',
				'200': '#f9dcaf',
				'300': '#f4b864',
				'400': '#f19f46',
				'500': '#ed8422',
				'600': '#de6a18',
				'700': '#b85116',
				'800': '#934119',
				'900': '#763718',
				'950': '#401a0a'
			},
			'granny-smith': {
				'50': '#f4f7f7',
				'100': '#e2eaeb',
				'200': '#c9d8d8',
				'300': '#a3bbbd',
				'400': '#84a1a4',
				'500': '#5b7b7f',
				'600': '#4e676c',
				'700': '#44565a',
				'800': '#3d4a4d',
				'900': '#364143',
				'950': '#21282b'
			},
			white: 'white',
			black: 'black',
			transparent: 'transparent',
			inherit: 'inherit'
			,
			"section-dark": "#1A2F2C",
        "section-light": "#F0F7FF",
        accent: "#4ADE80",
        "accent-dark": "#2B9A5D",
        "accent-light": "#86EFAC",
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        }
      
		},
  	}
  },

  plugins: [require("tailwind-scrollbar-hide"), require("tailwindcss-animate")],
};
export default config;
