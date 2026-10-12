'use client';

import { CSSProperties, useEffect, useId, useRef, useState } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

type Props = {
  title: string; description: string; link: string;
  imageUrl?: string; imageUrls?: string[];
  htmlPreview?: string; newTab?: boolean;
  skills: { url: string; title: string }[];
  tag?: string; tags?: { text: string; color: 'blue' | 'yellow' }[];
};

function themeFor(title: string) {
  if (title.includes('Chatbot')) return { kind: 'chat', accent: '#287ba0', wash: '#e1f2f4', label: 'Conversations that remember' };
  if (title.includes('News')) return { kind: 'news', accent: '#bf723d', wash: '#f8ede0', label: 'A little order in the noise' };
  if (title.includes('Personal')) return { kind: 'planner', accent: '#55734b', wash: '#e9f0df', label: 'Make room for what matters' };
  if (title.includes('Tournament')) return { kind: 'bracket', accent: '#8960ad', wash: '#eee5f6', label: 'Pick a side' };
  if (title.includes('Forecast')) return { kind: 'forecast', accent: '#227e88', wash: '#ddf0ec', label: 'Find the shape of tomorrow' };
  if (title.includes('NBA')) return { kind: 'basketball', accent: '#bd6534', wash: '#f8e8d8', label: 'Numbers meet the game' };
  return { kind: 'data', accent: '#506faa', wash: '#e6edf8', label: 'Build on solid foundations' };
}

export default function AnimatedProjectTile({ title, description, link, imageUrl, imageUrls, htmlPreview, newTab = false, skills, tag, tags }: Props) {
  const theme = themeFor(title);
  const [imageIndex, setImageIndex] = useState(0);
  const [touchActive, setTouchActive] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>();
  const previewId = useId();
  const images = imageUrls || (imageUrl ? [imageUrl] : []);
  const labels = tags || (tag ? [{ text: tag, color: 'blue' as const }] : []);
  const external = newTab || /^https?:\/\//.test(link);
  useEffect(() => () => clearTimeout(timer.current), []);

  return <article className={`animated-project-tile ${touchActive ? 'is-engaged' : ''}`} style={{ '--tile-accent': theme.accent, '--tile-wash': theme.wash } as CSSProperties}
    onPointerDown={(event) => { if (event.pointerType !== 'touch') return; setTouchActive(true); clearTimeout(timer.current); timer.current = setTimeout(() => setTouchActive(false), 1800); }}>
    {htmlPreview ? <a href={link} target="_blank" rel="noopener noreferrer" className="project-tile-gallery project-html-preview" aria-label={`Open ${title} (opens in a new tab)`}>
      <iframe src={htmlPreview} title={`${title} preview`} sandbox="" loading="lazy" tabIndex={-1} aria-hidden="true" />
    </a> : <div className="project-tile-gallery project-screenshot-scene" id={previewId}>
      <div className="project-screenshot-stack" aria-hidden="true">{images.slice(1, 3).map((src, index) => <img key={src} className={`project-screenshot-layer project-screenshot-layer-${index}`} src={src} alt="" loading="lazy" />)}</div>
      <img className="project-screenshot-main" src={images[imageIndex]} alt={`${title} screenshot ${imageIndex + 1} of ${images.length}`} />
      {images.length > 1 && <><button type="button" className="project-gallery-prev" aria-label={`Previous ${title} screenshot`} onClick={() => setImageIndex((imageIndex + images.length - 1) % images.length)}><ChevronLeft size={16} /></button><button type="button" className="project-gallery-next" aria-label={`Next ${title} screenshot`} onClick={() => setImageIndex((imageIndex + 1) % images.length)}><ChevronRight size={16} /></button><span className="project-gallery-count" aria-live="polite">{imageIndex + 1} / {images.length}</span></>}
    </div>}
    <a href={link} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className="project-tile-link" aria-label={`${title}${external ? ' (opens in a new tab)' : ''}`}>
      <div className="project-tile-title"><h3>{title}</h3><span className="project-open-arrow"><ArrowUpRight size={18} aria-hidden="true" /></span></div>
      <p>{description}</p>
    </a>
    <div className="project-tile-footer">
      <div className="project-tile-skills" aria-label="Built with">{skills.map((skill) => <img key={skill.url} src={skill.url} alt={skill.title} title={skill.title} loading="lazy" />)}</div>
      <span className="project-screenshot-label">{images.length > 1 ? `${images.length} screenshots` : 'Project preview'}</span>
    </div>
    {labels.length > 0 && <div className="project-tile-tags">{labels.map((label) => <span key={label.text} data-color={label.color}>{label.text}</span>)}</div>}
  </article>;
}

