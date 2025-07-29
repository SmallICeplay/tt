const bannerImages = [
  '/home/banner/Mask group-1.png',
  '/home/banner/Mask group-2.png',
  '/home/banner/Mask group-3.png',
  '/home/banner/Mask group-4.png',
  '/home/banner/Mask group-5.png',
  '/home/banner/Mask group-6.png',
  '/home/banner/Mask group-7.png',
];

// 你可以用 emoji 作为按钮图标，也可以用 react-icons，如果需要更换请告知
const buttonData = [
  { icon: '/home/sun.png', label: '领养' },
  { icon: '/home/sun.png', label: '社区入驻' },
  { icon: '/home/sun.png', label: '广告投放' },
];

const noticeIcon = '📢'; // 喇叭 emoji，可换成 react-icons

const CryptoTrending = () => {
  return (
    <div className="w-full px-4">
      {/* 第一行：通告和按钮 */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-2 w-full">
        <span className="text-xs text-black font-normal mb-1 sm:mb-0 hidden sm:flex items-center gap-1">
          <span>{noticeIcon}</span>
          <span>XBOT机器人0.5版本发布</span>
        </span>
        <div className="flex gap-3">
          {buttonData.map(btn => (
            <button
              key={btn.label}
              className="bg-white text-black text-sm font-normal py-2 px-3 rounded-lg flex items-center gap-3 sm:gap-3 gap-1 border-none shadow-none whitespace-nowrap"
              style={{ boxShadow: 'none', border: 'none' }}
            >
              <img src={btn.icon} alt="icon" className="w-6 h-6 rounded-full mr-0" />
              <span>{btn.label}</span>
            </button>
          ))}
        </div>
      </div>
      {/* 小屏时只显示按钮 */}
      <div className="flex sm:hidden justify-center mb-2">
        {/* 小屏不显示通告，仅保留按钮 */}
      </div>
      {/* 第二行：Banner图片，图片高度提升 */}
      <div className="w-full flex gap-2">
        {bannerImages.map((src, idx) => (
          <img
            key={src}
            src={src}
            alt={`banner${idx+1}`}
            className="rounded hidden sm:block"
            style={{ width: '14%', height: '80px', objectFit: 'cover' }}
          />
        ))}
        {/* 小屏只显示前两张 */}
        {bannerImages.slice(0,2).map((src, idx) => (
          <img
            key={src+"-mobile"}
            src={src}
            alt={`banner${idx+1}`}
            className="rounded sm:hidden"
            style={{ width: '48%', height: '80px', objectFit: 'cover' }}
          />
        ))}
      </div>
    </div>
  )
}

export default CryptoTrending
