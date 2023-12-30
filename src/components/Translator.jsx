// import React, { useState } from 'react';
// import translate from 'google-translate-api';

// const Translator = () => {
//   const [translatedText, setTranslatedText] = useState('');
//   const textToTranslate = 'Hello, this is a sample text to be translated';

//   const handleTranslation = async () => {
//     try {
//       const res = await translate(textToTranslate, { to: 'es' }); // Translate to Spanish ('es')
//       setTranslatedText(res.text);
//     } catch (error) {
//       console.error('Translation error:', error);
//     }
//   };

//   return (
//     <div>
//       <button onClick={handleTranslation}>Translate</button>
//       <p>Original Text: {textToTranslate}</p>
//       <p>Translated Text: {translatedText}</p>
//     </div>
//   );
// };

// export default Translator;
