import { useEffect, useRef, useState } from 'react';
import { IMAGE_IMPORTS, LEAF_CHARS, SECTIONS } from '../data/content';

export function usePortfolio() {
  const containerRef  = useRef(null);
  const [activeSection, setActiveSection] = useState(0);
  const [leaves,        setLeaves]        = useState([]);
  const [images,        setImages]        = useState({});

  useEffect(() => {
    // Feuilles tombantes
    setLeaves(
      Array.from({ length: 12 }, (_, i) => ({
        id:       i,
        left:     `${5 + Math.random() * 88}%`,
        delay:    `${Math.random() * 16}s`,
        duration: `${9 + Math.random() * 8}s`,
        size:     `${1.1 + Math.random() * 1.1}rem`,
        char:     LEAF_CHARS[Math.floor(Math.random() * LEAF_CHARS.length)],
      }))
    );

    // Images optionnelles — silencieux si fichier absent
    IMAGE_IMPORTS.forEach(([key, load]) => {
      load()
        .then(m => setImages(prev => ({ ...prev, [key]: m.default })))
        .catch(() => {});
    });

    const container = containerRef.current;
    if (!container) return;

    // Suivi de section active (dots de navigation)
    const onScroll = () => {
      const idx = Math.round(container.scrollTop / container.clientHeight);
      setActiveSection(Math.min(idx, SECTIONS.length - 1));
    };
    container.addEventListener('scroll', onScroll, { passive: true });

    // Animations d'entrée — IntersectionObserver sur chaque section
    const animObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (isIntersecting) {
            target.querySelectorAll('.section-animate').forEach(el => el.classList.add('is-visible'));
          }
        });
      },
      { threshold: 0.2 }
    );

    ['iceberg', 'naos', 'hsp', 'about', 'contact'].forEach(id => {
      const el = container.querySelector(`#${id}`);
      if (el) animObserver.observe(el);
    });

    return () => {
      container.removeEventListener('scroll', onScroll);
      animObserver.disconnect();
    };
  }, []);

  function scrollTo(id) {
    containerRef.current?.querySelector(`#${id}`)?.scrollIntoView({ behavior: 'smooth' });
  }

  return { containerRef, activeSection, leaves, images, scrollTo };
}
