import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Samyak Jain - Frontend Engineer';
export const contentType = 'image/png';
export const size = { width: 1200, height: 630 };

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to bottom right, #0f172a, #1e3a8a)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: 80, fontWeight: 'bold', marginBottom: 20 }}>
          Samyak Jain
        </div>
        <div style={{ fontSize: 40, color: '#93c5fd' }}>
          Frontend Engineer
        </div>
      </div>
    ),
    { ...size }
  );
}
