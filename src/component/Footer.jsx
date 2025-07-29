import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#fafbfc] pt-4 border-t border-gray-100">
      {/* 品牌横幅图片（大屏） */}
      <div className="hidden sm:block w-full mb-4">
      <img src="/home/bottom/bigtop.png" alt="brands banner" className="w-full object-cover" />
        <img src="/home/bottom/bigbottom.png" alt="brands banner" className="w-full object-cover"   style={{position: 'absolute'}}/>
      </div>
      {/* 品牌横幅图片（小屏） */}
      <div className="block sm:hidden w-full mb-4">
        <img src="/home/bottom/small.png" alt="brands banner mobile" className="w-full object-cover" style={{position: 'absolute'}} />
      </div>

      {/* 信息区 ...（保持原有内容）... */}
      <div className="max-w-7xl mx-auto mt-8 px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-gray-700">
        {/* ...原有四列内容... */}
      </div>

      {/* 支付方式和版权 ...（保持原有内容）... */}
      

      {/* 最底部横幅图片（大屏） */}
     
    </footer>
  );
};

export default Footer; 