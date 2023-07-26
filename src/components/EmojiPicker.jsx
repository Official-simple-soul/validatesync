// import React, { useState } from 'react';
// import { Picker } from 'emoji-mart';
// import 'emoji-mart/css/emoji-mart.css';
// import { AiOutlineSend } from 'react-icons/ai';

// const EmojiPicker = ({ onSelectEmoji }) => {
//   const [showEmojiPicker, setShowEmojiPicker] = useState(false);

//   const handleSelectEmoji = (emoji) => {
//     onSelectEmoji(emoji.native);
//     setShowEmojiPicker(false);
//   };

//   return (
//     <div className='relative'>
//       <div onClick={() => setShowEmojiPicker(!showEmojiPicker)}>
//         <span role='img' aria-label='emoji-picker' className='cursor-pointer'>
//           😀
//         </span>
//       </div>
//       {showEmojiPicker && (
//         <div className='absolute bottom-10 right-0 z-50'>
//           <Picker onSelect={handleSelectEmoji} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default EmojiPicker

import React, { useState } from 'react';
import Picker from 'emoji-picker-react';

const EmojiPicker = ({ onEmojiClick, showEmoji }) => {
  return (
    <div className='bg-white'>
      {showEmoji ? <Picker onEmojiClick={onEmojiClick} /> : null}
    </div>
  );
};

export default EmojiPicker;
