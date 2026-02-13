import { useState, useCallback, useEffect, useRef } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import Section from '../components/Section'
import { useLanguage } from '../contexts/LanguageContext'

const MEDIA_FILES = [
  'WhatsApp Image 2026-02-13 at 20.01.16 (1).jpg',
  'WhatsApp Image 2026-02-13 at 20.01.16 (2).jpg',
  'WhatsApp Image 2026-02-13 at 20.01.16 (3).jpg',
  'WhatsApp Image 2026-02-13 at 20.01.16.jpg',
  'WhatsApp Image 2026-02-13 at 20.01.31 (1).jpg',
  'WhatsApp Image 2026-02-13 at 20.01.31 (2).jpg',
  'WhatsApp Image 2026-02-13 at 20.01.31.jpg',
  'WhatsApp Image 2026-02-13 at 20.01.33.jpg',
  'WhatsApp Image 2026-02-13 at 20.01.34.jpg',
  'WhatsApp Image 2026-02-13 at 20.01.38.jpg',
  'WhatsApp Video 2026-02-13 at 20.01.26.mp4',
  'WhatsApp Video 2026-02-13 at 20.01.30.mp4',
  'WhatsApp Video 2026-02-13 at 20.01.32.mp4',
  'WhatsApp Video 2026-02-13 at 20.01.36.mp4',
  'WhatsApp Video 2026-02-13 at 20.01.37.mp4',
  'hero.jpg',
  'experience.jpg',
]

const BASE = `${import.meta.env.BASE_URL}images/`

const isVideo = (filename: string) => /\.(mp4|webm|ogg)$/i.test(filename)

const SWIPE_THRESHOLD = 50

const Gallery = () => {
  const { t } = useLanguage()
  const [items, setItems] = useState<string[]>(() => MEDIA_FILES)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null)
  const touchStartX = useRef<number>(0)

  const handleDragStart = useCallback((index: number) => {
    setDraggedIndex(index)
  }, [])

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
  }, [])

  const handleDrop = useCallback(
    (dropIndex: number) => {
      if (draggedIndex === null || draggedIndex === dropIndex) return
      setItems((prev) => {
        const next = [...prev]
        const [removed] = next.splice(draggedIndex, 1)
        next.splice(dropIndex, 0, removed)
        return next
      })
      setDraggedIndex(null)
    },
    [draggedIndex]
  )

  const handleDragEnd = useCallback(() => {
    setDraggedIndex(null)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('gallery-lightbox-open', lightboxIndex !== null)
    return () => document.body.classList.remove('gallery-lightbox-open')
  }, [lightboxIndex])

  const goPrev = useCallback(() => {
    setLightboxIndex((i) => (i !== null && i > 0 ? i - 1 : i))
  }, [])

  const goNext = useCallback(() => {
    setLightboxIndex((i) => (i !== null && i < items.length - 1 ? i + 1 : i))
  }, [items.length])

  useEffect(() => {
    if (lightboxIndex === null) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goPrev()
      else if (e.key === 'ArrowRight') goNext()
      else if (e.key === 'Escape') setLightboxIndex(null)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [lightboxIndex, goPrev, goNext])

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }, [])

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      const delta = touchStartX.current - e.changedTouches[0].clientX
      if (delta > SWIPE_THRESHOLD) goNext()
      else if (delta < -SWIPE_THRESHOLD) goPrev()
    },
    [goPrev, goNext]
  )

  return (
    <Section id="gallery">
      <h2>{t.gallery.title}</h2>
      <p className="gallery__hint">{t.gallery.hint}</p>
      <div className="gallery__grid">
        {items.map((filename, index) => (
          <div
            key={filename}
            className={`gallery__item ${draggedIndex === index ? 'gallery__item--dragging' : ''}`}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(index)}
            onDragEnd={handleDragEnd}
          >
            <button
              type="button"
              className="gallery__thumb"
              onClick={() => setLightboxIndex(index)}
              aria-label={t.gallery.viewFull}
            >
              {isVideo(filename) ? (
                <video src={BASE + filename} preload="metadata" muted playsInline />
              ) : (
                <img src={BASE + filename} alt="" loading="lazy" />
              )}
              {isVideo(filename) && <span className="gallery__play" aria-hidden>▶</span>}
            </button>
          </div>
        ))}
      </div>

      {lightboxIndex !== null && (
        <div
          className="gallery__lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={t.gallery.viewFull}
          onClick={() => setLightboxIndex(null)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button
            type="button"
            className="gallery__lightbox-close"
            onClick={() => setLightboxIndex(null)}
            aria-label={t.gallery.close}
          >
            ×
          </button>
          {lightboxIndex > 0 && (
            <button
              type="button"
              className="gallery__lightbox-prev"
              onClick={(e) => {
                e.stopPropagation()
                goPrev()
              }}
              aria-label={t.gallery.prev}
            >
              <FiChevronLeft size={32} />
            </button>
          )}
          {lightboxIndex < items.length - 1 && (
            <button
              type="button"
              className="gallery__lightbox-next"
              onClick={(e) => {
                e.stopPropagation()
                goNext()
              }}
              aria-label={t.gallery.next}
            >
              <FiChevronRight size={32} />
            </button>
          )}
          <div className="gallery__lightbox-content" onClick={(e) => e.stopPropagation()}>
            {isVideo(items[lightboxIndex]) ? (
              <video
                key={items[lightboxIndex]}
                src={BASE + items[lightboxIndex]}
                controls
                autoPlay
                className="gallery__lightbox-video"
              />
            ) : (
              <img
                key={items[lightboxIndex]}
                src={BASE + items[lightboxIndex]}
                alt=""
                className="gallery__lightbox-img"
              />
            )}
          </div>
        </div>
      )}
    </Section>
  )
}

export default Gallery
