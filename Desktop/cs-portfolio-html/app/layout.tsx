import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ghadah Alammar - Computer Science Student",
  description: "Portfolio website for Ghadah Alammar, Computer Science student",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            document.addEventListener('DOMContentLoaded', function() {
              const hamburger = document.getElementById('hamburger');
              const navMenu = document.getElementById('nav-menu');

              if (hamburger && navMenu) {
                hamburger.addEventListener('click', () => {
                  hamburger.classList.toggle('active');
                  navMenu.classList.toggle('active');
                });
              }

              document.querySelectorAll('.nav-link').forEach(n => {
                if (n) {
                  n.addEventListener('click', () => {
                    if (hamburger && navMenu) {
                      hamburger.classList.remove('active');
                      navMenu.classList.remove('active');
                    }
                  });
                }
              });

              document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                  e.preventDefault();
                  const targetId = this.getAttribute('href');
                  if (targetId) {
                    const target = document.querySelector(targetId);
                    if (target) {
                      target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                      });
                    }
                  }
                });
              });

              window.addEventListener('scroll', () => {
                const navbar = document.querySelector('.navbar');
                if (navbar) {
                  if (window.scrollY > 100) {
                    navbar.style.background = 'rgba(248, 250, 252, 0.98)';
                    navbar.style.boxShadow = '0 2px 20px rgba(30, 58, 138, 0.1)';
                  } else {
                    navbar.style.background = 'rgba(248, 250, 252, 0.95)';
                    navbar.style.boxShadow = 'none';
                  }
                }
              });

              window.addEventListener('scroll', () => {
                const sections = document.querySelectorAll('section[id]');
                const navLinks = document.querySelectorAll('.nav-link');
                
                let current = '';
                sections.forEach(section => {
                  const sectionTop = section.offsetTop;
                  if (window.scrollY >= (sectionTop - 200)) {
                    current = section.getAttribute('id') || '';
                  }
                });
                
                navLinks.forEach(link => {
                  link.classList.remove('active');
                  const href = link.getAttribute('href');
                  if (href === \`#\${current}\`) {
                    link.classList.add('active');
                  }
                });
              });
            });
          `,
          }}
        />
      </body>
    </html>
  )
}
