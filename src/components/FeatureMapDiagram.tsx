import React from 'react';
import { Circle, ThumbsUp, FileText, Filter, BarChart2, Layout, Keyboard } from 'lucide-react';

const containerSizePx = 500;
const radiusPx = 200;

export default function FeatureMapDiagram(): JSX.Element {
  const features = [
    { icon: <Layout size={28} />, label: 'Unified Data View', blurb: 'All relevant information is displayed together, reducing context switching.' },
    { icon: <Keyboard size={28} />, label: 'Keyboard Shortcuts', blurb: 'Hotkeys let analysts quickly submit feedback and move between traces.' },
    { icon: <ThumbsUp size={28} />, label: 'Binary Scoring', blurb: 'A simple thumbs-up/thumbs-down or pass/fail scoring system.' },
    { icon: <FileText size={28} />, label: 'Free-Form Notes', blurb: 'Analysts can leave open-ended feedback to capture nuanced issues.' },
    { icon: <Filter size={28} />, label: 'Filtering & Sorting', blurb: 'Helps analysts select which data to review efficiently.' },
    { icon: <BarChart2 size={28} />, label: 'Progress Indicator', blurb: 'Shows progress through the dataset and how many traces remain.' },
    { icon: <Circle size={28} />, label: 'Context-Dependent Data', blurb: 'Inputs/outputs are formatted like production for familiarity.' },
  ];

  return (
    <div style={styles.wrapper}>
      <div style={{ ...styles.diagram, width: containerSizePx, height: containerSizePx }}>
        <div style={styles.centerNode}>Effective Human Review Interface</div>
        {features.map((f, i) => {
          const angle = (i / features.length) * 2 * Math.PI;
          const x = radiusPx * Math.cos(angle);
          const y = radiusPx * Math.sin(angle);

          const horizDominant = Math.abs(x) > Math.abs(y);
          let tooltipPlacement: React.CSSProperties = {};
          if (horizDominant) {
            tooltipPlacement = x > 0
              ? { left: '100%', marginLeft: 8, top: '50%', transform: 'translateY(-50%)' }
              : { right: '100%', marginRight: 8, top: '50%', transform: 'translateY(-50%)' };
          } else {
            tooltipPlacement = y > 0
              ? { bottom: '100%', marginBottom: 8, left: '50%', transform: 'translateX(-50%)' }
              : { top: '100%', marginTop: 8, left: '50%', transform: 'translateX(-50%)' };
          }

          return (
            <div
              key={f.label}
              className="radial-feature"
              style={{
                ...styles.feature,
                top: `calc(50% + ${y}px)`,
                left: `calc(50% + ${x}px)`,
              }}
            >
              <div style={styles.icon} className="feature-icon" tabIndex={0}>
                {f.icon}
                <div className="feature-tooltip" style={{ ...styles.tooltip, ...tooltipPlacement }}>{f.blurb}</div>
              </div>
              <span style={styles.label}>{f.label}</span>
            </div>
          );
        })}
      </div>
      <style>
        {`
        .feature-tooltip { display: none; }
        .feature-icon:hover .feature-tooltip, .feature-icon:focus-within .feature-tooltip { display: block; }
        .radial-feature:hover { z-index: 3; }
        // .feature-icon:hover { z-index: 10000; }
        `}
      </style>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '50vh',
    background: 'transparent',
  },
  diagram: {
    position: 'relative',
    borderRadius: '50%',
  },
  centerNode: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 192,
    height: 192,
    borderRadius: '50%',
    background: '#264C5A',
    color: '#FFFFFF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 16,
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    fontWeight: 600,
    // zIndex: 1,
  },
  feature: {
    position: 'absolute',
    width: 128,
    textAlign: 'center',
    transform: 'translate(-50%, -50%)',
    // zIndex: 2,
  },
  icon: {
    width: 64,
    height: 64,
    borderRadius: '50%',
    background: '#FFFFFF',
    color: '#264C5A',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 8px auto',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    position: 'relative',
    cursor: 'pointer',
    // zIndex: 3,
  },
  label: {
    fontSize: 14,
    fontWeight: 500,
    color: 'var(--gray-700)',
  },
  tooltip: {
    position: 'absolute',
    width: 192,
    background: '#FFFFFF',
    color: '#264C5A',
    fontSize: 12,
    padding: 8,
    borderRadius: 6,
    border: '1px solid var(--gray-200)',
    boxShadow: '0 6px 18px rgba(0,0,0,0.15)',
  },
};


