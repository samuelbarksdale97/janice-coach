import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Taylor Your Leadership Coaching - Guiding you through life\'s transitions';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          backgroundColor: '#1e3a5f', // Primary blue color
          position: 'relative',
        }}
      >
        {/* Left side - Photo */}
        <div
          style={{
            width: '45%',
            height: '100%',
            display: 'flex',
            alignItems: 'flex-start', // Align to top to show face
            justifyContent: 'center',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://firebasestorage.googleapis.com/v0/b/studio-7158004547-ae16d.firebasestorage.app/o/Janice%20Headshot%204.jpeg?alt=media&token=0e26413e-9893-435f-b205-78f5cbd5b5af"
            alt="Janice Brown-Taylor"
            style={{
              width: '100%',
              height: '140%', // Larger than container to allow positioning
              objectFit: 'cover',
              objectPosition: 'center 15%', // Position face higher in frame
              marginTop: '-50px', // Shift image up
            }}
          />
        </div>

        {/* Right side - Text content */}
        <div
          style={{
            width: '55%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '40px 50px 40px 30px',
          }}
        >
          {/* Logo/Brand Name */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginBottom: '20px',
            }}
          >
            <span
              style={{
                fontSize: '28px',
                fontWeight: 'bold',
                color: '#c9a227', // Gold/secondary color
                letterSpacing: '2px',
                textTransform: 'uppercase',
              }}
            >
              Taylor Your Leadership
            </span>
            <span
              style={{
                fontSize: '42px',
                fontWeight: 'bold',
                color: 'white',
                marginTop: '5px',
              }}
            >
              Coaching
            </span>
          </div>

          {/* Tagline */}
          <p
            style={{
              fontSize: '24px',
              color: 'rgba(255, 255, 255, 0.9)',
              lineHeight: 1.4,
              marginTop: '20px',
            }}
          >
            Guiding you through life&apos;s transitions with professional coaching and support.
          </p>

          {/* Call to action hint */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginTop: '30px',
              padding: '12px 24px',
              backgroundColor: '#c9a227',
              borderRadius: '8px',
              width: 'fit-content',
            }}
          >
            <span
              style={{
                fontSize: '18px',
                fontWeight: 'bold',
                color: '#1e3a5f',
              }}
            >
              Book Your Free Discovery Call
            </span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
