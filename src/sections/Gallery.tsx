import { useState, useCallback, useEffect } from 'react'
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

const Gallery = () => {
  const { t } = useLanguage()
  const [items, setItems] = useState<string[]>(() => MEDIA_FILES)
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null)

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
    document.body.classList.toggle('gallery-lightbox-open', !!lightboxSrc)
    return () => document.body.classList.remove('gallery-lightbox-open')
  }, [lightboxSrc])

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
              onClick={() => setLightboxSrc(BASE + filename)}
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

      {lightboxSrc && (
        <div
          className="gallery__lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={t.gallery.viewFull}
          onClick={() => setLightboxSrc(null)}
        >
          <button
            type="button"
            className="gallery__lightbox-close"
            onClick={() => setLightboxSrc(null)}
            aria-label={t.gallery.close}
          >
            ×
          </button>
          {isVideo(lightboxSrc) ? (
            <video
              src={lightboxSrc}
              controls
              autoPlay
              className="gallery__lightbox-video"
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <img
              src={lightboxSrc}
              alt=""
              className="gallery__lightbox-img"
              onClick={(e) => e.stopPropagation()}
            />
          )}
        </div>
      )}
    </Section>
  )
}

export default Gallery
