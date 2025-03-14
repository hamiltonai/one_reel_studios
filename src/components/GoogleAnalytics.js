import { useEffect } from 'react';

const GoogleAnalytics = () => {
  useEffect(() => {
    // Get the tracking ID from environment variables
    const trackingId = process.env.REACT_APP_GA_TRACKING_ID;
    
    if (trackingId) {
      // Create script elements
      const gtagScript = document.createElement('script');
      gtagScript.async = true;
      gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
      
      const dataLayerScript = document.createElement('script');
      dataLayerScript.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${trackingId}');
      `;
      
      // Add scripts to document head
      document.head.appendChild(gtagScript);
      document.head.appendChild(dataLayerScript);
      
      // Clean up on component unmount
      return () => {
        document.head.removeChild(gtagScript);
        document.head.removeChild(dataLayerScript);
      };
    }
  }, []);
  
  return null; // This component doesn't render anything
};

export default GoogleAnalytics; 