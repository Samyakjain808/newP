import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Samyak Jain - Full-Stack Developer & AI/ML Developer';
export const contentType = 'image/png';
export const size = { width: 1200, height: 630 };

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0a0f1c 0%, #0f172a 30%, #1a1040 60%, #0f172a 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Decorative top line */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4)',
            display: 'flex',
          }}
        />
        {/* Subtle glow behind name */}
        <div
          style={{
            position: 'absolute',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)',
            display: 'flex',
          }}
        />
        <div style={{ fontSize: 28, fontWeight: 500, color: '#94a3b8', marginBottom: 16, letterSpacing: '6px', textTransform: 'uppercase' as const }}>
          PORTFOLIO
        </div>
        <div style={{ fontSize: 76, fontWeight: 'bold', marginBottom: 24, letterSpacing: '-1px' }}>
          Samyak Jain
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ width: '40px', height: '2px', background: '#6366f1', display: 'flex' }} />
          <div style={{ fontSize: 32, color: '#a5b4fc', fontWeight: 500 }}>
            Full-Stack Developer & AI/ML Developer
          </div>
          <div style={{ width: '40px', height: '2px', background: '#6366f1', display: 'flex' }} />
        </div>
        {/* Bottom domain */}
        <div style={{ position: 'absolute', bottom: '40px', fontSize: 20, color: '#475569', letterSpacing: '2px', display: 'flex' }}>
          new-p-rho.vercel.app
        </div>
      </div>
    ),
    { ...size }
  );
}
