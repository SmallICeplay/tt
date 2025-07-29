import React from 'react';

const FooterBanner = () => {
  return (
    <div className="w-full mt-6">
      {/* 大屏图片 */}
      <img
        src="/public/footer-desktop.png"
        alt="footer banner desktop"
        className="hidden sm:block w-full object-cover"
        style={{ minHeight: 120 }}
      />
      {/* 小屏图片 */}
      <img
        src="/public/footer-mobile.png"
        alt="footer banner mobile"
        className="block sm:hidden w-full object-cover"
        style={{ minHeight: 80 }}
      />
    </div>
  );
};

export default FooterBanner; 