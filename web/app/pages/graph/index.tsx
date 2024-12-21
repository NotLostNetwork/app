import { Input } from "@telegram-apps/telegram-ui"
import TWallpaper, { TWallpaperHandlers } from "@twallpaper/react"
import { useEffect, useRef, useState } from "react"

export default function GraphPage() {

  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      const newHeight = window.visualViewport
        ? window.visualViewport.height
        : window.innerHeight;
      setViewportHeight(newHeight);
    };

    // Add event listeners for viewport resizing
    window.visualViewport?.addEventListener('resize', handleResize);
    window.addEventListener('resize', handleResize);

    // Cleanup listeners on unmount
    return () => {
      window.visualViewport?.removeEventListener('resize', handleResize);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div style={{
      height: viewportHeight,
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    }}>
      Test viewport
      <Input
        autoFocus={true}
        className=" p-0 text-white bg-gray-800"
        style={{ color: "white" }}
        type="text"
        placeholder="Tags"
        value={"tagsValue"}
        onChange={(e) => {}}
    />
    </div>
  )
}
