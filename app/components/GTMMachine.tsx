'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Play, RotateCcw, Square } from 'lucide-react';

const stages = [
  { label: 'Awareness', title: 'Find the signal.', detail: 'Test the message, learn what resonates, and turn outbound activity into a useful signal.', system: 'Enrich · deduplicate', x: [96, 144, 192, 234], y: [142, 110, 134, 150] },
  { label: 'Qualified', title: 'Get the right lead to the right person.', detail: 'Qualification becomes useful when scoring, ownership, and routing work together. The funnel opens when the systems agree.', system: 'Score · route', x: [234, 274, 294, 352], y: [150, 170, 202, 201] },
  { label: 'Demo → deal', title: 'Make the handoffs work.', detail: 'A demo, an objection, a decision. Keep the CRM and the next action in step with the customer, so momentum survives the handoff.', system: 'Sync CRM · trigger handoff', x: [352, 432, 534, 570, 618, 690], y: [201, 199, 199, 158, 199, 199] },
  { label: 'Grow together', title: 'Build a relationship that compounds.', detail: 'The deal is the beginning. Connect onboarding, usage signals, and account health to timely action—and feed what you learn back into the system.', system: 'Onboard · monitor · learn', x: [690, 733, 773, 794], y: [199, 199, 180, 179] },
];
const STAGE_DURATION = 2200;
// One continuous curve keeps the deal moving across stage boundaries.
const DEAL_PATH = 'M96 142 C118 142 133 110 144 110 S176 123 192 134 L234 150 Q257 158 274 170 Q286 184 294 202 L352 201 L432 199 L534 199 C549 199 553 158 570 158 S600 199 618 199 L690 199 L733 199 Q754 199 773 180 L794 179';

