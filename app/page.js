"use client";

import './globals.css';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isUserInteracting, setIsUserInteracting] = useState(false);

  const prompts = [
    "Generate a blog post on SEO good practices?",
    "Write a blog post on how to get backlinks?",
    "Blog post on how to get organic traffic?"
  ];

  useEffect(() => {
    let timeout;
    const currentPrompt = prompts[currentIndex];

    if (isUserInteracting) return;

    if (!isDeleting && text.length < currentPrompt.length) {
      timeout = setTimeout(() => {
        setText(currentPrompt.slice(0, text.length + 1));
      }, 6.25);
    } else if (!isDeleting && text === currentPrompt) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 3000);
    } else if (isDeleting && text.length > 0) {
      timeout = setTimeout(() => {
        setText(text.slice(0, -1));
      }, 6.25);
    } else if (isDeleting && text.length === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % prompts.length);
      }, 200);
    }

    if (!isDeleting && text === currentPrompt) {
      const cursorBlink = setInterval(() => {
        setShowCursor((prev) => !prev);
      }, 500);
      return () => clearInterval(cursorBlink);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, currentIndex, isUserInteracting]);

  const handleClick = () => {
    setIsUserInteracting(true);
    setText('');
    setIsDeleting(false);
    setCurrentIndex(0);
  };

  const handleInput = (e) => {
    setText(e.target.value);
  };

  const handleBlur = () => {
    if (text.trim() === '') {
      setIsUserInteracting(false);
      setText('');
      setIsDeleting(false);
      setCurrentIndex(0);
    }
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar-left">
          <div className="navbar-logo">
            <Image 
              src="/logo-trans.svg"
              alt="Rankowl Logo"
              width={36}
              height={36}
              priority
              style={{ width: '36px', height: '36px' }}
            />
          </div>
          <span style={{ fontSize: '1.3rem', fontWeight: 600, color: '#222', marginLeft: 10, letterSpacing: '0.01em' }}>Rankowl</span>
          <div className="navbar-links">
            <a href="#">Product</a>
            <a href="#">Resources</a>
            <a href="#">Pricing</a>
          </div>
        </div>
        <div className="navbar-actions">
          <a href="#">Login</a>
          <button className="cta">Get started</button>
        </div>
      </div>
      <div className="hero">
        <div className="hero-title">Generate SEO posts<br/>crafted with AI</div>
        <div className="hero-subtitle">Put keyword research, SERP Audit, SEO Audit,<br/> Content writing on Automation</div>
        <div className="hero-box" style={{ height: '50%' }}>
          <div className="hero-input-top">
            <textarea 
              key={prompts.join('')}
              className="hero-input" 
              value={isUserInteracting ? text : text + (showCursor ? '|' : '')}
              onChange={handleInput}
              onClick={handleClick}
              onBlur={handleBlur}
              style={{ 
                caretColor: isUserInteracting ? 'auto' : 'transparent',
                transition: 'none',
                animation: 'none',
                willChange: 'contents',
                color: isUserInteracting ? 'inherit' : '#808080',
                userSelect: 'none',
                WebkitUserSelect: 'none',
                MozUserSelect: 'none',
                msUserSelect: 'none',
                resize: 'none',
                outline: 'none',
                border: 'none',
                background: 'transparent',
                width: '100%',
                height: '100%',
                padding: '0'
              }}
            />
          </div>
          <div className="hero-bottom-row">
            <select className="hero-dropdown">
              <option>All sources</option>
            </select>
            <button className="hero-btn">Get Started &rarr;</button>
          </div>
        </div>
      </div>
      <div className="features-section">
        <div className="features-heading">
          <span>What's inside?</span>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon"><svg width="32" height="32" fill="none" stroke="#111" strokeWidth="2" viewBox="0 0 32 32"><circle cx="16" cy="16" r="14" /><circle cx="16" cy="16" r="5" /><circle cx="16" cy="7" r="1.5" /><circle cx="7" cy="25" r="1.5" /><circle cx="25" cy="25" r="1.5" /></svg></div>
            <div className="feature-title">Write in your language</div>
            <div className="feature-desc">Generate high-quality content in over <b>150+ languages</b>. Our AI creates articles in any language you need.</div>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><svg width="32" height="32" fill="none" stroke="#111" strokeWidth="2" viewBox="0 0 32 32"><circle cx="16" cy="16" r="14" /><path d="M10 22l12-12" /><path d="M10 10h12v12" /></svg></div>
            <div className="feature-title">Edit article with AI</div>
            <div className="feature-desc"><b>Easily edit your article</b> to meet your exact expectations, ensuring every word aligns with your vision for standout content.</div>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><svg width="32" height="32" fill="none" stroke="#111" strokeWidth="2" viewBox="0 0 32 32"><circle cx="16" cy="16" r="14" /><path d="M10 16h12" /><path d="M16 10v12" /></svg></div>
            <div className="feature-title">Generate unlimited keywords</div>
            <div className="feature-desc">Generate <b>unlimited sets of keywords</b> until you find the perfect match for your content</div>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><svg width="32" height="32" fill="none" stroke="#111" strokeWidth="2" viewBox="0 0 32 32"><circle cx="16" cy="16" r="14" /><rect x="10" y="10" width="12" height="12" rx="2" /></svg></div>
            <div className="feature-title">Multi-site package</div>
            <div className="feature-desc">Scale your content strategy by adding <b>more websites</b> to your package whenever needed.</div>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><svg width="32" height="32" fill="none" stroke="#111" strokeWidth="2" viewBox="0 0 32 32"><circle cx="16" cy="16" r="14" /><circle cx="12" cy="16" r="2" /><circle cx="20" cy="16" r="2" /><path d="M12 18v2M20 18v2" /></svg></div>
            <div className="feature-title">Multi-user access</div>
            <div className="feature-desc">Invite <b>multiple editors</b> to your organization and <b>collaborate seamlessly</b> to generate impactful content together</div>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><svg width="32" height="32" fill="none" stroke="#111" strokeWidth="2" viewBox="0 0 32 32"><circle cx="16" cy="16" r="14" /><path d="M16 10v8" /><circle cx="16" cy="22" r="1.5" /></svg></div>
            <div className="feature-title">Support</div>
            <div className="feature-desc">Get <b>expert assistance 24/7</b>, ensuring smooth operation of all platform features.</div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-columns">
            <div className="footer-col">
              <div className="footer-heading">ACCOUNT</div>
              <a href="#">Login</a>
              <a href="#">Free trial</a>
              <a href="#">Pricing</a>
            </div>
            <div className="footer-col">
              <div className="footer-heading">ABOUT</div>
              <a href="#">About</a>
              <a href="#">Newsroom</a>
              <a href="#">Terms of service</a>
              <a href="#">Privacy policy</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
} 