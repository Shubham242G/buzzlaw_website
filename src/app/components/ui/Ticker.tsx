'use client'

export const Ticker = () => {
  const items = [
    'Trademark Registration',
    'Influencer Agreements',
    'Fashion Law',
    'Copyright Protection',
    'Creator Economy Law',
    'Brand Protection',
    'Anti-Counterfeiting',
    'Media & Entertainment',
  ]

  return (
    <div className="bg-[#9866cb] py-3.5 overflow-hidden whitespace-nowrap">
      <div className="inline-flex animate-[ticker_30s_linear_infinite]">
        {[...items, ...items].map((item, idx) => (
          <span key={idx} className="font-['Bebas_Neue'] text-base tracking-[0.15em] text-[#0a0a0a] px-10">
            {item}
            {idx < items.length * 2 - 1 && <span className="text-[rgba(10,10,10,0.3)] ml-10">✦</span>}
          </span>
        ))}
      </div>
    </div>
  )
}