export default function GTMMachine() {
  const [stage, setStage] = useState<number | null>(null);
  const [running, setRunning] = useState(false);
  const [runId, setRunId] = useState(0);
  const [arrived, setArrived] = useState(false);
  const coinAnimation = useRef<SVGElement | null>(null);
  const reduced = useReducedMotion();
  const viewport = useRef<HTMLDivElement>(null);
  const prefix = useId().replace(/:/g, '');
  const id = (name: string) => `${prefix}-${name}`;
  const paint = (name: string) => `url(#${id(name)})`;
  const active = stage === null ? null : stages[stage];
  const finished = stage === 3 && !running;

  useEffect(() => {
    if (!running || stage === null) return;
    let finishTimer: number | undefined;
    const timer = window.setTimeout(() => {
      if (stage === stages.length - 1) {
        setArrived(true);
        finishTimer = window.setTimeout(() => setRunning(false), 800);
      }
      else setStage(stage + 1);
    }, STAGE_DURATION);
    return () => { window.clearTimeout(timer); window.clearTimeout(finishTimer); };
  }, [running, stage, runId]);

  useEffect(() => {
    if (!running || reduced) return;
    const frame = window.requestAnimationFrame(() => {
      (coinAnimation.current as SVGAnimationElement | null)?.beginElement();
    });
    return () => window.cancelAnimationFrame(frame);
  }, [running, runId, reduced]);

  useEffect(() => {
    if (stage === null || !viewport.current) return;
    const element = viewport.current;
    const left = (stages[stage].x[0] / 900) * element.scrollWidth - element.clientWidth * .25;
    element.scrollTo({ left: Math.max(0, left), behavior: reduced ? 'auto' : 'smooth' });
  }, [stage, reduced]);

  function play() {
    setArrived(false);
    setStage(0);
    setRunId((value) => value + 1);
    setRunning(!reduced);
  }

  return (
    <section className="gtm-machine" aria-labelledby="gtm-machine-title">
      <div className="gtm-machine-heading">
        <div><p className="gtm-kicker">The systems behind growth</p><h2 id="gtm-machine-title">A little GTM machinery.</h2></div>
        <button type="button" className="gtm-play" onClick={running ? () => setRunning(false) : play}>
          {running ? <Square size={13} aria-hidden="true" /> : finished ? <RotateCcw size={15} aria-hidden="true" /> : <Play size={15} aria-hidden="true" />}
          {running ? 'Stop' : reduced ? 'Explore the system' : finished ? 'Run it again' : 'Run the system'}
        </button>
      </div>
      <div className="gtm-stage-controls" role="group" aria-label="Explore the customer journey">
        {stages.map((item, index) => <button type="button" key={item.label} aria-pressed={stage === index} onClick={() => { setArrived(false); setRunning(false); setStage(index); setRunId((value) => value + 1); }}><span className="gtm-stage-number">0{index + 1}</span>{item.label}</button>)}
      </div>
      <div ref={viewport} className="gtm-scene-scroll" tabIndex={0} role="region" aria-label="GTM machine illustration; scroll horizontally on smaller screens">
        <svg className="gtm-scene" viewBox="0 0 900 380" role="img" aria-labelledby={id('title')} aria-describedby={id('description')}>
          <title id={id('title')}>A GTM machine, from awareness to a growing customer relationship</title>
          <desc id={id('description')}>An A/B experiment launches a lead into a funnel. Scoring and routing release it onto a sales track, past a demo television and an objection hurdle, into a relationship photo booth. Connected systems below the track enrich, qualify, sync the CRM, and monitor customer health. A feedback circuit returns learning to marketing.</desc>
          <defs>
            <linearGradient id={id('paper')} x2="0" y2="1"><stop stopColor="#fffdf7" /><stop offset="1" stopColor="#ede6d7" /></linearGradient>
            <linearGradient id={id('metal')} x2="0" y2="1"><stop stopColor="#aac4cc" /><stop offset=".3" stopColor="#eef4f3" /><stop offset=".55" stopColor="#7295a0" /><stop offset="1" stopColor="#284d5a" /></linearGradient>
            <linearGradient id={id('teal')} x2=".9" y2="1"><stop stopColor="#377d87" /><stop offset=".4" stopColor="#1c5666" /><stop offset="1" stopColor="#0b303f" /></linearGradient>
            <linearGradient id={id('gold')} x2=".7" y2="1"><stop stopColor="#fff1b2" /><stop offset=".5" stopColor="#e6b74b" /><stop offset="1" stopColor="#a36b25" /></linearGradient>
            <linearGradient id={id('glass')} x2="1" y2="1"><stop stopColor="#fff" stopOpacity=".85" /><stop offset=".4" stopColor="#a0d7dc" stopOpacity=".3" /><stop offset="1" stopColor="#5795a4" stopOpacity=".55" /></linearGradient>
            <pattern id={id('grid')} width="24" height="24" patternUnits="userSpaceOnUse"><path d="M24 0H0V24" fill="none" stroke="#2b6576" strokeOpacity=".045" strokeWidth="1" /></pattern>
            <filter id={id('shadow')} x="-30%" y="-30%" width="160%" height="180%"><feDropShadow dx="0" dy="5" stdDeviation="4" floodColor="#133a46" floodOpacity=".15" /></filter>
            <filter id={id('glow')}><feGaussianBlur stdDeviation="3" /></filter>
          </defs>
          <rect width="900" height="380" fill={paint('grid')} />
          <ellipse cx="450" cy="239" rx="405" ry="13" fill="#133a46" opacity=".05" />
          <text x="40" y="35" className="gtm-svg-caption">CUSTOMER JOURNEY</text>
          <text x="40" y="274" className="gtm-svg-caption">THE AUTOMATION UNDERNEATH</text>

          {/* Warm metal track. The gate at qualification joins customer motion to systems. */}
          <path d="M100 161 C145 161 157 126 190 145 L245 173 L288 213 H700" stroke="#5b7c88" strokeWidth="8" fill="none" strokeLinecap="round" />
          <path d="M100 158 C145 158 157 123 190 142 L245 170 L288 210 H700" stroke={paint('metal')} strokeWidth="6" fill="none" strokeLinecap="round" />
          {[348, 495, 650].map((x) => <g key={x}><path d={`M${x} 214V235`} stroke="#315967" strokeWidth="5" /><ellipse cx={x} cy="237" rx="14" ry="3" fill="#7295a0" /></g>)}

          {/* A/B experiment and outbound message launcher. */}
          <g filter={paint('shadow')}>
            <rect x="53" y="182" width="117" height="49" rx="9" fill={paint('teal')} />
            <path d="M65 190H156" stroke="#7fb5bf" strokeOpacity=".5" />
            <circle cx="77" cy="207" r="5" fill={stage === 0 ? '#efc86b' : '#749b9b'} />
            <rect x="94" y="198" width="58" height="19" rx="4" fill="#0b303f" /><text x="123" y="211" textAnchor="middle" fill="#c6e3e4" fontSize="10">OUTBOUND</text>
            {[78, 128].map((x, index) => <g key={x}>
              <path d={`M${x-6} 88V122L${x-19} 154Q${x-24} 167 ${x-12} 167H${x+12}Q${x+24} 167 ${x+19} 154L${x+6} 122V88`} fill={paint('glass')} stroke="#6c9fac" strokeWidth="1.5" />
              <path d={`M${x-16} 148H${x+16}L${x+20} 158Q${x+22} 164 ${x+12} 164H${x-12}Q${x-22} 164 ${x-20} 158Z`} fill={index === 0 ? '#efc86b' : '#57bfc3'} opacity=".85" />
              <text x={x} y="79" textAnchor="middle" fontSize="15" fontWeight="600" fill="#234f5e">{index === 0 ? 'A' : 'B'}</text>
              <motion.circle cx={x-4} cy="155" r="2" fill="#fff" animate={running && stage === 0 && !reduced ? { cy: [155, 134, 155], opacity: [.6, 0, .6] } : { cy: 155, opacity: .6 }} transition={{ duration: 1, repeat: running && stage === 0 ? 1 : 0 }} />
            </g>)}
            <motion.g animate={running && stage === 0 && !reduced ? { x: [0, 48], y: [0, -20], opacity: [1, 0] } : { x: 0, y: 0, opacity: 1 }} transition={{ duration: 1.1 }}>
              <rect x="164" y="105" width="28" height="19" rx="3" fill={paint('paper')} stroke="#baa989" /><path d="M166 108L178 117L190 108" fill="none" stroke="#a88752" />
            </motion.g>
          </g>
          <text x="112" y="253" className="gtm-svg-label" textAnchor="middle">Test &amp; reach</text>

          {/* A glass funnel with an electrically controlled qualification gate. */}
          <g filter={paint('shadow')}>
            <path d="M217 130H316L281 179V196H253V179Z" fill={paint('glass')} stroke="#699aa6" strokeWidth="1.5" />
            <ellipse cx="266" cy="130" rx="50" ry="8" fill="#d2e5e8" stroke="#699aa6" />
            <ellipse cx="266" cy="130" rx="43" ry="4" fill="#a9cbd3" opacity=".45" />
            <path d="M229 140L257 178" stroke="white" strokeWidth="3" opacity=".7" />
            <motion.path d="M250 197H284" stroke="#c79b48" strokeWidth="5" strokeLinecap="round" animate={stage !== null && stage >= 1 && !reduced ? { rotate: -35 } : { rotate: 0 }} style={{ transformOrigin: '250px 197px' }} transition={{ duration: .4 }} />
            <circle cx="250" cy="197" r="5" fill={paint('gold')} />
          </g>
          <text x="266" y="101" className="gtm-svg-label" textAnchor="middle">Qualified?</text>

          {/* Analog demo TV, with one restrained burst of scan lines. */}
          <g filter={paint('shadow')}>
            <path d="M425 95L410 74M425 95L440 71" stroke="#7295a0" strokeWidth="2" />
            <rect x="371" y="98" width="111" height="83" rx="12" fill={paint('teal')} />
            <rect x="379" y="106" width="79" height="64" rx="10" fill="#112a31" stroke="#97b8b8" />
            <text x="418" y="143" textAnchor="middle" fontFamily="monospace" fontSize="18" letterSpacing="2" fill={stage === 2 ? '#f8e6a3' : '#a3c6c9'}>DEMO</text>
            <motion.g animate={running && stage === 2 && !reduced ? { opacity: [.05, .25, .05] } : { opacity: .05 }} transition={{ duration: .4, repeat: running && stage === 2 ? 2 : 0 }}>
              {[112, 122, 132, 142, 152, 162].map((y) => <path key={y} d={`M384 ${y}H453`} stroke="#d7ece9" />)}
            </motion.g>
            <circle cx="470" cy="126" r="4" fill={paint('metal')} /><circle cx="470" cy="146" r="4" fill={paint('metal')} />
            <path d="M388 181L383 190M465 181L470 190" stroke="#345e6a" strokeWidth="4" />
          </g>
          <text x="426" y="253" className="gtm-svg-label" textAnchor="middle">Show the value</text>

          {/* Objection hurdle; a handoff pulse releases the mechanism. */}
          <g>
            <path d="M558 211V180H590V211" fill="none" stroke={paint('metal')} strokeWidth="5" strokeLinecap="round" />
            <motion.g animate={stage !== null && stage >= 2 && !reduced ? { rotate: -12 } : { rotate: 0 }} style={{ transformOrigin: '590px 181px' }} transition={{ duration: .45, delay: .65 }}>
              <rect x="543" y="137" width="62" height="24" rx="4" fill={paint('paper')} stroke="#c8b99e" transform="rotate(-8 574 150)" />
              <text x="574" y="153" textAnchor="middle" fontSize="9" fill="#8d6440" transform="rotate(-8 574 150)">OBJECTION</text>
            </motion.g>
          </g>

          {/* Customer success photo booth and a relationship, over time. */}
          <g filter={paint('shadow')}>
            <rect x="713" y="88" width="121" height="144" rx="14" fill={paint('teal')} />
            <rect x="723" y="98" width="101" height="22" rx="5" fill={paint('paper')} /><text x="773" y="112" textAnchor="middle" fontSize="10" letterSpacing="1" fill="#305a68">THE LONG GAME</text>
            <rect x="726" y="129" width="70" height="65" rx="7" fill="#102c38" /><path d="M733 135H786" stroke="#538692" />
            <circle cx="808" cy="145" r="6" fill={paint('gold')} />
            <rect x="742" y="208" width="68" height="5" rx="2" fill="#071e29" />
            <motion.g animate={arrived || (stage === 3 && !running) ? { opacity: 1, y: 0 } : { opacity: 0, y: -14 }} transition={{ duration: reduced ? 0 : .65 }}>
              <g transform="translate(822 155) rotate(8)">
                <rect width="44" height="113" rx="3" fill={paint('paper')} stroke="#c8b99e" />
                {[0, 1, 2].map((age) => <g key={age} transform={`translate(4 ${5 + age * 35})`}>
                  <rect width="36" height="30" rx="1" fill={age === 2 ? '#c4c6bd' : '#c6d9d7'} />
                  <circle cx="10" cy="15" r="5" fill={paint('gold')} />
                  <circle cx="25" cy="12" r="5" fill="#bf9472" /><path d="M17 29Q17 18 25 18Q33 18 33 29" fill={age === 2 ? '#6b7270' : '#23586a'} />
                  <path d="M21 9Q25 3 29 9" stroke={age === 2 ? '#f0eee4' : '#58473b'} strokeWidth="3" fill="none" />
                </g>)}
              </g>
            </motion.g>
          </g>

          {/* Shared backend: visible wiring, stage-specific activity, and a feedback loop. */}
          <path d="M112 233V294H266V211M266 294H426V213M426 294H647V213M647 294H773V233" stroke="#6b9da7" strokeWidth="2" fill="none" />
          <path d="M773 331V355H112V330" stroke="#9db2b3" strokeWidth="1.5" fill="none" strokeDasharray="4 5" />
          <path d="M107 337L112 330L117 337" stroke="#9db2b3" strokeWidth="1.5" fill="none" />
          <text x="450" y="369" textAnchor="middle" className="gtm-svg-caption">CUSTOMER SIGNALS FEED THE NEXT EXPERIMENT</text>
          {[
            { x: 112, label: 'ENRICH / DEDUP', index: 0 },
            { x: 266, label: 'SCORE / ROUTE', index: 1 },
            { x: 486, label: 'CRM / HANDOFF', index: 2 },
            { x: 773, label: 'USAGE / HEALTH', index: 3 },
          ].map((node) => <g key={node.label}>
            <rect x={node.x-62} y="299" width="124" height="31" rx="6" fill={stage === node.index ? '#164b5b' : '#eff2ee'} stroke={stage === node.index ? '#286678' : '#c5d2d0'} />
            <circle cx={node.x-49} cy="314" r="3" fill={stage === node.index ? '#efc86b' : '#9aafac'} />
            <text x={node.x+5} y="318" textAnchor="middle" fontSize="9" letterSpacing=".5" fill={stage === node.index ? '#f2efe3' : '#4e6a70'}>{node.label}</text>
            {running && stage === node.index && !reduced && <motion.circle cx={node.x} r="3" fill="#46b5be" initial={{ cy: 295, opacity: 0 }} animate={{ cy: [295, 250, 215], opacity: [0, 1, 0] }} transition={{ duration: 1, delay: .2 }} />}
          </g>)}
          {/* One deal token travels through the scene; no ambient looping. */}
          {active && <g key={runId} opacity={arrived || (stage === 3 && !running) ? 0 : 1} transform={running && !reduced ? undefined : `translate(${active.x[active.x.length-1]} ${active.y[active.y.length-1]})`}>
            {running && !reduced && <animateMotion ref={coinAnimation} begin="indefinite" path={DEAL_PATH} dur={`${STAGE_DURATION * stages.length / 1000}s`} calcMode="paced" fill="freeze" />}
            <circle r="12" fill="#efc86b" opacity=".15" /><circle r="10" fill={paint('gold')} stroke="#b18438" /><circle r="7" fill="none" stroke="#fff1b2" strokeWidth=".7" /><text y="4" textAnchor="middle" fill="#805722" fontSize="11" fontWeight="600">$</text>
          </g>}
        </svg>
      </div>
      <div className="gtm-machine-explanation" aria-live="polite" aria-atomic="true">
        <div><h3>{active?.title || 'A customer journey is only as good as the system underneath.'}</h3><p>{active?.detail || 'Press play to follow one opportunity through the machine, or select a stage to see what makes it work.'}</p></div>
        <span className="gtm-system-label">{active?.system || 'Built to connect the dots'}</span>
      </div>
    </section>
  );
}

