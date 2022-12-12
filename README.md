# Image-Color-Extractor


🎉 Image-Color-Extractor allows you to extract color from images and use it in your app with ease. No more nonsense!

## Installation

```
$ npm install image-color-extractor
```

## The gist

```jsx
  import React from 'react';
  import { useEffect } from 'react';

  import extractSingleColor from 'image-color-extractor';
  
  function App(){
    useEffect(() => {
    extractSingleColor(imageURI)
      .then(color => console.log(color))
      .catch(error => console.error(error))
  }, []);

    return (
      <div>
        
      </div>
    );
  }
```

## Contribute

Show your ❤️ and support by giving a ⭐. Any suggestions are welcome! Take a look at the contributing guide.

## Release Notes

You can find the release note for the latest release [here](https://github.com/abhinandanwadwa/image-color-extractor-npm-package/releases/latest)

You can browse them all [here](https://github.com/abhinandanwadwa/image-color-extractor-npm-package/releases)

## License

Licensed under MIT
