import * as WebBrowser from 'expo-web-browser';

async function handlePress() {
  let result = await WebBrowser.openBrowserAsync('https://www.example.com');
  console.log({ result });
}

// ... rest of the component